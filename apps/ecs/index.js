const hof = require('hof');
const Summary = hof.components.summary;
const config = require('../../config');
const legislativeEmploymentDate = config.legislativeEmploymentDate;
const checkValidation = require('./behaviours/check-validation');
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
      fields: ['work-for-you-result-of-tupe-transfer'],
      forks: [
        {
          target: '/ineligible-employee',
          condition: {
            field: 'work-for-you-result-of-tupe-transfer',
            value: 'no'
          }
        }
      ],
      next: '/tupe-date'
    },
    '/ineligible-employee': {

    },
    '/tupe-date': {
      behaviours: [checkValidation],
      fields: ['tupe-date'],
      forks: [
        {
          target: '/ineligible-tupe',
          condition: req => req.sessionModel.get('tupe-date') < legislativeEmploymentDate
        }
      ],
      next: '/digital-right-to-work-service'
    },
    '/ineligible-tupe': {

    },
    '/digital-right-to-work-service': {
      fields: ['use-digital-right-to-work'],
      next: '/eu-settlement-scheme'
    },
    '/eu-settlement-scheme': {
      next: '/arc-card'
    },
    '/arc-card': {
      fields: ['worker-has-arc-card'],
      forks: [
        {
          target: '/original-document',
          condition: {
            field: 'worker-has-arc-card',
            value: 'yes'
          }
        }
      ],
      next: '/ongoing-appeal'
    },
    '/original-document': {
      next: '/request-check'
    },
    '/request-check': {
      next: '/worker-details-1988'
    },
    '/worker-details-1988': {
      next: '/worker-address'
    },
    '/worker-address': {
      next: '/job-information'
    },
    '/ongoing-appeal': {
      fields: ['worker-have-ongoing-appeal'],
      forks: [
        {
          target: '/request-check',
          condition: {
            field: 'worker-have-ongoing-appeal',
            value: 'yes'
          }
        }
      ],
      next: '/before-1988'
    },
    '/before-1988': {
      fields: ['worker-been-in-UK-before-1988'],
      forks: [
        {
          target: '/request-check-before-1988',
          condition: {
            field: 'worker-been-in-UK-before-1988',
            value: 'yes'
          }
        }
      ],
      next: '/settlement-protection'
    },
    '/settlement-protection': {
      fields: ['worker-applied-for-settlement-protection'],
      next: '/request-check'
    },
    '/request-check-before-1988': {
      next: '/worker-details'
    },
    '/worker-details': {
      next: '/reference-number'
    },
    '/reference-number': {
      next: '/worker-address-uk'
    },
    '/worker-address-uk': {
      next: '/job-information'
    },
    '/job-information': {
      next: '/employer-contact-details'
    },
    '/employer-contact-details': {
      next: '/business-address'
    },
    '/business-address': {
      next: '/check-your-answers'
    },
    '/check-your-answers': {
      behaviours: Summary,
      sections: require('./sections/summary-data-sections'),
      template: 'summary',
      next: '/data-protection'
    },
    '/data-protection': {
      next: '/check-requested'
    },
    '/check-requested': {
      backLink: false,
      clearSession: true
    }
  }
};
