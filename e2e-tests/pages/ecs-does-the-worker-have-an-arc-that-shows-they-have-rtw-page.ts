import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Does the worker have an application registration card (ARC) that shows they have the right to work? – Employer checking service – GOV.UK'
      : 'Does the worker have an application registration card (ARC) that shows they have the right to work? – Employer checking service – GOV.UK';
  }

  async completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}