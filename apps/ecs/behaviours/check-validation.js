const validators = require('hof/controller/validation/validators');
const moment = require('moment');
const PRETTY_DATE_FORMAT = 'DD MMMM YYYY';

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, {type: type, arguments: [args]});

    if(key === 'tupe-date') {
      const DateToBeValidated = req.form.values[key];
      const startDateOfWork = req.sessionModel.get('start-work-date');
      if(!validators.after(DateToBeValidated, startDateOfWork)) {
        return validationErrorFunc('after', [moment(startDateOfWork).format(PRETTY_DATE_FORMAT)]);
      }
    }

    if(key === 'worker-nationality' || key === 'worker-country') {
      if(req.form.values[key] === 'United Kingdom' || req.form.values[key] === 'Ireland') {
        return validationErrorFunc('excludeUkIr');
      }
    }

    if(key === 'worker-year-of-entry-to-uk') {
      const yearOfEntry = req.form.values[key];
      const workerDob = req.form.values['worker-dob'];
      if(yearOfEntry.length > 1 && !validators.url(yearOfEntry) && yearOfEntry < moment(workerDob).format('YYYY')) {
        return validationErrorFunc('afterDobYear', [moment(workerDob).format('YYYY')]);
      }
    }

    if(key === 'worker-national-insurance-number')  {
      const niNumber = req.form.values[key];
      // eslint-disable-next-line max-len
      const NINOregex = '^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$';
      if(!validators.url(niNumber) && !validators.regex(niNumber.toUpperCase(), NINOregex)) {
        return validationErrorFunc('niNumber');
      }
    }

    return super.validateField(key, req);
  }
};
