import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWhenDidTheyStartWorkingForYouPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: When did they start working for you? – Employer checking service – GOV.UK'
      : 'When did they start working for you? – Employer checking service – GOV.UK';
  }

  async completeWhenDidTheyStartWorkingForYouPage(date: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.enterDateOrDob(date, 'start-work-date');
    await this.clickContinueButton();
  }
}