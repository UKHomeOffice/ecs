import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHasTheWorkerAppliedToTheEUSSPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Has the worker applied to the EU Settlement Scheme (EUSS)? – Employer checking service – GOV.UK'
      : 'Has the worker applied to the EU Settlement Scheme (EUSS)? – Employer checking service – GOV.UK';
  }

  async completeHasTheWorkerAppliedToTheEUSSPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}