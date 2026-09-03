import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsRightToWorkCheckEligibilityPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Right to work check eligibility – Employer checking service – GOV.UK'
      : 'Right to work check eligibility – Employer checking service – GOV.UK';
  }

  async completeRightToWorkCheckEligibilityPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}