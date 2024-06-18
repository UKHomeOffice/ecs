
'use strict';

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
    steps: ['start-work-date']
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