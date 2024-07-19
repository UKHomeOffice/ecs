
'use strict';

const moment = require('moment');
const PRETTY_DATE_FORMAT = 'DD MMMM YYYY';

module.exports = {
  'eligibility-criteria': {
    steps: [
      {
        step: '/eligibility',
        field: 'worker-has-eligible-docs'
      },
      {
        step: '/already-employed',
        field: 'person-work-for-you'
      },
      {
        step: '/when-started',
        field: 'start-work-date',
        parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)
      },
      {
        step: '/tupe',
        field: 'work-for-you-result-of-tupe-transfer'
      },
      {
        step: '/tupe-date',
        field: 'tupe-date',
        parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)
      },
      {
        step: '/digital-right-to-work-service',
        field: 'use-digital-right-to-work'
      },
      {
        step: '/eu-settlement-scheme',
        field: 'worker-applied-eu-settlement-scheme'
      },
      {
        step: '/arc-card',
        field: 'worker-has-arc-card'
      },
      {
        step: '/ongoing-appeal',
        field: 'worker-have-ongoing-appeal'
      },
      {
        step: '/before-1988',
        field: 'worker-been-in-UK-before-1988'
      },
      {
        step: '/settlement-protection',
        field: 'worker-applied-for-settlement-protection'
      }
    ]
  },
  'employee-details': {
    steps: [
      {
        step: '/worker-details',
        field: 'worker-been-in-uk-before-1988-full-name'
      },
      {
        step: '/worker-details',
        field: 'worker-been-in-uk-before-1988-dob'
      },
      {
        step: '/worker-details',
        field: 'worker-been-in-uk-before-1988-nationality'
      },
      {
        step: '/reference-number',
        field: 'worker-reference-number'
      }
    ]
  },
  'current-address': {
    steps: []
  },
  'their-employment': {
    steps: []
  },
  'contact-details': {
    steps: []
  },
  'workers-job-information': {
    steps: []
  },
  'business-address': {
    steps: []
  },
  'employer-contact-details': {
    steps: []
  }
};
