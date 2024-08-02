const config = require('../../../config');

const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyKey = config.govukNotify.notifyApiKey;
const notifyClient = new NotifyClient(notifyKey);
const moment = require('moment');
const PRETTY_DATE_FORMAT = 'DD MMMM YYYY';


const getPersonalisation = (recipientType, req) => {
  const basePersonalisation = {
    business_contact_name: req.sessionModel.get('employers-contact-name'),
    business_contact_job_title: req.sessionModel.get('contact-job-title'),
    business_name: req.sessionModel.get('business-name'),
    business_address: req.sessionModel.get('businessAddress'),
    business_contact_telephone: req.sessionModel.get('contact-telephone'),
    business_contact_email: req.sessionModel.get('contact-email-address'),
    business_type: req.sessionModel.get('type-of-business'),
    worker_full_name: req.sessionModel.get('worker-full-name') ??
      req.sessionModel.get('worker-been-in-uk-before-1988-full-name'),
    worker_date_birth: moment(req.sessionModel.get('worker-dob')).format(PRETTY_DATE_FORMAT) ??
      moment(req.sessionModel.get('worker-been-in-uk-before-1988-dob')).format(PRETTY_DATE_FORMAT),
    worker_nationality: req.sessionModel.get('worker-nationality') ??
      req.sessionModel.get('worker-been-in-uk-before-1988-nationality'),
    worker_address: req.sessionModel.get('workerAddress') ?? req.sessionModel.get('workerUkAddress'),
    has_worker_country: req.sessionModel.get('steps').includes('/worker-address') ? 'yes' : 'no',
    worker_country: req.sessionModel.get('worker-country') ?? '',
    job_title: req.sessionModel.get('job-title'),
    hours_of_work_per_week: req.sessionModel.get('hours-of-work-per-week'),
    person_work_for_you: req.sessionModel.get('person-work-for-you'),
    person_worked_for_you: req.sessionModel.get('person-work-for-you') === 'yes' ? 'yes' : 'no',
    worker_start_date: req.sessionModel.get('start-work-date') ?? '',
    work_as_result_of_tupe_transfer: req.sessionModel.get('work-for-you-result-of-tupe-transfer') ?? '',
    result_of_tupe_transfer: req.sessionModel.get('work-for-you-result-of-tupe-transfer') === 'yes' ? 'yes' : 'no',
    tupe_transfer_date: req.sessionModel.get('tupe-date') ?? '',
    use_digital_right_to_work: req.sessionModel.get('use-digital-right-to-work'),
    digital_right_to_work: req.sessionModel.get('use-digital-right-to-work') === 'no' ? 'yes' : 'no',
    applied_for_eu_settlement: req.sessionModel.get('worker-applied-eu-settlement-scheme') ?? '',
    has_eu_settlement: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
      req.sessionModel.get('worker-applied-eu-settlement-scheme') === 'none-of-above' ? 'yes' : 'no',
    worker_has_arc_card: req.sessionModel.get('worker-has-arc-card') ?? '',
    has_arc_card: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
      req.sessionModel.get('worker-has-arc-card') === 'yes' ? 'yes' : 'no',
    seen_original_document: req.sessionModel.get('seen-original-document') ?? '',
    arc_number: req.sessionModel.get('arc-number') ?? '',
    not_have_arc_card: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
      req.sessionModel.get('worker-has-arc-card') === 'no' ? 'yes' : 'no',
    worker_have_ongoing_appeal: req.sessionModel.get('worker-have-ongoing-appeal') ?? '',
    not_have_ongoing_appeal: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
      req.sessionModel.get('worker-have-ongoing-appeal') === 'no' ? 'yes' : 'no',
    worker_been_in_UK_before_1988: req.sessionModel.get('worker-been-in-UK-before-1988') ?? '',
    has_worker_details_1988: req.sessionModel.get('steps').includes('/worker-details-1988') ? 'yes' : 'no',
    place_of_birth: req.sessionModel.get('worker-place-of-birth') ?? '',
    Year_of_entry_to_uk: req.sessionModel.get('worker-year-of-entry-to-uk') ?? '',
    has_worker_ni_number: req.sessionModel.get('worker-national-insurance-number')?.length > 0 ? 'yes' : 'no',
    worker_ni_number: req.sessionModel.get('worker-national-insurance-number')?.toUpperCase() ?? '',
    has_worker_telephone: req.sessionModel.get('employer-telephone')?.length > 0 ? 'yes' : 'no',
    worker_telephone: req.sessionModel.get('employer-telephone') ?? '',
    has_worker_email: req.sessionModel.get('employer-email')?.length > 0 ? 'yes' : 'no',
    worker_email: req.sessionModel.get('employer-email') ?? '',
    has_ho_ref_number: req.sessionModel.get('steps').includes('/reference-number') ? 'yes' : 'no',
    ho_reference_number: req.sessionModel.get('worker-reference-number') ?? ''
  };
  return {
    ...basePersonalisation
  };
};

module.exports = class SendEmailConfirmation {
  async sendUserEmailNotification(req) {
    const personalisations = getPersonalisation('user', req);

    try {
      await notifyClient.sendEmail(
        config.govukNotify.userConfirmationTemplateId,
        req.sessionModel.get('contact-email-address'),
        {
          personalisation: Object.assign({}, personalisations)
        }
      );

      req.log(
        'info',
        'User Confirmation Email sent successfully'
      );
    } catch (err) {
      const errorDetails = err.response?.data ? `Cause: ${JSON.stringify(err.response.data)}` : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      req.log(
        'error',
        'Failed to send User Confirmation Email',
        errorMessage
      );
      throw  Error(errorMessage);
    }
  }

  async sendCaseworkerEmailNotification(req) {
    const personalisations = getPersonalisation('business', req);

    try {
      await notifyClient.sendEmail(
        config.govukNotify.businessConfirmationTemplateId,
        config.govukNotify.caseworkerEmail,
        {
          personalisation: Object.assign({}, personalisations)
        }
      );

      req.log(
        'info',
        'Business Confirmation Email sent successfully'
      );
    } catch (err) {
      const errorDetails = err.response?.data ? `Cause: ${JSON.stringify(err.response.data)}` : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      req.log(
        'error',
        'Failed to send Business Confirmation Email',
        errorMessage
      );
      throw Error(errorMessage);
    }
  }

  async send(req) {
    try {
      await this.sendUserEmailNotification(req);
      await this.sendCaseworkerEmailNotification(req);

      req.log('info', 'Request to send notification emails completed successfully.');
    } catch(err) {
      req.log('error', `Failed to send all notifications emails. ${err}`);
      throw err;
    }
  }
};
