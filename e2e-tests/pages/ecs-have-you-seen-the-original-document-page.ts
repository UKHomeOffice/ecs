import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHaveYouSeenTheOriginalDocumentPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Have you seen the original document? – Employer checking service – GOV.UK'
      : 'Have you seen the original document? – Employer checking service – GOV.UK';
  }

  async completesHaveYouSeenTheOriginalDocumentPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}