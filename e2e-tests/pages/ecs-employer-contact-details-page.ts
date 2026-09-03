import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsEmployerContactDetailsPage extends basePage {
  readonly businessNameTextField: Locator;
  readonly typeOfBusinessTextField: Locator;
  readonly employersContactNameTextField: Locator;
  readonly contactJobTitleField: Locator;
  readonly contactTelephoneTextField: Locator;
  readonly contactEmailAddressTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.businessNameTextField = page.locator('#business-name');
    this.typeOfBusinessTextField = page.locator('#type-of-business');
    this.employersContactNameTextField = page.locator('#employers-contact-name');
    this.contactJobTitleField = page.locator('#contact-job-title');
    this.contactTelephoneTextField = page.locator('#contact-telephone');
    this.contactEmailAddressTextField = page.locator('#contact-email-address');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Employer contact details – Employer checking service – GOV.UK'
      : 'Employer contact details – Employer checking service – GOV.UK';
  }

  async completeEmployerContactDetailsPage(businessName: string, typeOfBusiness: string, employersContactName: string, contactJobTitle: string, contactTelephone: string, contactEmailAddress: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.fillInWorkerCurrentAddressForm(businessName, typeOfBusiness, employersContactName, contactJobTitle, contactTelephone, contactEmailAddress);
    await this.clickContinueButton();
  }

  async fillInWorkerCurrentAddressForm(businessName: string, typeOfBusiness: string, employersContactName: string, contactJobTitle: string, contactTelephone: string, contactEmailAddress: string) {
    await this.type(this.businessNameTextField, businessName);
    await this.type(this.typeOfBusinessTextField, typeOfBusiness);
    await this.type(this.employersContactNameTextField, employersContactName);
    await this.type(this.contactJobTitleField, contactJobTitle);
    await this.type(this.contactTelephoneTextField, contactTelephone);
    await this.type(this.contactEmailAddressTextField, contactEmailAddress);
  }
}