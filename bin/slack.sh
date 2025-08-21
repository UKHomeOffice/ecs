#!/bin/bash
set -e

NAME=$(echo "${APP_NAME}" | tr '-' ' ' | tr '_' ' ' | tr '[:lower:]' '[:upper:]')
HEADER="*${NAME} - ${PING_NAME}*"
BUILD="<${DRONE_BUILD_LINK}|#${DRONE_BUILD_NUMBER}>"

if [[ ${DRONE_BUILD_STATUS} == 'success' ]]; then
  STATUS="${DRONE_BUILD_STATUS}%:thumbsup:"
else
  STATUS="${DRONE_BUILD_STATUS}%:x:"
fi

DURATION="$(($(date +%s) - $DRONE_BUILD_CREATED))%seconds"
COMMIT="<${DRONE_COMMIT_LINK}|${DRONE_SOURCE_BRANCH}>"

BULLETS=("Status" "Build" "Author" "Duration" "Commit")
INFO=($STATUS $BUILD $DRONE_COMMIT_AUTHOR $DURATION $COMMIT)
BODY="${HEADER}"

for i in "${!BULLETS[@]}"; do
  BODY="${BODY}\n• ${BULLETS[i]}: ${INFO[i]}"
done

BODY=$(echo $BODY | tr '%' ' ')

security_post_data()
{
  cat <<EOF
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "$BODY"
      },
      "accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Pull Request",
					"emoji": true
				},
				"value": "pull_request",
				"url": "$DRONE_COMMIT_LINK"
			}
    }
  ]
}
EOF
}

if [[ $1 == ${SLACK_SECURITY_CRON_WEBHOOK} ]]; then
  BODY="$(security_post_data)"
elif [[ $1 == ${SLACK_TEARDOWN_WEBHOOK} ]]; then
  BODY="$(security_post_data)"
elif [[ $1 == ${SLACK_DEPLOYMENT_WEBHOOK} ]]; then
  BODY="$(security_post_data)"
fi

curl -i \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X POST --data "$BODY" "$1"
