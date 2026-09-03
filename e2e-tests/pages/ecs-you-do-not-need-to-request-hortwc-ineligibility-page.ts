import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsYouDoNotNeedToRequestHORTWCIneligibilityPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: You do not need to request a home office right to work check – Employer checking service – GOV.UK'
      : 'You do not need to request a home office right to work check – Employer checking service – GOV.UK';
  }
}