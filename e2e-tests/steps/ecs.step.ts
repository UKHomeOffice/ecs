import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { DataTable } from '@cucumber/cucumber';
import { test } from '../fixture/fixtures';
import type { Pages } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

export const { Given, When, Then } = createBdd(test);

function getSasHofEmail(): string {
    const sasHofEmail = process.env.SAS_HOF_EMAIL;

    if (!sasHofEmail) {
        throw new Error("SAS_HOF_EMAIL is not configured");
    }
    return sasHofEmail;
}

async function completeRightToWorkCheckEligibilityPage(pages: Pages, value: string) {
    await pages.ecsRightToWorkCheckEligibilityPage.completeRightToWorkCheckEligibilityPage(value);
}

async function completeDoesThisPersonAlreadyWorkForYouPage(pages: Pages, value: string) {
    await pages.ecsDoesThisPersonAlreadyWorkForYouPage.completeDoesThisPersonAlreadyWorkForYouPage(value);
}

async function completeWhenDidTheyStartWorkingForYouPage(pages: Pages, date: string) {
    await pages.ecsWhenDidTheyStartWorkingForYouPage.completeWhenDidTheyStartWorkingForYouPage(date);
}

async function completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages: Pages, value: string) {
    await pages.ecsDoTheyWorkForYouAsAResultOfATupeTransferPage.completeDoTheyWorkForYouAsAResultOfATupeTransferPage(value);
}

async function completeWhenWasTheTupeTransferPage(pages: Pages, date: string) {
    await pages.ecsWhenWasTheTupeTransferPage.completeWhenWasTheTupeTransferPage(date);
}

async function completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages: Pages, value: string) {
    await pages.ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage.completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(value);
}

async function completeHasTheWorkerAppliedToTheEUSSPage(pages: Pages, value: string) {
    await pages.ecsHasTheWorkerAppliedToTheEUSSPage.completeHasTheWorkerAppliedToTheEUSSPage(value);
}

async function completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages: Pages, value: string) {
    await pages.ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage.completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(value);
}

async function completesHaveYouSeenTheOriginalDocumentPage(pages: Pages, value: string) {
    await pages.ecsHaveYouSeenTheOriginalDocumentPage.completesHaveYouSeenTheOriginalDocumentPage(value);
}

async function completeWhatIsTheWorkersApplicationRegistrationCardNumberPage(pages: Pages, value: string) {
    await pages.ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage.completeWhatIsTheWorkersApplicationRegistrationCardNumberPage(value);
}

async function completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages: Pages, value: string) {
    await pages.ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage.completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(value);
}

async function completeHasTheWorkerBeenInTheUkSinceBefore1988Page(pages: Pages, value: string) {
    await pages.ecsHasTheWorkerBeenInTheUkSinceBefore1988Page.completeHasTheWorkerBeenInTheUkSinceBefore1988Page(value);
}

async function completeHasTheWorkerAppliedForOrDoTheyQualifyForSettlementProtectionPage(pages: Pages, value: string) {
    await pages.ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage.completeHasTheWorkerAppliedForOrDoTheyQualifyForSettlementProtectionPage(value);
}

async function completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages: Pages) {
    await pages.ecsYouNeedToAskTheHOToConductARightToWorkCheckPage.completeYouNeedToAskTheHOToConductARightToWorkCheckPage();
}

async function completeWorkerDetails1988Page(pages: Pages, fullName: string, date: string, country: string, placeOfBirth: string, yearInUk: string, ni: string, employerPhoneNo: string, employerEmail: string) {
    await pages.ecsWorkerDetails1998Page.completeWorkerDetails1988Page(fullName, date, country, placeOfBirth, yearInUk, ni, employerPhoneNo, employerEmail);
}

async function completeWorkerDetailsPage(pages: Pages, fullName: string, date: string, nationality: string) {
    await pages.ecsWorkerDetailsPage.completeWorkerDetailsPage(fullName, date, nationality);
}

async function completeHomeOfficeReferenceNumberPage(pages: Pages, value: string) {
    await pages.ecsHomeOfficeReferenceNumberPage.completeHomeOfficeReferenceNumberPage(value);
}

async function completeWorkersCurrentAddressPage(pages: Pages, addressLine1: string, addressLine2: string, townOrCity: string, zipCode: string, country: string) {
    await pages.ecsWorkersCurrentAddressPage.completeWorkersCurrentAddressPage(addressLine1, addressLine2, townOrCity, zipCode, country);
}

async function completeWorkersCurrentAddressUkPage(pages: Pages, addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await pages.ecsWorkersCurrentAddressUkPage.completeWorkersCurrentAddressUkPage(addressLine1, addressLine2, townOrCity, postCode);
}

