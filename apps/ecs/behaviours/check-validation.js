const validators = require('hof/controller/validation/validators');
const moment = require('moment');
const config = require('../../../config');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, {type: type, arguments: [args]});

    if(key === 'tupe-date') {
      const DateToBeValidated = req.form.values[key];
      const startDateOfWork = req.sessionModel.get('start-work-date');
      if(!validators.after(DateToBeValidated, startDateOfWork)) {
        return validationErrorFunc('after', [moment(startDateOfWork).format(config.PRETTY_DATE_FORMAT)]);
      }
    }

    if(key === 'before-1988-worker-nationality' || key === 'worker-country' ||
     key === 'worker-nationality') {
      if(req.form.values[key] === 'United Kingdom' || req.form.values[key] === 'Ireland') {
        return validationErrorFunc('excludeUkIr');
      }
    }

    if(key === 'before-1988-worker-dob') {
      const workerDob = req.form.values[key];
      if (moment(workerDob).isSameOrAfter('1988-01-01')) {
        return validationErrorFunc('afterDobYear');
      }
    }

    if(key === 'before-1988-worker-year-of-entry-to-uk') {
      const yearOfEntry = req.form.values[key];
      const oneHundredTwentyYearsAgo = moment().subtract(120, 'years').format('YYYY');
      if (yearOfEntry && yearOfEntry <= oneHundredTwentyYearsAgo) {
        return validationErrorFunc('after120Years');
      }
      if (yearOfEntry && yearOfEntry >= '1988') {
        return validationErrorFunc('after1988Years');
      }
      const workerDob = req.form.values['before-1988-worker-dob'];
      if(yearOfEntry.length > 1 && !validators.url(yearOfEntry)
         && yearOfEntry < moment(workerDob).format('YYYY') && workerDob) {
        return validationErrorFunc('beforeDateOfBirth', [moment(workerDob).format('DD MMMM YYYY')]);
      }
    }

    if(key === 'before-1988-worker-national-insurance-number')  {
      const niNumber = req.form.values[key];
      // eslint-disable-next-line max-len
      const NINOregex = '^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\\s*\\d\\s*){6}([A-D]|\\s)$';
      if(!validators.url(niNumber) && !validators.regex(niNumber.toUpperCase(), NINOregex)) {
        return validationErrorFunc('niNumber');
      }
    }

    return super.validateField(key, req);
  }
};
