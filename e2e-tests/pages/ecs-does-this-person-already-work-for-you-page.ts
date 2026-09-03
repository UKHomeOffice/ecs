import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsDoesThisPersonAlreadyWorkForYouPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Does this person already work for you? – Employer checking service – GOV.UK'
      : 'Does this person already work for you? – Employer checking service – GOV.UK';
  }

  async completeDoesThisPersonAlreadyWorkForYouPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}