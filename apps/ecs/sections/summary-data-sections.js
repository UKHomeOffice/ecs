
'use strict';

const moment = require('moment');
const PRETTY_DATE_FORMAT = 'DD MMMM YYYY';

module.exports = {
  'eligibility-criteria': {
    steps: [
      {
        step: '/eligibility',
        field: 'worker-has-eligible-docs',
      },
      {
        step: '/already-employed',
        field: 'person-work-for-you'
      }
    ]
  },
  'employee-details': {
    steps: []
  },
  'current-address': {
    steps: []
  },
  'their-employment': {
    steps: [{
      step: '/when-started',
      field: 'start-work-date',
      parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)
    }]
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