import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage extends basePage {
  readonly registrationCardNoTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.registrationCardNoTextField = page.locator('#arc-number');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: What is the worker’s application registration card number? – Employer checking service – GOV.UK'
      : 'What is the worker’s application registration card number? – Employer checking service – GOV.UK';
  }

  async completeWhatIsTheWorkersApplicationRegistrationCardNumberPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.enterRegistrationCardNo(value);
    await this.clickContinueButton();
  }

  async enterRegistrationCardNo(text: string) {
    await this.type(this.registrationCardNoTextField, text);
  }
}