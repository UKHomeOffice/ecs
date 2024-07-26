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
  'seen-original-document': {
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
  'arc-number': {
    isPageHeading: 'true',
    className: ['govuk-input', 'govuk-!-width-one-third'],
    validate: ['required', 'notUrl', 'alphanum', { type: 'maxlength', arguments: [20]}]
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
  'job-title': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }]
  },
  'hours-of-work-per-week': {
    validate: ['required', { type: 'max', arguments: 99 }, { type: 'min', arguments: 1 }],
    attributes: [{ suffix: 'hours' }],
    className: ['govuk-input--width-2', 'govuk-input']
  },
  'business-name': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }]
  },
  'type-of-business': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }]
  },
  'employers-contact-name': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }]
  },
  'contact-job-title': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }]
  },
  'contact-telephone': {
    validate: ['notUrl', 'ukPhoneNumber', 'required'],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'contact-email-address': {
    validate: ['required', 'email']
  },
  'business-address-line-1': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-address-line-2': {
    validate: ['notUrl', { type: 'maxlength', arguments: 254 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-town-city': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-postcode': {
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'worker-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
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
    }].concat(countries.filter(country => !['Ireland', 'United Kingdom'].includes(country.value)))
  },
  'worker-place-of-birth': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'worker-year-of-entry-to-uk': {
    mixin: 'input-text',
    validate: ['required', 'numeric', { type: 'maxlength', arguments: [4] }],
    className: ['govuk-input', 'govuk-input--width-4']
  },
  'worker-national-insurance-number': {
    mixin: 'input-text',
    validate: ['notUrl'],
    className: ['govuk-input', 'govuk-!-width-one-third']
  },
  'employer-telephone': {
    mixin: 'input-text',
    validate: ['notUrl', 'ukPhoneNumber'],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'employer-email': {
    mixin: 'input-text',
    validate: ['email']
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
    ].concat(countries.filter(country => !['Ireland', 'United Kingdom'].includes(country.value)))
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
  },
  'worker-been-in-uk-before-1988-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input']
  },
  'worker-been-in-uk-before-1988-dob': dateComponent('worker-been-in-uk-before-1988-dob', {
    mixin: 'input-date',
    validate: [
      'required', 'date',
      { type: 'before', arguments: ['1988-12-31'] },
      { type: 'after', arguments: ['100', 'years']}
    ]
  }),
  'worker-been-in-uk-before-1988-nationality': {
    mixin: 'select',
    className: ['typeahead'],
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.worker-been-in-uk-before-1988-nationality.options.null'
    }].concat(countries)
  },
  'worker-reference-number': {
    mixin: 'input-text',
    labelClassName: 'govuk-label--s',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'privacy-check': {
    mixin: 'checkbox',
    validate: ['required']
  }
};