async function completeWorkersJobInformationPage(pages: Pages, jobTitle: string, hours: string) {
    await pages.ecsWorkersJobInformationPage.completeWorkersJobInformationPage(jobTitle, hours);
}

async function completeEmployerContactDetailsPage(pages: Pages, businessName: string, typeOfBusiness: string, employersContactName: string, contactJobTitle: string, contactTelephone: string, contactEmailAddress: string) {
    await pages.ecsEmployerContactDetailsPage.completeEmployerContactDetailsPage(businessName, typeOfBusiness, employersContactName, contactJobTitle, contactTelephone, contactEmailAddress);
}

async function completeBusinessAddressPage(pages: Pages, addressLine1: string, addressLine2: string, townOrCity: string, postCode: string) {
    await pages.ecsBusinessAddressPage.completeBusinessAddressPage(addressLine1, addressLine2, townOrCity, postCode);
}

async function completeSummaryPage(pages: Pages) {
    await pages.ecsCheckYourAnswersPage.completeSummaryPage();
}

async function completeDataProtectionStatementPage(pages: Pages) {
    await pages.ecsDataProtectionStatementPage.completeDataProtectionStatementPage();
}



//******************************* Functions to complete various pages in the ECS journey *******************************//

async function completeCheckMyRightToWorkRequestedForm(pages: Pages, scenarioId: string) {
    await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);

    switch (scenarioId.toLowerCase()) {
        case 'right to work check requested journey 1':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.ZIP_CODE, c.LOCATION_ALGERIA);
            break;
        case 'right to work check requested journey 2':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, 'No, they are a Frontier Worker in the UK');
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        case 'right to work check requested journey 3':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        case 'right to work check requested journey 4':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerBeenInTheUkSinceBefore1988Page(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedForOrDoTheyQualifyForSettlementProtectionPage(pages, c.RESPONSE_NO);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        case 'right to work check requested journey 5':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerBeenInTheUkSinceBefore1988Page(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetails1988Page(pages, c.FULL_NAME, '11/11/1980', 'Niger', 'leeds', '1980', 'AA123456C', '01617848580', 'test@test.com');
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        case 'right to work check requested journey 6':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_YES);
            await completesHaveYouSeenTheOriginalDocumentPage(pages, c.RESPONSE_YES);
            await completeWhatIsTheWorkersApplicationRegistrationCardNumberPage(pages, c.REGISTRATION_CARD_NO);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        case 'right to work check requested journey 7':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '29/02/2008');
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.ZIP_CODE, c.LOCATION_ALGERIA);
            break;
        case 'right to work check requested journey 8':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '28/02/2008');
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, c.RESPONSE_YES);
            await completeWhenWasTheTupeTransferPage(pages, '29/02/2008');
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            break;
        default:
            throw new Error(`Wrong radio value scenario id: ${scenarioId}`);
    }

    await completeWorkersJobInformationPage(pages, 'QA', '48');
    await completeEmployerContactDetailsPage(pages, c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, c.CONTACT_NAME, c.CONTACT_JOB_TITLE, c.TELEPHONE, getSasHofEmail());
    await completeBusinessAddressPage(pages, c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
    await completeSummaryPage(pages);
    await completeDataProtectionStatementPage(pages);
}

async function answersEcsAndWasUnableToCheckMyRightToWorkRequested(pages: Pages, scenarioId: string) {
    switch (scenarioId.toLowerCase()) {
        case 'ineligible journey':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_YES);
            break;
        case 'ineligible employer journey':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '28/02/2008');
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, c.RESPONSE_NO);
            break;
        case 'ineligible tupe journey':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '01/01/2008');
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, c.RESPONSE_YES);
            await completeWhenWasTheTupeTransferPage(pages, '28/02/2008');
            break;
        case 'original document journey':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_YES);
            await completesHaveYouSeenTheOriginalDocumentPage(pages, c.RESPONSE_NO);
            break;
        default:
            throw new Error(`Wrong radio value scenario id: ${scenarioId}`);
    }
}

