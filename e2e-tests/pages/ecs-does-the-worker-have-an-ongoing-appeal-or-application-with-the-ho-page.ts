import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Does the worker have an ongoing appeal or application with the Home Office? – Employer checking service – GOV.UK'
      : 'Does the worker have an ongoing appeal or application with the Home Office? – Employer checking service – GOV.UK';
  }

  async completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}