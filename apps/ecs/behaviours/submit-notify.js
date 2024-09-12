const SendEmailConfirmation = require('./send-email-notification');

module.exports = superclass => class extends superclass {
  async successHandler(req, res, next) {
    const notifyEmail = new SendEmailConfirmation(req);

    try {
      await notifyEmail.send('business');
      await notifyEmail.send('user');
      req.log('info', 'All notification emails sent successfully');
    } catch (error) {
      req.log('error', 'Failed to send notification emails:', error);
      return next(Error(`Failed to send notification emails: ${error}`));
    }

    return super.successHandler(req, res, next);
  }
};