async function answerToPage(pages: Pages, answer: string, pageName: string) {
    switch (pageName.toLowerCase()) {
        case 'right to work check eligibility':
            await completeRightToWorkCheckEligibilityPage(pages, answer);
            break;
        case 'does this person already work for you?':
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, answer);
            break;
        case 'are you unable to use a digital right to work service due to a technical error?':
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, answer);
            break;
        case 'has the worker applied to the eu settlement scheme(euss)?':
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, answer);
            break;
        case 'does the worker have an application registration card (arc) that shows they have the right to work?':
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, answer);
            break;
        case 'does the worker have an ongoing appeal or application with the home office?':
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, answer);
            break;
        case 'has the worker been in the uk since before 1988?':
            await completeHasTheWorkerBeenInTheUkSinceBefore1988Page(pages, answer);
            break;
        case 'when did they start working for you?':
            await completeWhenDidTheyStartWorkingForYouPage(pages, answer);
            break;
        case 'do they work for you as a result of a tupe transfer?':
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, answer);
            break;
        default:
            throw new Error(`Wrong page name: ${pageName}`);
    }
}

async function navigateToPage(pages: Pages, pageName: string) {
    switch (pageName.toLowerCase()) {
        case 'right to work check eligibility':
            break;
        case 'have you seen the original document?':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_YES);
            break;
        case 'when did they start working for you?':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            break;
        case "what is the worker's application registration card number":
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_YES);
            await completesHaveYouSeenTheOriginalDocumentPage(pages, c.RESPONSE_YES);
            break;
        case 'do they work for you as a result of a tupe transfer?':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '28/02/2008');
            break;
        case 'when was the tupe transfer?':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '01/01/2008');
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, c.RESPONSE_YES);
            break;
        case 'worker details':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '29/02/2008');
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            break;
        case 'worker details 1988':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerBeenInTheUkSinceBefore1988Page(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            break;
        case "worker's current address":
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            break;
        case "worker's current address uk":
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, 'No, they are a Frontier Worker in the UK');
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            break;
        case "worker's job information":
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.ZIP_CODE, c.LOCATION_ALGERIA);
            break;
        case 'employer contact details':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_NO);
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.ZIP_CODE, c.LOCATION_ALGERIA);
            await completeWorkersJobInformationPage(pages, 'QA', '48');
            break;
        case 'check you answers':
            await completeRightToWorkCheckEligibilityPage(pages, c.RESPONSE_NO);
            await completeDoesThisPersonAlreadyWorkForYouPage(pages, c.RESPONSE_YES);
            await completeWhenDidTheyStartWorkingForYouPage(pages, '28/02/2008');
            await completeDoTheyWorkForYouAsAResultOfATupeTransferPage(pages, c.RESPONSE_YES);
            await completeWhenWasTheTupeTransferPage(pages, '29/02/2008');
            await completeAreYouUnableToUseDigitalRightToWorkServiceDueToTechnicalErrorPage(pages, c.RESPONSE_NO);
            await completeHasTheWorkerAppliedToTheEUSSPage(pages, c.RESPONSE_NONE_OF_THE_ABOVE);
            await completeDoesTheWorkerHaveAnARCThatShowsTheyHaveRightToWorkPage(pages, c.RESPONSE_NO);
            await completeDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHomeOfficePage(pages, c.RESPONSE_YES);
            await completeYouNeedToAskTheHOToConductARightToWorkCheckPage(pages);
            await completeWorkerDetailsPage(pages, c.FULL_NAME, c.DOB_11_11_1988, c.NATIONALITY_NIGER);
            await completeHomeOfficeReferenceNumberPage(pages, c.HO_REF_NUMBER);
            await completeWorkersCurrentAddressUkPage(pages, c.ADDRESS_LINE_1, c.ADDRESS_LINE_2, c.TOWN_OR_CITY, c.POSTCODE);
            await completeWorkersJobInformationPage(pages, 'QA', '48');
            await completeEmployerContactDetailsPage(pages, c.BUSINESS_OR_COMPANY_NAME, c.TYPE_BUSINESS, c.CONTACT_NAME, c.CONTACT_JOB_TITLE, c.TELEPHONE, getSasHofEmail());
            await completeBusinessAddressPage(pages, c.B_ADDRESS_LINE_1, c.B_ADDRESS_LINE_2, c.B_TOWN_OR_CITY, c.B_POSTCODE);
            break;
        default:
            throw new Error(`Wrong page name: ${pageName}`);
    }
}

Given("I visit the Employer's checking service Page", async ({ pages }) => {
    await pages.ecsHomePage.navigateToUrl();
    await pages.ecsHomePage.acceptCookies();
});

When('I fill out the answers to ECS form pertaining to {string}', async ({ pages }, scenario: string) => {
    await answersEcsAndWasUnableToCheckMyRightToWorkRequested(pages, scenario);
});

When('I fill out the answers to ECS form pertaining to {string} happy path test', async ({ pages }, scenario: string) => {
    await completeCheckMyRightToWorkRequestedForm(pages, scenario);
});

Then('I should see {string} page', async ({ page }, expectedPageTitle: string) => {
    await expect(page).toHaveTitle(expectedPageTitle);
});

