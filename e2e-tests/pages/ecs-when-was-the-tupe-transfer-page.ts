import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWhenWasTheTupeTransferPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: When was the TUPE transfer? – Employer checking service – GOV.UK'
      : 'When was the TUPE transfer? – Employer checking service – GOV.UK';
  }

  async completeWhenWasTheTupeTransferPage(date: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.enterDateOrDob(date, 'tupe-date');
    await this.clickContinueButton();
  }
}