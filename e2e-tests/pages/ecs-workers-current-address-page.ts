import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWorkersCurrentAddressPage extends basePage {
  readonly addressLine1TextField: Locator;
  readonly addressLine2TextField: Locator;
  readonly townOrCityTextField: Locator;
  readonly zipCodeField: Locator;
  readonly countryTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.addressLine1TextField = page.locator('#worker-address-line-1');
    this.addressLine2TextField = page.locator('#worker-address-line-2');
    this.townOrCityTextField = page.locator('#worker-town-or-city');
    this.zipCodeField = page.locator('#worker-zipcode');
    this.countryTextField = page.locator('#worker-country');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? "Error: Worker's current address – Employer checking service – GOV.UK"
      : "Worker's current address – Employer checking service – GOV.UK";
  }

  async completeWorkersCurrentAddressPage(addressLine1: string, addressLine2: string, townOrCity: string, zipCode: string, country: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.fillInWorkerCurrentAddressForm(addressLine1, addressLine2, townOrCity, zipCode, country);
    await this.clickContinueButton();
  }

  async fillInWorkerCurrentAddressForm(addressLine1: string, addressLine2: string, townOrCity: string, zipCode: string, country: string) {
    await this.type(this.addressLine1TextField, addressLine1);
    await this.type(this.addressLine2TextField, addressLine2);
    await this.type(this.townOrCityTextField, townOrCity);
    await this.type(this.zipCodeField, zipCode);
    await this.typeSelectLike(this.countryTextField, country);
  }
}