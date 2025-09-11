module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    const fields = Object.keys(req.form.options.fields || {});
    const editing1988 = fields.some(f => f.startsWith('before-1988-'));

    if (editing1988) {
      req.sessionModel.unset([
        'worker-full-name',
        'worker-dob',
        'worker-nationality',
        'worker-address-line-1',
        'worker-address-line-2',
        'worker-town-or-city',
        'worker-zipcode',
        'worker-country',
        'worker-uk-address-line-1',
        'worker-uk-address-line-2',
        'worker-uk-town-or-city',
        'worker-uk-postcode',
        'worker-reference-number'
      ]);
    } else {
      req.sessionModel.unset([
        'before-1988-worker-full-name',
        'before-1988-worker-dob',
        'before-1988-worker-nationality',
        'before-1988-worker-place-of-birth',
        'before-1988-worker-year-of-entry-to-uk',
        'before-1988-worker-national-insurance-number',
        'before-1988-employer-telephone',
        'before-1988-employer-email'
      ]);
    }

    super.saveValues(req, res, next);
  }
};
