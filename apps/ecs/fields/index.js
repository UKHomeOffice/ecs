const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();

module.exports = {
  'worker-has-eligible-docs': {
    className: 'govuk-radios--inline',
    legend: {
      className: 'visuallyhidden'
    },
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'person-work-for-you': {
    isPageHeading: 'true',
    className: 'govuk-radios--inline',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'start-work-date': dateComponent('start-work-date', {
    isPageHeading: 'true',
    mixin: 'input-date',
    validate: [
      'required', 'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['100', 'years']}
    ]
  }),
  'use-digital-right-to-work': {
    className: 'govuk-radios--inline',
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'worker-applied-eu-settlement-scheme': {
    legend: {
      className: 'visuallyhidden'
    },
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes-certificate-of-application'
      },
      {
        value: 'yes-evidence-of-settled-status'
      },
      {
        value: 'no-frontier-worker'
      },
      {
        value: 'none-of-above'
      }
    ]
  },
  'worker-has-arc-card': {
    className: 'govuk-radios--inline',
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'work-for-you-result-of-tupe-transfer': {
    className: 'govuk-radios--inline',
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'tupe-date': dateComponent('tupe-date', {
    isPageHeading: 'true',
    mixin: 'input-date',
    validate: [
      'required', 'date',
      { type: 'before', arguments: ['0', 'days'] }
    ]
  }),
  'worker-have-ongoing-appeal': {
    className: 'govuk-radios--inline',
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'worker-been-in-UK-before-1988': {
    className: 'govuk-radios--inline',
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'worker-applied-for-settlement-protection': {
    className: 'govuk-radios--inline',
    legend: {
      className: 'visuallyhidden'
    },
    isPageHeading: 'true',
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  'worker-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input']
  },
  'worker-dob': dateComponent('worker-dob', {
    mixin: 'input-date',
    validate: [
      'required', 'date',
      { type: 'before', arguments: ['16', 'years'] },
      { type: 'after', arguments: ['100', 'years']}
    ]
  }),
  'worker-nationality': {
    mixin: 'select',
    className: ['typeahead'],
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.worker-nationality.options.null'
    }].concat(countries)
  },
  'worker-place-of-birth': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'worker-year-of-entry-to-uk': {
    mixin: 'input-text',
    validate: ['required', 'numeric', { type: 'maxlength', arguments: [4] }],
    className: ['govuk-input', 'govuk-input--width-4']
  },
  'worker-national-insurance-number': {
    mixin: 'input-text',
    validate: ['required', 'notUrl'],
    className: ['govuk-input', 'govuk-!-width-one-third']
  },
  'employer-telephone': {
    mixin: 'input-text',
    validate: ['notUrl', 'ukPhoneNumber'],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'employer-email': {
    mixin: 'input-text',
    validate: ['required', 'email']
  },
  'worker-address-line-1': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-address-line-2': {
    validate: ['notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-town-or-city': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-country': {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead'],
    options: [
      {
        value: '',
        label: 'fields.worker-country.options.null'
      }
    ].concat(countries)
  },
  'worker-uk-address-line-1': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-uk-address-line-2': {
    validate: ['notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-uk-town-or-city': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'worker-uk-postcode': {
    validate: ['required', 'notUrl', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  }
};
