const hof = require('hof');
const Summary = hof.components.summary;
const config = require('../../config');
const legislativeEmploymentDate = config.legislativeEmploymentDate;

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
        }
      ],
      next: '/digital-right-to-work-service'
    },
    '/when-started': {
      fields: ['start-work-date'],
      forks: [
        {
          target: '/tupe',
          condition: req => req.sessionModel.get('start-work-date') < legislativeEmploymentDate
        }
      ],
      next: '/digital-right-to-work-service'
    },
    '/tupe': {
      next: '/check-your-answers'
    },
    '/digital-right-to-work-service': {
      fields: ['use-digital-right-to-work'],
      forks: [
        {
          target: '/eu-settlement-scheme',
          condition: {
            field: 'use-digital-right-to-work',
            value: 'no'
          }
        }
      ],
      next: '/right-to-work-check'
    },
    '/eu-settlement-scheme': {
      fields: ['worker-applied-eu-settlement-scheme'],
      forks: [
        {
          target: '/arc-card',
          condition: {
            field: 'worker-applied-eu-settlement-scheme',
            value: 'none-of-above'
          }
        }
      ],
      next: '/right-to-work-check'
    },
    '/right-to-work-check': {
      next: '/worker-details-1988'
    },
    '/worker-details-1988': {

    },
    '/arc-card': {
      fields: ['worker-has-arc-card'],
      next: '/check-your-answers'
    },

    '/check-your-answers': {
      behaviours: Summary,
      sections: require('./sections/summary-data-sections'),
      template: 'summary'
    }
  }
};
