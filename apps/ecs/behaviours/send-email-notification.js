const config = require('../../../config');
const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyKey = config.govukNotify.notifyApiKey;
const notifyClient = new NotifyClient(notifyKey);
const moment = require('moment');
const translation = require('../translations/src/en/fields.json');

module.exports = class SendEmailConfirmation {
  constructor(req) {
    this.req = req;
    this.businessEmailPersonalisation = this.getPersonalisation('business', req);
    this.userEmailPersonalisation = this.getPersonalisation('user', req);
  }

  getLabel = (fieldKey, fieldValue) => {
    if (fieldValue) {
      return translation[fieldKey].options[fieldValue].label;
    }
    return '';
  };

  /* eslint-disable max-len */
  documentTypeMap = req => {
    if (req.sessionModel.get('use-digital-right-to-work') === 'yes') {
      return 'or unable to use Digital Right to Work service due to technical error';
    }

    if (req.sessionModel.get('worker-applied-eu-settlement-scheme') === 'yes-certificate-of-application') {
      return 'a Certificate of Application (COA) issued following submission of an application under the EU Settlement Scheme (EUSS)';
    }

    if (req.sessionModel.get('worker-applied-eu-settlement-scheme') === 'yes-evidence-of-settled-status') {
      return 'evidence to demonstrate the individual has settled or pre-settled status under the EU Settlement Scheme (EUSS) issued in a Crown Dependency';
    }

    if (req.sessionModel.get('worker-applied-eu-settlement-scheme') === 'no-frontier-worker') {
      return 'or is a Frontier Worker in the UK';
    }

    if (req.sessionModel.get('worker-has-arc-card') === 'yes') {
      return 'an Application Registration Card (ARC) for an asylum seeker stating that the holder is allowed to work';
    }

    if (req.sessionModel.get('worker-have-ongoing-appeal') === 'yes') {
      return 'an ongoing application or appeal for leave to remain in the UK';
    }

    if (req.sessionModel.get('worker-applied-for-settlement-protection') === 'yes') {
      return 'Settlement Protection';
    }

    return 'none of the above';
  };
  /* eslint-enable max-len */

  getPersonalisation = (recipientType, req) => {
    const isTupeTransferEligible = req.sessionModel.get('person-work-for-you') === 'yes' &&
      req.sessionModel.get('start-work-date') < config.legislativeEmploymentDate ? 'yes' : 'no';

    const basePersonalisation = {
      business_contact_name: req.sessionModel.get('employers-contact-name'),
      business_contact_job_title: req.sessionModel.get('contact-job-title'),
      business_name: req.sessionModel.get('business-name'),
      business_contact_telephone: req.sessionModel.get('contact-telephone'),
      business_contact_email: req.sessionModel.get('contact-email-address'),
      business_type: req.sessionModel.get('type-of-business'),
      worker_full_name: req.sessionModel.get('worker-full-name') ??
        req.sessionModel.get('before-1988-worker-full-name'),
      worker_date_birth: moment(req.sessionModel.get('worker-dob')).format(config.PRETTY_DATE_FORMAT) ??
        moment(req.sessionModel.get('before-1988-worker-dob')).format(config.PRETTY_DATE_FORMAT),
      worker_nationality: req.sessionModel.get('worker-nationality') ??
        req.sessionModel.get('before-1988-worker-nationality'),
      has_worker_country: req.sessionModel.get('steps').includes('/worker-address') ? 'yes' : 'no',
      worker_country: req.sessionModel.get('worker-country') ?? '',
      job_title: req.sessionModel.get('job-title'),
      hours_of_work_per_week: req.sessionModel.get('hours-of-work-per-week'),
      person_work_for_you: this.getLabel('person-work-for-you', req.sessionModel.get('person-work-for-you')),
      person_worked_for_you: req.sessionModel.get('person-work-for-you') === 'yes' ? 'yes' : 'no',
      worker_start_date: req.sessionModel.get('start-work-date') ?
        moment(req.sessionModel.get('start-work-date')).format(config.PRETTY_DATE_FORMAT) : '',
      is_result_of_tupe_transfer_eligible: isTupeTransferEligible,
      work_as_result_of_tupe_transfer: isTupeTransferEligible === 'yes' ?
        this.getLabel('work-for-you-result-of-tupe-transfer',
          req.sessionModel.get('work-for-you-result-of-tupe-transfer')) : '',
      result_of_tupe_transfer: isTupeTransferEligible === 'yes' &&
        req.sessionModel.get('work-for-you-result-of-tupe-transfer') === 'yes' ? 'yes' : 'no',
      tupe_transfer_date: isTupeTransferEligible === 'yes' && req.sessionModel.get('tupe-date') ?
        moment(req.sessionModel.get('tupe-date'))?.format(config.PRETTY_DATE_FORMAT) : '',
      has_arc_card: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
        req.sessionModel.get('worker-has-arc-card') === 'yes' ? 'yes' : 'no',
      seen_original_document: this.getLabel('seen-original-document',
        req.sessionModel.get('seen-original-document')),
      arc_number: req.sessionModel.get('arc-number')?.toUpperCase() ?? '',
      not_have_ongoing_appeal: req.sessionModel.get('use-digital-right-to-work') === 'no' &&
        req.sessionModel.get('worker-have-ongoing-appeal') === 'no' ? 'yes' : 'no',
      worker_been_in_UK_before_1988: this.getLabel('worker-been-in-UK-before-1988',
        req.sessionModel.get('worker-been-in-UK-before-1988')),
      has_worker_details_1988: req.sessionModel.get('steps').includes('/worker-details-1988') ? 'yes' : 'no',
      place_of_birth: req.sessionModel.get('before-1988-worker-place-of-birth') ?? '',
      year_of_entry_to_uk: req.sessionModel.get('before-1988-worker-year-of-entry-to-uk') ?? '',
      has_worker_ni_number: req.sessionModel.get('before-1988-worker-national-insurance-number')?.length > 0 ?
        'yes' : 'no',
      worker_ni_number: req.sessionModel.get('before-1988-worker-national-insurance-number')?.toUpperCase() ?? '',
      has_worker_telephone: req.sessionModel.get('before-1988-employer-telephone')?.length > 0 ? 'yes' : 'no',
      worker_telephone: req.sessionModel.get('before-1988-employer-telephone') ?? '',
      has_worker_email: req.sessionModel.get('before-1988-employer-email')?.length > 0 ? 'yes' : 'no',
      worker_email: req.sessionModel.get('before-1988-employer-email') ?? '',
      has_ho_ref_number: req.sessionModel.get('steps').includes('/reference-number') ? 'yes' : 'no',
      ho_reference_number: req.sessionModel.get('worker-reference-number')?.toUpperCase() ?? ''
    };

    const dynamicProps = {};

    if (recipientType === 'user') {
      dynamicProps.business_address = req.sessionModel.get('businessAddress');
      dynamicProps.worker_address = req.sessionModel.get('workerAddress') ?? req.sessionModel.get('workerUkAddress');
      dynamicProps.use_digital_right_to_work = this.getLabel('use-digital-right-to-work',
        req.sessionModel.get('use-digital-right-to-work'));
      dynamicProps.digital_right_to_work = req.sessionModel.get('use-digital-right-to-work') === 'no' ? 'yes' : 'no';
      dynamicProps.applied_for_eu_settlement = this.getLabel('worker-applied-eu-settlement-scheme',
        req.sessionModel.get('worker-applied-eu-settlement-scheme'));
      dynamicProps.has_eu_settlement = req.sessionModel.get('use-digital-right-to-work') === 'no' &&
        req.sessionModel.get('worker-applied-eu-settlement-scheme') === 'none-of-above' ? 'yes' : 'no';
      dynamicProps.worker_has_arc_card = this.getLabel('worker-has-arc-card',
        req.sessionModel.get('worker-has-arc-card'));
      dynamicProps.not_have_arc_card = req.sessionModel.get('use-digital-right-to-work') === 'no' &&
        req.sessionModel.get('worker-has-arc-card') === 'no' ? 'yes' : 'no';
      dynamicProps.worker_have_ongoing_appeal = this.getLabel('worker-have-ongoing-appeal',
        req.sessionModel.get('worker-have-ongoing-appeal'));
      dynamicProps.has_settlement_protection_question = req.sessionModel.get('use-digital-right-to-work') === 'no' &&
        req.sessionModel.get('worker-been-in-UK-before-1988') === 'no' ? 'yes' : 'no';
      dynamicProps.worker_applied_for_settlement_protection = this.getLabel('worker-applied-for-settlement-protection',
        req.sessionModel.get('worker-applied-for-settlement-protection'));
    }

    if (recipientType === 'business') {
      dynamicProps.business_address_line_1 = req.sessionModel.get('business-address-line-1');
      dynamicProps.business_address_line_2 = req.sessionModel.get('business-address-line-2') ?? '';
      dynamicProps.business_address_town_city = req.sessionModel.get('business-town-city');
      dynamicProps.business_address_postcode = req.sessionModel.get('business-postcode');
      dynamicProps.document_application_type = this.documentTypeMap(req);

      if (req.sessionModel.get('workerAddress')) {
        dynamicProps.worker_address_line_1 = req.sessionModel.get('worker-address-line-1');
        dynamicProps.worker_address_line_2 = req.sessionModel.get('worker-address-line-2') ?? '';
        dynamicProps.worker_address_town_city = req.sessionModel.get('worker-town-or-city');
        dynamicProps.worker_address_postcode = req.sessionModel.get('worker-zipcode') ?? '';
      }

      if (req.sessionModel.get('workerUkAddress')) {
        dynamicProps.worker_address_line_1 = req.sessionModel.get('worker-uk-address-line-1');
        dynamicProps.worker_address_line_2 = req.sessionModel.get('worker-uk-address-line-2') ?? '';
        dynamicProps.worker_address_town_city = req.sessionModel.get('worker-uk-town-or-city');
        dynamicProps.worker_address_postcode = req.sessionModel.get('worker-uk-postcode');
      }
    }

    return Object.assign(basePersonalisation, dynamicProps);
  };

  async send(recipientType) {
    try {
      const targetTemplate = `${recipientType}ConfirmationTemplateId`;
      const targetEmailAddress = recipientType === 'user' ?
        this.req.sessionModel.get('contact-email-address') : config.govukNotify.caseworkerEmail;
      const emailReplyToId = config.govukNotify.replyToEmailID;
      await notifyClient.sendEmail(
        config.govukNotify[targetTemplate],
        targetEmailAddress,
        {
          personalisation: recipientType === 'user' ? this.userEmailPersonalisation : this.businessEmailPersonalisation,
          emailReplyToId: emailReplyToId
        }
      );

      this.req.log(
        'info',
        `${recipientType} confirmation email sent successfully`
      );
    } catch (err) {
      const errorDetails = err.response?.data ? `Cause: ${JSON.stringify(err.response.data)}` : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      this.req.log(
        'error',
        `Failed to send ${recipientType} confirmation email`,
        errorMessage
      );
      throw Error(errorMessage);
    }
  }
};
