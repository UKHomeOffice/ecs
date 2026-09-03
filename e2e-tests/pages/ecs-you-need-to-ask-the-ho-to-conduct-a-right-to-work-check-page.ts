import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsYouNeedToAskTheHOToConductARightToWorkCheckPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: You need to ask the Home Office to conduct a right to work check – Employer checking service – GOV.UK'
      : 'You need to ask the Home Office to conduct a right to work check – Employer checking service – GOV.UK';
  }

  async completeYouNeedToAskTheHOToConductARightToWorkCheckPage() {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.clickContinueButton();
  }
}