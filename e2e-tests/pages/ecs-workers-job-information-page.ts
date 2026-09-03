import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWorkersJobInformationPage extends basePage {
  readonly jobTitleTextField: Locator;
  readonly hoursTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.jobTitleTextField = page.locator('#job-title');
    this.hoursTextField = page.locator('#hours-of-work-per-week');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? "Error: Worker's job information – Employer checking service – GOV.UK"
      : "Worker's job information – Employer checking service – GOV.UK";
  }

  async completeWorkersJobInformationPage(jobTitle: string, hours: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.enterWorkersJobInformationForm(jobTitle, hours);
    await this.clickContinueButton();
  }

  async enterWorkersJobInformationForm(jobTitle: string, hours: string) {
    await this.type(this.jobTitleTextField, jobTitle);
    await this.type(this.hoursTextField, hours);
  }
}