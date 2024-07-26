
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
        field: 'work-for-you-result-of-tupe-transfer',
        parse: (value, req) => {
          if (req.sessionModel.get('person-work-for-you') === 'no' ||
            !req.sessionModel.get('steps').includes('/tupe')) {
            return null;
          }
          return value;
        }
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
        field: 'worker-applied-eu-settlement-scheme',
        parse: (value, req) => {
          if (req.sessionModel.get('use-digital-right-to-work') === 'yes' ||
            !req.sessionModel.get('steps').includes('/eu-settlement-scheme')) {
            return null;
          }
          return value;
        }
      },
      {
        step: '/arc-card',
        field: 'worker-has-arc-card',
        parse: (value, req) => {
          if (req.sessionModel.get('use-digital-right-to-work') === 'yes' ||
            !req.sessionModel.get('steps').includes('/arc-card')) {
            return null;
          }
          return value;
        }
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
      },
      {
        step: '/original-document',
        field: 'seen-original-document'
      },
      {
        step: '/arc-number',
        field: 'arc-number'
      }
    ]
  },
  'worker-details': {
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
        parse: ni => ni?.toUpperCase() ?? null
      },
      {
        step: '/worker-details-1988',
        field: 'employer-telephone'
      },
      {
        step: '/worker-details-1988',
        field: 'employer-email'
      },
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
  'worker-address': {
    steps: [
      {
        step: '/worker-address',
        field: 'worker-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/worker-address')) {
            return null;
          }
          const workerAddressDetails = [];
          workerAddressDetails.push(req.sessionModel.get('worker-address-line-1'));
          if (req.sessionModel.get('worker-address-line-2')) {
            workerAddressDetails.push(req.sessionModel.get('worker-address-line-2'));
          }
          workerAddressDetails.push(req.sessionModel.get('worker-town-or-city'));
          req.sessionModel.set('workerAddress', workerAddressDetails.join(', '));
          return workerAddressDetails.join('\n');
        }
      },
      {
        step: '/worker-address',
        field: 'worker-country'
      },
      {
        step: '/worker-address-uk',
        field: 'worker-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/worker-address-uk')) {
            return null;
          }
          const workerUkAddressDetails = [];
          workerUkAddressDetails.push(req.sessionModel.get('worker-uk-address-line-1'));
          if (req.sessionModel.get('worker-uk-address-line-2')) {
            workerUkAddressDetails.push(req.sessionModel.get('worker-uk-address-line-2'));
          }
          workerUkAddressDetails.push(req.sessionModel.get('worker-uk-town-or-city'));
          workerUkAddressDetails.push(req.sessionModel.get('worker-uk-postcode'));
          req.sessionModel.set('workerUkAddress', workerUkAddressDetails.join(', '));
          return workerUkAddressDetails.join('\n');
        }
      }
    ]
  },
  'workers-job-information': {
    steps: [
      {
        step: '/job-information',
        field: 'job-title'
      },
      {
        step: '/job-information',
        field: 'hours-of-work-per-week'
      }
    ]
  },
  'employer-contact-details': {
    steps: [
      {
        step: '/employer-contact-details',
        field: 'business-name'
      },
      {
        step: '/employer-contact-details',
        field: 'type-of-business'
      },
      {
        step: '/employer-contact-details',
        field: 'employers-contact-name'
      },
      {
        step: '/employer-contact-details',
        field: 'contact-job-title'
      },
      {
        step: '/employer-contact-details',
        field: 'contact-telephone'
      },
      {
        step: '/employer-contact-details',
        field: 'contact-email-address'
      },
      {
        step: '/business-address',
        field: 'business-address-details',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/business-address')) {
            return null;
          }
          const businessAddressDetails = [];
          businessAddressDetails.push(req.sessionModel.get('business-address-line-1'));
          if (req.sessionModel.get('business-address-line-2')) {
            businessAddressDetails.push(req.sessionModel.get('business-address-line-2'));
          }
          businessAddressDetails.push(req.sessionModel.get('business-town-city'));
          businessAddressDetails.push(req.sessionModel.get('business-postcode'));
          req.sessionModel.set('businessAddress', businessAddressDetails.join(', '));
          return businessAddressDetails.join('\n');
        }
      }
    ]
  }
};
