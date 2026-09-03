import { Page, Locator, expect } from '@playwright/test';

export class basePage {
  readonly page: Page;
  readonly headerText: Locator;
  readonly continueButton: Locator;
  readonly thereIsAProblemText: Locator;
  readonly errorSummaryList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerText = page.locator('h1');
    this.continueButton = page.locator("input[value='Continue'], button:has-text('Continue')");
    this.thereIsAProblemText = page.locator('#error-summary-title');
    this.errorSummaryList = page.locator('.govuk-error-summary__list');
  }

  async assertPageTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async type(locator: Locator, text: string) {
    await locator.fill(text);
    await this.page.keyboard.press('Tab');
  }

  async typeSelectLike(locator: Locator, text: string) {
    if (!text?.trim()) return;

    try {
      await locator.selectOption({ label: text });
    } catch {
      await this.type(locator, text);
    }
  }

  async clickContinueButton() {
    await this.click(this.continueButton);
  }

  async selectRadioOptionWithText(optionText: string) {
    if (!optionText || optionText.trim() === '') {
      throw new Error('Radio option text value cannot be null or blank.');
    }
    await this.page.getByRole('radio', { name: optionText }).check();
  }

  async completeRadioPage(pageTitle: string, optionText: string) {
    await this.assertCurrentTitle(pageTitle);
    await this.selectRadioOptionWithText(optionText);
    await this.clickContinueButton();
  }

  async selectCheckboxOptionWithText(optionText: string) {
    if (!optionText || optionText.trim() === '') {
      throw new Error('Checkbox option text value cannot be null or blank.');
    }
    await this.page.getByRole('checkbox', { name: optionText }).check();
  }

  convertTextToDate(dateValue: string | null): string | null {
    if (dateValue == null) return null;

    const date = dateValue.trim().toLowerCase();
    if (!date) return dateValue;

    const now = new Date();
    const formatDate = (value: Date): string => {
      const day = String(value.getDate()).padStart(2, '0');
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const year = value.getFullYear();
      return `${day}/${month}/${year}`;
    };
    
    const addDays = (value: Date, days: number) => {
      const nextDate = new Date(value);
      nextDate.setDate(nextDate.getDate() + days);
      return nextDate;
    };

    const addYears = (value: Date, years: number) => {
      const nextDate = new Date(value);
      nextDate.setFullYear(nextDate.getFullYear() + years);
      return nextDate;
    };

    const dateMappings: Record<string, () => Date> = {
      "yesterday's date": () => addDays(now, -1),
      "today's date": () => now,
      "tomorrow's date": () => addDays(now, 1),
      'more than 100 years ago': () => addDays(addYears(now, -100), -1),
      'more than 120 years ago': () => addDays(addYears(now, -120), -1),
      'less than 16 years ago': () => addDays(addYears(now, -16), 1),
    };

    const dateFn = dateMappings[date];
    return dateFn ? formatDate(dateFn()) : dateValue;
  }

  async enterDateOrDob(inputDate: string | null, prefix?: string) {
    if (!inputDate?.trim()) return;

    const formattedDate = this.convertTextToDate(inputDate);
    if (!formattedDate) return;

    const dateParts = formattedDate.split('/');
    if (dateParts.length !== 3) {
      throw new Error('Invalid date format. Expected format: dd/MM/yyyy');
    }

    const [dayVal, monthVal, yearVal] = dateParts;
    const dayLocator = prefix ? this.page.locator(`#${prefix}-day`) : this.page.getByLabel('Day');
    const monthLocator = prefix ? this.page.locator(`#${prefix}-month`) : this.page.getByLabel('Month');
    const yearLocator = prefix ? this.page.locator(`#${prefix}-year`) : this.page.getByLabel('Year');

    await this.type(dayLocator, dayVal);
    await this.type(monthLocator, monthVal);
    await this.type(yearLocator, yearVal);
  }

  async assertCurrentTitle(pageTitle: string) {
    const expectedTitle = (await this.page.title()).startsWith('Error') ? `Error: ${pageTitle}` : pageTitle;
    await this.assertPageTitle(expectedTitle);
  }

  async linkTextIsDisplayed(linkText: string): Promise<boolean> {
    return await this.page.getByRole('link', { name: linkText }).isVisible();
  }

  async getThereIsAProblemTextErrorText(): Promise<string | null> {
    return await this.thereIsAProblemText.textContent();
  }

  async getErrorSummaryListText(): Promise<string | null> {
    return await this.errorSummaryList.textContent();
  }
}