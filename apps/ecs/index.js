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
      next: '/check-your-answers'
    },
    '/check-your-answers': {
      behaviours: Summary,
      sections: require('./sections/summary-data-sections'),
      template: 'summary'
    }
  }
};
