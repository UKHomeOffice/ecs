import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsBusinessAddressPage extends basePage {
  readonly addressLine1TextField: Locator;
  readonly addressLine2TextField: Locator;
  readonly townOrCityTextField: Locator;
  readonly postCodeTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.addressLine1TextField = page.locator('#business-address-line-1');
    this.addressLine2TextField = page.locator('#business-address-line-2');
    this.townOrCityTextField = page.locator('#business-town-city');
    this.postCodeTextField = page.locator('#business-postcode');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Business address – Employer checking service – GOV.UK'
      : 'Business address – Employer checking service – GOV.UK';
  }

  async completeBusinessAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.fillInBusinessAddressForm(addressLine1, addressLine2, townOrCity, postCode);
    await this.clickContinueButton();
  }

  async fillInBusinessAddressForm(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await this.type(this.addressLine1TextField, addressLine1);
    await this.type(this.addressLine2TextField, addressLine2);
    await this.type(this.townOrCityTextField, townOrCity);
    await this.type(this.postCodeTextField, postCode);
  }
}