Then('{string} text is displayed as page header', async ({ pages }, expectedPageHeaderText: string) => {
    await expect(pages.basePage.headerText).toHaveText(expectedPageHeaderText);
});

Then('{string} link is displayed on the page', async ({ pages }, text: string) => {
    switch (text.toLowerCase()) {
        case 'ineligible':
            expect(await pages.basePage.linkTextIsDisplayed("need to check that the employee's or prospective employee's documents are valid")).toBe(true);
            break;
        case 'ineligible tupe':
        case 'ineligible employer':
            expect(await pages.basePage.linkTextIsDisplayed('Document checks should have been carried out when the person was recruited.')).toBe(true);
            break;
        default:
            throw new Error(`Wrong text: ${text}`);
    }
});

Then('Request another check button is displayed', async ({ pages }) => {
    expect(await pages.ecsRightToWorkCheckRequestedPage.isRequestAnotherCheckBtnDisplayed()).toBe(true);
});

Then('I should see {string} section name displayed', async ({ pages }, expectedSectionName: string) => {
    const actualSectionName = await pages.ecsCheckYourAnswersPage.getSectionNames(expectedSectionName);
    expect(actualSectionName?.trim()).toEqual(expectedSectionName);
});

When('I choose to navigate to {string} page for ECS', async ({ pages }, pageName: string) => {
    await navigateToPage(pages, pageName);
});

When('I answer {string} on {string} page and choose to continue', async ({ pages }, answer: string, pageName: string) => {
    await answerToPage(pages, answer, pageName);
});

When('I select continue', async ({ pages }) => {
    await pages.basePage.clickContinueButton();
});

Then('I should see {string} error message displayed', async ({ pages }, expectedErrorMessage: string) => {
    const actualErrorMessage = await pages.basePage.getThereIsAProblemTextErrorText();
    expect(actualErrorMessage).toEqual(expectedErrorMessage);
});

Then('I should see {string} error summary', async ({ pages }, expectedErrorMessage: string) => {
    const expectedErrorArray = expectedErrorMessage.trim().split('¬');
    const actualText = await pages.basePage.getErrorSummaryListText();
    const actualErrorArray = actualText!.replaceAll('\t', '').trim().split(/\r?\n/);

    expect(actualErrorArray).toEqual(expectedErrorArray);
});

When('I enter {string} in When did they start working for you? date field', async ({ pages }, date: string) => {
    await completeWhenDidTheyStartWorkingForYouPage(pages, date);
});

When('I enter {string} in When was the TUPE transfer? date field', async ({ pages }, date: string) => {
    await completeWhenWasTheTupeTransferPage(pages, date);
});

When("I enter {string} in What is the worker's application registration card number date field", async ({ pages }, value: string) => {
    await completeWhatIsTheWorkersApplicationRegistrationCardNumberPage(pages, value);
});

When('I complete the fields below with worker details 1988 details:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeWorkerDetails1988Page(
        pages,
        data['Full name'],
        data['Date of birth'],
        data['Country of nationality'],
        data['Place of birth'],
        data['Year of entry to the UK'],
        data['National insurance no'],
        data['Employer telephone number'],
        data['Employer email address']
    );
});

When('I complete the fields below with reference number detail:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeHomeOfficeReferenceNumberPage(pages, data['Reference number']);
});

When('I complete the fields below with worker details details:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeWorkerDetailsPage(pages, data['Full name'], data['Date of birth'], data['Nationality']);
});

When("I complete the fields below with worker's current address details:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeWorkersCurrentAddressPage(pages, data['Address line 1'], data['Address line 2'], data['Town or City'], data['Postal or ZIP code'], data['Country']);
});

When("I complete the fields below with worker's current address uk details:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeWorkersCurrentAddressUkPage(pages, data['Address line 1'], data['Address line 2'], data['Town or City'], data['Postcode']);
});

When("I complete the fields below with Worker's job information details:", async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeWorkersJobInformationPage(pages, data['Job Title'], data['Hours']);
});

When('I complete the fields below with Employer contact details:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeEmployerContactDetailsPage(pages, data['Business name'], data['Type of business'], data["Employer's contact name"], data['Contact job title'], data['Contact telephone'], data['Name email address']);
});

When('I complete the fields below with Business address details:', async ({ pages }, dataTable: DataTable) => {
    const data = dataTable.rowsHash();
    await completeBusinessAddressPage(pages, data['Address line 1'], data['Address line 2'], data['Town or City'], data['Postcode']);
});

When('I select submit request', async ({ pages }) => {
    await pages.ecsDataProtectionStatementPage.selectSubmitRequest();
});