const hof = require('hof');
const Summary = hof.components.summary;
const config = require('../../config');
const legislativeEmploymentDate = config.legislativeEmploymentDate;
const checkValidation = require('./behaviours/check-validation');
const sendEmailNotification = require('./behaviours/submit-notify');

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
      continueOnEdit: true,
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
      continueOnEdit: true,
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
      continueOnEdit: true,
      forks: [
        {
          target: '/eu-settlement-scheme',
          condition: {
            field: 'use-digital-right-to-work',
            value: 'no'
          }
        }
      ],
      next: '/request-check'
    },
    '/eu-settlement-scheme': {
      fields: ['worker-applied-eu-settlement-scheme'],
      continueOnEdit: true,
      forks: [
        {
          target: '/arc-card',
          condition: {
            field: 'worker-applied-eu-settlement-scheme',
            value: 'none-of-above'
          }
        }
      ],
      next: '/request-check'
    },
    '/arc-card': {
      fields: ['worker-has-arc-card'],
      continueOnEdit: true,
      forks: [
        {
          target: '/ongoing-appeal',
          condition: {
            field: 'worker-has-arc-card',
            value: 'no'
          }
        }
      ],
      next: '/original-document'
    },
    '/original-document': {
      fields: ['seen-original-document'],
      forks: [
        {
          target: '/ineligible-document',
          condition: {
            field: 'seen-original-document',
            value: 'no'
          }
        }
      ],
      next: '/arc-number'
    },
    '/ineligible-document': {
    },
    '/arc-number': {
      fields: ['arc-number'],
      next: '/request-check'
    },
    '/request-check': {
      next: '/worker-details',
      continueOnEdit: true
    },
    '/worker-details-1988': {
      behaviours: [checkValidation],
      fields: [
        'before-1988-worker-full-name',
        'before-1988-worker-dob',
        'before-1988-worker-nationality',
        'before-1988-worker-place-of-birth',
        'before-1988-worker-year-of-entry-to-uk',
        'before-1988-worker-national-insurance-number',
        'before-1988-employer-telephone',
        'before-1988-employer-email'
      ],
      next: '/reference-number'
    },
    '/worker-address': {
      behaviours: [checkValidation],
      fields: [
        'worker-address-line-1',
        'worker-address-line-2',
        'worker-town-or-city',
        'worker-zipcode',
        'worker-country'
      ],
      next: '/job-information'
    },
    '/ongoing-appeal': {
      fields: ['worker-have-ongoing-appeal'],
      continueOnEdit: true,
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
      continueOnEdit: true,
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
      next: '/worker-details-1988'
    },
    '/worker-details': {
      continueOnEdit: true,
      behaviours: [checkValidation],
      forks: [
        {
          target: '/worker-address',
          condition: req => req.sessionModel.get('use-digital-right-to-work') === 'yes'
        }
      ],
      fields: [
        'worker-full-name',
        'worker-dob',
        'worker-nationality'
      ],
      next: '/worker-address-uk'
    },
    '/reference-number': {
      fields: ['worker-reference-number'],
      forks: [
        {
          target: '/worker-address',
          condition: req => req.sessionModel.get('use-digital-right-to-work') === 'yes'
        }
      ],
      next: '/worker-address-uk'
    },
    '/worker-address-uk': {
      fields: [
        'worker-uk-address-line-1',
        'worker-uk-address-line-2',
        'worker-uk-town-or-city',
        'worker-uk-postcode'
      ],
      next: '/job-information'
    },
    '/job-information': {
      fields: ['job-title', 'hours-of-work-per-week'],
      next: '/employer-contact-details'
    },
    '/employer-contact-details': {
      fields: ['business-name', 'type-of-business', 'employers-contact-name',
        'contact-job-title', 'contact-telephone', 'contact-email-address'],
      next: '/business-address'
    },
    '/business-address': {
      fields: ['business-address-line-1', 'business-address-line-2', 'business-town-city', 'business-postcode'],
      next: '/check-your-answers'
    },
    '/check-your-answers': {
      behaviours: Summary,
      sections: require('./sections/summary-data-sections'),
      template: 'summary',
      next: '/data-protection'
    },
    '/data-protection': {
      behaviours: [sendEmailNotification],
      fields: ['privacy-check'],
      next: '/check-requested'
    },
    '/check-requested': {
      backLink: false,
      clearSession: true
    }
  }
};
