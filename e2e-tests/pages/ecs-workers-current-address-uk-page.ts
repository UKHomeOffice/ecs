import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWorkersCurrentAddressUkPage extends basePage {
  readonly addressLine1TextField: Locator;
  readonly addressLine2TextField: Locator;
  readonly townOrCityTextField: Locator;
  readonly postCodeTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.addressLine1TextField = page.locator('#worker-uk-address-line-1');
    this.addressLine2TextField = page.locator('#worker-uk-address-line-2');
    this.townOrCityTextField = page.locator('#worker-uk-town-or-city');
    this.postCodeTextField = page.locator('#worker-uk-postcode');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? "Error: Worker's current address – Employer checking service – GOV.UK"
      : "Worker's current address – Employer checking service – GOV.UK";
  }

  async completeWorkersCurrentAddressUkPage(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.fillInWorkerCurrentAddressUkForm(addressLine1, addressLine2, townOrCity, postCode);
    await this.clickContinueButton();
  }

  async fillInWorkerCurrentAddressUkForm(addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await this.type(this.addressLine1TextField, addressLine1);
    await this.type(this.addressLine2TextField, addressLine2);
    await this.type(this.townOrCityTextField, townOrCity);
    await this.type(this.postCodeTextField, postCode);
  }
}