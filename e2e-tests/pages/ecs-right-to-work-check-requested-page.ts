import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsRightToWorkCheckRequestedPage extends basePage {
  readonly requestAnotherCheckButton: Locator;

  constructor(page: Page) {
    super(page);
    this.requestAnotherCheckButton = page.locator('.request-another-check');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Right to work check requested – Employer checking service – GOV.UK'
      : 'Right to work check requested – Employer checking service – GOV.UK';
  }

  async isRequestAnotherCheckBtnDisplayed() {
    return await this.requestAnotherCheckButton.isVisible();
  }
}