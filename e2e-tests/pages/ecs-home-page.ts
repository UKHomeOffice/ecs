import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class ecsHomePage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Right to work check eligibility – Employer checking service – GOV.UK'
      : 'Right to work check eligibility – Employer checking service – GOV.UK';
  }

  async navigateToUrl() {
    await this.page.goto('/');
    await this.assertPageTitle(await this.expectedPageTitle());
  }

  async acceptCookies() {
    const acceptButton = this.page.getByRole('button', { name: /accept/i });
    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click();
    }
  }
}