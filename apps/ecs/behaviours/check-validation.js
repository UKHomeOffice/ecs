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

    if(key === 'before-1988-worker-nationality' || key === 'worker-country') {
      if(req.form.values[key] === 'United Kingdom' || req.form.values[key] === 'Ireland') {
        return validationErrorFunc('excludeUkIr');
      }
    }

    if(key === 'before-1988-worker-year-of-entry-to-uk') {
      const yearOfEntry = req.form.values[key];
      const workerDob = req.form.values['before-1988-worker-dob'];
      if(yearOfEntry.length > 1 && !validators.url(yearOfEntry) && yearOfEntry < moment(workerDob).format('YYYY')) {
        return validationErrorFunc('afterDobYear', [moment(workerDob).format('YYYY')]);
      }
    }

    if(key === 'before-1988-worker-national-insurance-number') {
      const niNumber = req.form.values[key];
      if(niNumber) {
        if(validators.url(niNumber)) {
          return validationErrorFunc('notUrl');
        }
        // eslint-disable-next-line max-len
        const NINOregex = '^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\\s*\\d\\s*){6}([A-D]|\\s)$';
        if(!validators.regex(niNumber.toUpperCase(), NINOregex)) {
          return validationErrorFunc('niNumber');
        }
      }
    }

    if(key === 'worker-zipcode') {
      const zipCode = req.form.values[key];
      if(zipCode) {
        if(zipCode.length > 10) {
          return validationErrorFunc('maxlength');
        }
        if(validators.url(zipCode)) {
          return validationErrorFunc('notUrl');
        }
        const zipCodeRegex = '^[a-z0-9][a-z0-9\\- ]{0,10}[a-z0-9]$';
        if(!validators.regex(zipCode, zipCodeRegex)) {
          return validationErrorFunc('zipCode');
        }
      }
    }

    if(key === 'contact-telephone') {
      const phoneNumber = req.form.values[key];
      if(phoneNumber) {
        if(validators.url(phoneNumber)) {
          return validationErrorFunc('notUrl');
        }
        const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
        const isValidphoneNumber = validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
        if(!isValidphoneNumber  || !validators.internationalPhoneNumber(phoneNumber)) {
          return validationErrorFunc('internationalPhoneNumber');
        }
      }
    }


    if(key === 'before-1988-employer-telephone') {
      const phoneNumber = req.form.values[key];
      if(phoneNumber) {
        if(validators.url(phoneNumber)) {
          return validationErrorFunc('notUrl');
        }
        const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
        const isValidphoneNumber = validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
        if(!isValidphoneNumber  || !validators.ukPhoneNumber(phoneNumber)) {
          return validationErrorFunc('ukPhoneNumber');
        }
      }
    }

    return super.validateField(key, req);
  }
};
