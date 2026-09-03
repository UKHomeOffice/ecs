import { Page, Locator } from '@playwright/test';
import { basePage } from './base-page';

export class ecsWorkerDetails1998Page extends basePage {
    readonly fullNameTextField: Locator;
    readonly countryOfNationalityTextField: Locator;
    readonly placeOfBirthTextField: Locator;
    readonly yearOfEntryToTheUkTextField: Locator;
    readonly nationalInsuranceNoTextField: Locator;
    readonly employerTelephoneNoTextField: Locator;
    readonly employerEmailAddressTextField: Locator;

    constructor(page: Page) {
        super(page);
        this.fullNameTextField = page.locator('#before-1988-worker-full-name');
        this.countryOfNationalityTextField = page.locator('#before-1988-worker-nationality');
        this.placeOfBirthTextField = page.locator('#before-1988-worker-place-of-birth');
        this.yearOfEntryToTheUkTextField = page.locator('#before-1988-worker-year-of-entry-to-uk');
        this.nationalInsuranceNoTextField = page.locator('#before-1988-worker-national-insurance-number');
        this.employerTelephoneNoTextField = page.locator('#before-1988-employer-telephone');
        this.employerEmailAddressTextField = page.locator('#before-1988-employer-email');
    }

    async expectedPageTitle(): Promise<string> {
        const title = await this.page.title();

        return title.startsWith('Error')
            ? 'Error: Worker Details – Employer checking service – GOV.UK'
            : 'Worker Details – Employer checking service – GOV.UK';
    }

    async completeWorkerDetails1988Page(fullName: string, date: string, country: string, placeOfBirth: string, yearInUk: string, ni: string, employerPhoneNo: string, employerEmail: string) {
        await this.assertPageTitle(await this.expectedPageTitle());
        await this.fillInWorkDetails1998Form(fullName, date, country, placeOfBirth, yearInUk, ni, employerPhoneNo, employerEmail);
        await this.clickContinueButton();
    }

    async fillInWorkDetails1998Form(fullName: string, date: string, country: string, placeOfBirth: string, yearInUk: string, ni: string, employerPhoneNo: string, employerEmail: string) {
        await this.type(this.fullNameTextField, fullName);
        await this.enterDateOrDob(date, 'before-1988-worker-dob');
        await this.typeSelectLike(this.countryOfNationalityTextField, country);
        await this.type(this.placeOfBirthTextField, placeOfBirth);
        await this.type(this.yearOfEntryToTheUkTextField, this.extractYearFromTextDate(yearInUk));
        await this.type(this.nationalInsuranceNoTextField, ni);
        await this.type(this.employerTelephoneNoTextField, employerPhoneNo);
        await this.type(this.employerEmailAddressTextField, employerEmail);
    }

    extractYearFromTextDate(value: string) {
        const convertedValue = this.convertTextToDate(value) ?? value;
        const dateParts = convertedValue.split('/');

        if (value.toLowerCase() === 'more than 120 years ago') {
            const year = new Date().getFullYear() - 121;
            return String(year);
        } else {
            return dateParts.length === 3 ? dateParts[2] : convertedValue;
        }
    }
}