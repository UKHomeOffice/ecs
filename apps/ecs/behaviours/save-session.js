module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    // Saving worker start date in sessionModel to use it while change the userflow from summary page
    if(req.form.values['start-work-date'] && req.form.options.route === '/when-started') {
      const workStartDate = req.form.values['start-work-date'];
      req.sessionModel.set('workStartDate', workStartDate);
    }

    if(req.form.options.route === '/already-employed' && req.params.action === 'edit' &&
      req.form.values['person-work-for-you'] === 'yes') {
      const currentSteps = req.sessionModel.get('steps');
      currentSteps.push('/when-started');
      req.sessionModel.set('steps', currentSteps);
      if(req.sessionModel.get('workStartDate')) {
        req.sessionModel.set('start-work-date', req.sessionModel.get('workStartDate'));
      }
    }
    return super.saveValues(req, res, next);
  }
};
