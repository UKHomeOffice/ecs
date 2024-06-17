
module.exports = {
  name: 'ecs',
  baseUrl: '/',
  confirmStep: '/check-your-answers',
  steps: {
    '/eligibility': {
      fields: ['worker-has-eligible-docs'],
      forks: [
        {
          target: '/ineligible',
          condition: {
            field: 'worker-has-eligible-docs',
            value: 'yes'
          }
        }
      ],
      next: '/already-employed'
    },
    '/ineligible': {

    },
    '/already-employed': {
      fields: ['person-work-for-you'],
      forks: [
        {
          target: '/when-started',
          condition: {
            field: 'person-work-for-you',
            value: 'yes'
          }
        },
        {
          target: '/digital-right-to-work-service',
          condition: {
            field: 'person-work-for-you',
            value: 'no'
          }
        }
      ]
    },
    '/when-started': {
      fields: ['start-work-date'],
      forks: [
        {
          target: '/tupe',
          condition: req => req.sessionModel.get('start-work-date') < '2008-02-29'
        }
      ],
      next: '/digital-right-to-work-service'
    },
    '/digital-right-to-work-service': {
      fields: ['use-digital-right-to-work']
    }
  }
};
