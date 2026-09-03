import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHasTheWorkerBeenInTheUkSinceBefore1988Page extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Has the worker been in the UK since before 1988? – Employer checking service – GOV.UK'
      : 'Has the worker been in the UK since before 1988? – Employer checking service – GOV.UK';
  }

  async completeHasTheWorkerBeenInTheUkSinceBefore1988Page(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}