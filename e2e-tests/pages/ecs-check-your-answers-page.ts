import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsCheckYourAnswersPage extends basePage {
  readonly eligibilityCriteriaSectionName: Locator;
  readonly workerDetailsSectionName: Locator;
  readonly workersAddressSectionName: Locator;
  readonly jobInformationSectionName: Locator;
  readonly employerContactDetailsSectionName: Locator;

  constructor(page: Page) {
    super(page);
    this.eligibilityCriteriaSectionName = page.locator('div:nth-of-type(1) > .section-header');
    this.workerDetailsSectionName = page.locator('div:nth-of-type(2) > .section-header');
    this.workersAddressSectionName = page.locator('div:nth-of-type(3) > .section-header');
    this.jobInformationSectionName = page.locator('div:nth-of-type(4) > .section-header');
    this.employerContactDetailsSectionName = page.locator('div:nth-of-type(5) > .section-header');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();

    return title.startsWith('Error')
      ? 'Error: Check your answers – Employer checking service – GOV.UK'
      : 'Check your answers – Employer checking service – GOV.UK';
  }

  async completeSummaryPage() {
    await this.assertPageTitle(await this.expectedPageTitle());
    await this.clickContinueButton();
  }

  async getEligibilityCriteriaSectionNameText(): Promise<string | null> {
    return await this.eligibilityCriteriaSectionName.textContent();
  }

  async getWorkerDetailsSectionNameText(): Promise<string | null> {
    return await this.workerDetailsSectionName.textContent();
  }

  async getWorkersAddressSectionNameText(): Promise<string | null> {
    return await this.workersAddressSectionName.textContent();
  }

  async getJobInformationSectionNameText(): Promise<string | null> {
    return await this.jobInformationSectionName.textContent();
  }

  async getEmployerContactDetailsSectionNameText(): Promise<string | null> {
    return await this.employerContactDetailsSectionName.textContent();
  }

  async getSectionNames(sectionName: string): Promise<string | null> {
    switch (sectionName.toLowerCase()) {
      case 'eligibility criteria':
        return await this.getEligibilityCriteriaSectionNameText();
      case 'worker details':
        return await this.getWorkerDetailsSectionNameText();
      case "worker's address":
        return await this.getWorkersAddressSectionNameText();
      case 'job information':
        return await this.getJobInformationSectionNameText();
      case 'employer contact details':
        return await this.getEmployerContactDetailsSectionNameText();
      default:
        throw new Error(`Wrong section name: ${sectionName}`);
    }
  }
}