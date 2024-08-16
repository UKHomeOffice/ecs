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
    validate: ['required', 'notUrl',  { type: 'maxlength', arguments: [250] }, { type: 'minlength', arguments: [2] }]
  },
  'hours-of-work-per-week': {
    validate: ['required', { type: 'max', arguments: 99 }, { type: 'min', arguments: 1 }],
    attributes: [{ suffix: 'hours' }],
    className: ['govuk-input--width-2', 'govuk-input']
  },
  'business-name': {
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 3 }, { type: 'maxlength', arguments: 256 }]
  },
  'type-of-business': {
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 3 }, { type: 'maxlength', arguments: 256 }]
  },
  'employers-contact-name': {
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 3 }, { type: 'maxlength', arguments: 256 }]
  },
  'contact-job-title': {
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 3 }, { type: 'maxlength', arguments: 256 }]
  },
  'contact-telephone': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'contact-email-address': {
    validate: ['required', { type: 'minlength', arguments: 6 }, { type: 'maxlength', arguments: 256 }, 'email' ]
  },
  'business-address-line-1': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-address-line-2': {
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-town-city': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'business-postcode': {
    validate: ['required', 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  'before-1988-worker-full-name': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input']
  },
  'before-1988-worker-dob': dateComponent('before-1988-worker-dob', {
    mixin: 'input-date',
    validate: [
      'required', 'date',
      { type: 'before', arguments: ['16', 'years']},
      { type: 'after', arguments: ['120', 'years']}
    ]
  }),
  'before-1988-worker-nationality': {
    mixin: 'select',
    className: ['typeahead'],
    validate: ['required'],
    options: [{
      value: '',
      label: 'fields.before-1988-worker-nationality.options.null'
    }].concat(countries.filter(country => !['Ireland', 'United Kingdom'].includes(country.value)))
  },
  'before-1988-worker-place-of-birth': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'before-1988-worker-year-of-entry-to-uk': {
    mixin: 'input-text',
    // validation is covered in check-validation behaviour
    validate: [],
    className: ['govuk-input', 'govuk-input--width-4']
  },
  'before-1988-worker-national-insurance-number': {
    mixin: 'input-text',
    validate: [], // validation is covered in check-validation behaviour
    className: ['govuk-input', 'govuk-!-width-one-third']
  },
  'before-1988-employer-telephone': {
    mixin: 'input-text',
    validate: [], // validation is covered in check-validation behaviour
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'before-1988-employer-email': {
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
  'worker-zipcode': {
    className: ['govuk-input', 'govuk-input--width-10'],
    validate: [{type: 'maxlength', arguments: [10]}]
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
      { type: 'after', arguments: ['120', 'years']}
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
  'worker-reference-number': {
    mixin: 'input-text',
    labelClassName: 'govuk-label--s',
    validate: ['required', 'notUrl', { type: 'minlength', arguments: 2 }, { type: 'maxlength', arguments: 250 }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'privacy-check': {
    mixin: 'checkbox',
    validate: ['required']
  }
};
