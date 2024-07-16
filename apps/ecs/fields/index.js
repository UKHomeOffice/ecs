
const dateComponent = require('hof').components.date;

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
  'job-title': {
    validate: ['required', 'notUrl'],
  },
  'hours-of-work-per-week': {
    validate: ['required', { type: 'max', arguments: 99 }, { type: 'min', arguments: 1 }],
    attributes: [{ suffix: 'hours' }],
    className: 'govuk-input govuk-!-width-one-quarter',
  },
  'business-name': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
  },
  'type-of-business': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
  },
  'employers-contact-name': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
  },
  'contact-job-title': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 254 }],
  },
  'contact-telephone': {
    validate: ['notUrl', 'required'],
  },
  'contact-email-address': {
    validate: ['required', 'email'],
  }
};
