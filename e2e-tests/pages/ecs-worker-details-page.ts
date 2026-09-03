import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWorkerDetailsPage extends basePage {
  readonly fullNameTextField: Locator;
  readonly nationalityTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameTextField = page.locator('#worker-full-name');
    this.nationalityTextField = page.locator('#worker-nationality');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Worker Details – Employer checking service – GOV.UK'
      : 'Worker Details – Employer checking service – GOV.UK';
  }

  async completeWorkerDetailsPage(fullName: string, date: string, nationality: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.fillInWorkDetailsForm(fullName, date, nationality);
    await this.clickContinueButton();
  }

  async fillInWorkDetailsForm(fullName: string, date: string, nationality: string) {
    await this.type(this.fullNameTextField, fullName);
    await this.enterDateOrDob(date, 'worker-dob');
    await this.typeSelectLike(this.nationalityTextField, nationality);
  }
}