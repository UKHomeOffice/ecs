import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsYouMustHaveSeenTheOriginalDocumentPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: You must have seen the original document? – Employer checking service – GOV.UK'
      : 'You must have seen the original document? – Employer checking service – GOV.UK';
  }
}