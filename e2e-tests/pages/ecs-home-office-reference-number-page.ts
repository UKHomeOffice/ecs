import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHomeOfficeReferenceNumberPage extends basePage {
  readonly referenceNoTextField: Locator;

  constructor(page: Page) {
    super(page);
    this.referenceNoTextField = page.locator('#worker-reference-number');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Home Office reference numbers – Employer checking service – GOV.UK'
      : 'Home Office reference numbers – Employer checking service – GOV.UK';
  }

  async completeHomeOfficeReferenceNumberPage(value: string) {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.enterReferenceNoTextField(value);
    await this.clickContinueButton();
  }

  async enterReferenceNoTextField(text: string) {
    await this.type(this.referenceNoTextField, text);
  }
}