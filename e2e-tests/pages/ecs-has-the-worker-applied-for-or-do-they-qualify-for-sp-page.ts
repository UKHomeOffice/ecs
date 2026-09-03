import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Has the worker applied for, or do they qualify for, settlement protection? – Employer checking service – GOV.UK'
      : 'Has the worker applied for, or do they qualify for, settlement protection? – Employer checking service – GOV.UK';
  }

  async completeHasTheWorkerAppliedForOrDoTheyQualifyForSettlementProtectionPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}