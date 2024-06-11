
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
  }
}