import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsDoTheyWorkForYouAsAResultOfATupeTransferPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Do they work for you as a result of a TUPE transfer? – Employer checking service – GOV.UK'
      : 'Do they work for you as a result of a TUPE transfer? – Employer checking service – GOV.UK';
  }

  async completeDoTheyWorkForYouAsAResultOfATupeTransferPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}