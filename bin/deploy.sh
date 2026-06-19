#! /bin/bash
set -e

export INGRESS_INTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-internal-annotations.yaml
export INGRESS_EXTERNAL_ANNOTATIONS=$HOF_CONFIG/ingress-external-annotations.yaml
export CONFIGMAP_VALUES=$HOF_CONFIG/configmap-values.yaml
export NGINX_SETTINGS=$HOF_CONFIG/nginx-settings.yaml

kd='kd --insecure-skip-tls-verify --timeout 10m --check-interval 10s'

: "${REDIS_PERSISTENCE_ENABLED:=}"
: "${REDIS_PERSISTENCE_ACCESS_MODES:=ReadWriteOnce}"
: "${REDIS_PERSISTENCE_STORAGE_CLASS:=gp2-encrypted}"
: "${REDIS_PERSISTENCE_EXISTING_CLAIM:=}"
: "${REDIS_PERSISTENCE_SIZE:=1Gi}"

REDIS_PERSISTENCE_ENABLED=$(echo "${REDIS_PERSISTENCE_ENABLED}" | tr '[:upper:]' '[:lower:]')

configure_redis_persistence() {
  if [[ "${KUBE_NAMESPACE}" == "${PROD_ENV}" ]]; then
    REDIS_PERSISTENCE_ENABLED=true
    REDIS_PERSISTENCE_SIZE=10Gi
  elif [[ "${KUBE_NAMESPACE}" == "${STG_ENV}" ]]; then
    REDIS_PERSISTENCE_ENABLED=true
    REDIS_PERSISTENCE_SIZE=1Gi
  else
    REDIS_PERSISTENCE_ENABLED=false
  fi

  export REDIS_PERSISTENCE_ENABLED
  export REDIS_PERSISTENCE_ACCESS_MODES
  export REDIS_PERSISTENCE_STORAGE_CLASS
  export REDIS_PERSISTENCE_EXISTING_CLAIM
  export REDIS_PERSISTENCE_SIZE
}

deploy_redis() {
  if [[ "${REDIS_PERSISTENCE_ENABLED}" == "true" && -z "${REDIS_PERSISTENCE_EXISTING_CLAIM}" ]]; then
    $kd -f kube/redis/redis-pvc.yml
  fi

  $kd -f kube/redis/redis-service.yml -f kube/redis/redis-network-policy.yml -f kube/redis/redis-deployment.yml
}

delete_redis() {
  if [[ "${REDIS_PERSISTENCE_ENABLED}" == "true" && -z "${REDIS_PERSISTENCE_EXISTING_CLAIM}" ]]; then
    $kd --delete -f kube/redis/redis-pvc.yml
  fi

  $kd --delete -f kube/redis/redis-service.yml -f kube/redis/redis-network-policy.yml -f kube/redis/redis-deployment.yml
}

if [[ $1 == 'tear_down' ]]; then
  export KUBE_NAMESPACE=$BRANCH_ENV
  export DRONE_SOURCE_BRANCH=$(cat /root/.dockersock/branch_name.txt)
  configure_redis_persistence

  $kd --delete -f kube/configmaps/configmap.yml
  delete_redis
  $kd --delete -f kube/app
  echo "Torn Down UAT Branch - ecs-$DRONE_SOURCE_BRANCH.internal.$BRANCH_ENV.homeoffice.gov.uk"
  exit 0
fi

export KUBE_NAMESPACE=$1
export DRONE_SOURCE_BRANCH=$(echo $DRONE_SOURCE_BRANCH | tr '[:upper:]' '[:lower:]' | tr '/' '-')
configure_redis_persistence

if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
  $kd -f kube/configmaps -f kube/certs
  deploy_redis
  $kd -f kube/app
elif [[ ${KUBE_NAMESPACE} == ${UAT_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml -f kube/app/service.yml
  $kd -f kube/app/networkpolicy-internal.yml -f kube/app/ingress-internal.yml
  $kd -f kube/app/networkpolicy-external.yml -f kube/app/ingress-external.yml
  deploy_redis
  $kd -f kube/app/deployment.yml
elif [[ ${KUBE_NAMESPACE} == ${STG_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml
  deploy_redis
  $kd -f kube/app

elif [[ ${KUBE_NAMESPACE} == ${PROD_ENV} ]]; then
  $kd -f kube/configmaps/configmap.yml -f kube/app/service.yml
  $kd -f kube/app/networkpolicy-external.yml -f kube/app/ingress-external.yml
  deploy_redis
  $kd -f kube/app/deployment.yml
fi

sleep $READY_FOR_TEST_DELAY

if [[ ${KUBE_NAMESPACE} == ${BRANCH_ENV} ]]; then
  echo "Branch url - ecs-$DRONE_SOURCE_BRANCH.internal.$BRANCH_ENV.homeoffice.gov.uk"
fi

