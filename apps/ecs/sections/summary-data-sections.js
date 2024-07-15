
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
        step: '/worker-details-1988',
        field: 'worker-full-name'
      },
      {
        step: '/worker-details-1988',
        field: 'worker-dob'
      },
      {
        step: '/worker-details-1988',
        field: 'worker-nationality'
      },
      {
        step: '/worker-details-1988',
        field: 'worker-place-of-birth'
      },
      {
        step: '/worker-details-1988',
        field: 'worker-year-of-entry-to-uk'
      },
      {
        step: '/worker-details-1988',
        field: 'worker-national-insurance-number',
        parse: d => d.toUpperCase()
      }
    ]
  },
  'current-address': {
    steps: [
      {
        step: '/worker-address',
        field: 'worker-address-line-1'
      },
      {
        step: '/worker-address',
        field: 'worker-address-line-2'
      },
      {
        step: '/worker-address',
        field: 'worker-town-or-city'
      },
      {
        step: '/worker-address',
        field: 'worker-country'
      },
      {
        step: '/worker-address-uk',
        field: 'worker-uk-address-line-1'
      },
      {
        step: '/worker-address-uk',
        field: 'worker-uk-address-line-2'
      },
      {
        step: '/worker-address-uk',
        field: 'worker-uk-town-or-city'
      },
      {
        step: '/worker-address-uk',
        field: 'worker-uk-postcode'
      }
    ]
  },
  'their-employment': {
    steps: []
  },
  'contact-details': {
    steps: [
      {
        step: '/worker-details-1988',
        field: 'employer-telephone'
      },
      {
        step: '/worker-details-1988',
        field: 'employer-email'
      }
    ]
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
