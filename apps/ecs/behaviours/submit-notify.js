const SendEmailConfirmation = require('./send-email-notification');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    const notifyEmail = new SendEmailConfirmation();

    try {
      await notifyEmail.send(req, res, super.locals(req, res));
    } catch (error) {
      req.log('error', 'Failed to send notification emails:', error);
      return next(Error(`Failed to send notification emails: ${error}`));
    }

    return super.successHandler(req, res, next);
  }
};
