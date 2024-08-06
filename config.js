'use strict';
/* eslint no-process-env: 0 */

const env = process.env.NODE_ENV || 'production';

module.exports = {
  env: env,
  survey: {
    feedbackUrl: 'https://eforms.homeoffice.gov.uk/outreach/Feedback.ofml?FormName=ecs'
  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  },
  legislativeEmploymentDate: '2008-02-29',
  govukNotify: {
    notifyApiKey: process.env.NOTIFY_KEY,
    caseworkerEmail: process.env.CASEWORKER_EMAIL,
    userConfirmationTemplateId: process.env.USER_CONFIRMATION_TEMPLATE_ID,
    businessConfirmationTemplateId: process.env.BUSINESS_CONFIRMATION_TEMPLATE_ID
  },
  PRETTY_DATE_FORMAT: 'DD MMMM YYYY'
};
