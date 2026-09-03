import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Are you unable to use a digital Right to Work service due to a technical error? – Employer checking service – GOV.UK'
      : 'Are you unable to use a digital Right to Work service due to a technical error? – Employer checking service – GOV.UK';
  }

  async completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.selectRadioOptionWithText(value);
    await this.clickContinueButton();
  }
}