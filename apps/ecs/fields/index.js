
const dateComponent = require('hof').components.date;

module.exports = {
  'worker-has-eligible-docs': {
    className: 'govuk-radios govuk-radios--inline',
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
    className: 'govuk-radios govuk-radios--inline',
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
    className: 'govuk-radios govuk-radios--inline',
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
    className: 'govuk-radios govuk-radios--inline',
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
  })
};
