import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsDataProtectionStatementPage extends basePage {
  readonly submitRequestButton: Locator;

  constructor(page: Page) {
    super(page);
    this.submitRequestButton = page.locator('#report-submit .govuk-button');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Data protection statement – Employer checking service – GOV.UK'
      : 'Data protection statement – Employer checking service – GOV.UK';
  }

  async completeDataProtectionStatementPage() {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.confirmAndSubmitDataProtectionStatement();
  }

  async confirmAndSubmitDataProtectionStatement() {
    await this.selectCheckboxOptionWithText('I confirm that I have read, understood and complied with this data protection statement');
    await this.selectSubmitRequest();
  }

  async selectSubmitRequest() {
    await this.submitRequestButton.click();
  }
}