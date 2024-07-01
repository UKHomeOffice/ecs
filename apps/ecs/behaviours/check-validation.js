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

    return super.validateField(key, req);
  }
};
