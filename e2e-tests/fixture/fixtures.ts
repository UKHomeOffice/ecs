import { test as base } from 'playwright-bdd';
import { basePage } from '../pages/base-page';
import { ecsHomePage } from '../pages/ecs-home-page';
import { ecsRightToWorkCheckEligibilityPage } from '../pages/ecs-right-to-work-check-eligibility-page';
import { ecsDoesThisPersonAlreadyWorkForYouPage } from '../pages/ecs-does-this-person-already-work-for-you-page';
import { ecsWhenDidTheyStartWorkingForYouPage } from '../pages/ecs-when-did-they-start-working-for-you-page';
import { ecsDoTheyWorkForYouAsAResultOfATupeTransferPage } from '../pages/ecs-do-they-work-for-you-as-a-result-of-a-tupe-transfer-page';
import { ecsWhenWasTheTupeTransferPage } from '../pages/ecs-when-was-the-tupe-transfer-page';
import { ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage } from '../pages/ecs-are-you-unable-to-use-drtws-due-to-technical-error-page';
import { ecsHasTheWorkerAppliedToTheEUSSPage } from '../pages/ecs-has-the-worker-applied-to-the-euss-page';
import { ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage } from '../pages/ecs-does-the-worker-have-an-arc-that-shows-they-have-rtw-page';
import { ecsHaveYouSeenTheOriginalDocumentPage } from '../pages/ecs-have-you-seen-the-original-document-page';
import { ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage } from '../pages/ecs-what-is-the-workers-application-registration-card-number-page';
import { ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage } from '../pages/ecs-does-the-worker-have-an-ongoing-appeal-or-application-with-the-ho-page';
import { ecsHasTheWorkerBeenInTheUkSinceBefore1988Page } from '../pages/ecs-has-the-worker-been-in-the-uk-since-before-1988-page';
import { ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage } from '../pages/ecs-has-the-worker-applied-for-or-do-they-qualify-for-sp-page';
import { ecsYouNeedToAskTheHOToConductARightToWorkCheckPage } from '../pages/ecs-you-need-to-ask-the-ho-to-conduct-a-right-to-work-check-page';
import { ecsWorkerDetails1998Page } from '../pages/ecs-worker-details-1998-page';
import { ecsWorkerDetailsPage } from '../pages/ecs-worker-details-page';
import { ecsHomeOfficeReferenceNumberPage } from '../pages/ecs-home-office-reference-number-page';
import { ecsWorkersCurrentAddressPage } from '../pages/ecs-workers-current-address-page';
import { ecsWorkersCurrentAddressUkPage } from '../pages/ecs-workers-current-address-uk-page';
import { ecsWorkersJobInformationPage } from '../pages/ecs-workers-job-information-page';
import { ecsEmployerContactDetailsPage } from '../pages/ecs-employer-contact-details-page';
import { ecsBusinessAddressPage } from '../pages/ecs-business-address-page';
import { ecsCheckYourAnswersPage } from '../pages/ecs-check-your-answers-page';
import { ecsDataProtectionStatementPage } from '../pages/ecs-data-protection-statement-page';
import { ecsRightToWorkCheckRequestedPage } from '../pages/ecs-right-to-work-check-requested-page';
import { ecsYouDoNotNeedToRequestHORTWCIneligibilityPage } from '../pages/ecs-you-do-not-need-to-request-hortwc-ineligibility-page';
import { ecsYouDoNotNeedToRequestHORTWCIneligibilityEmployedPage } from '../pages/ecs-you-do-not-need-to-request-hortwc-ineligibility-employed-page';
import { ecsYouDoNotNeedToRequestHORTWCIneligibilityTupePage } from '../pages/ecs-you-do-not-need-to-request-hortwc-ineligibility-tupe-page';
import { ecsYouMustHaveSeenTheOriginalDocumentPage } from '../pages/ecs-you-must-have-seen-the-original-document-page';

export type Pages = {
  basePage: basePage;
  ecsHomePage: ecsHomePage;
  ecsRightToWorkCheckEligibilityPage: ecsRightToWorkCheckEligibilityPage;
  ecsDoesThisPersonAlreadyWorkForYouPage: ecsDoesThisPersonAlreadyWorkForYouPage;
  ecsWhenDidTheyStartWorkingForYouPage: ecsWhenDidTheyStartWorkingForYouPage;
  ecsDoTheyWorkForYouAsAResultOfATupeTransferPage: ecsDoTheyWorkForYouAsAResultOfATupeTransferPage;
  ecsWhenWasTheTupeTransferPage: ecsWhenWasTheTupeTransferPage;
  ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage: ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage;
  ecsHasTheWorkerAppliedToTheEUSSPage: ecsHasTheWorkerAppliedToTheEUSSPage;
  ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage: ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage;
  ecsHaveYouSeenTheOriginalDocumentPage: ecsHaveYouSeenTheOriginalDocumentPage;
  ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage: ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage;
  ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage: ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage;
  ecsHasTheWorkerBeenInTheUkSinceBefore1988Page: ecsHasTheWorkerBeenInTheUkSinceBefore1988Page;
  ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage: ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage;
  ecsYouNeedToAskTheHOToConductARightToWorkCheckPage: ecsYouNeedToAskTheHOToConductARightToWorkCheckPage;
  ecsWorkerDetails1998Page: ecsWorkerDetails1998Page;
  ecsWorkerDetailsPage: ecsWorkerDetailsPage;
  ecsHomeOfficeReferenceNumberPage: ecsHomeOfficeReferenceNumberPage;
  ecsWorkersCurrentAddressPage: ecsWorkersCurrentAddressPage;
  ecsWorkersCurrentAddressUkPage: ecsWorkersCurrentAddressUkPage;
  ecsWorkersJobInformationPage: ecsWorkersJobInformationPage;
  ecsEmployerContactDetailsPage: ecsEmployerContactDetailsPage;
  ecsBusinessAddressPage: ecsBusinessAddressPage;
  ecsCheckYourAnswersPage: ecsCheckYourAnswersPage;
  ecsDataProtectionStatementPage: ecsDataProtectionStatementPage;
  ecsRightToWorkCheckRequestedPage: ecsRightToWorkCheckRequestedPage;
  ecsYouDoNotNeedToRequestHORTWCIneligibilityPage: ecsYouDoNotNeedToRequestHORTWCIneligibilityPage;
  ecsYouDoNotNeedToRequestHORTWCIneligibilityEmployedPage: ecsYouDoNotNeedToRequestHORTWCIneligibilityEmployedPage;
  ecsYouDoNotNeedToRequestHORTWCIneligibilityTupePage: ecsYouDoNotNeedToRequestHORTWCIneligibilityTupePage;
  ecsYouMustHaveSeenTheOriginalDocumentPage: ecsYouMustHaveSeenTheOriginalDocumentPage;
};

export const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    await use({
      basePage: new basePage(page),
      ecsHomePage: new ecsHomePage(page),
      ecsRightToWorkCheckEligibilityPage: new ecsRightToWorkCheckEligibilityPage(page),
      ecsDoesThisPersonAlreadyWorkForYouPage: new ecsDoesThisPersonAlreadyWorkForYouPage(page),
      ecsWhenDidTheyStartWorkingForYouPage: new ecsWhenDidTheyStartWorkingForYouPage(page),
      ecsDoTheyWorkForYouAsAResultOfATupeTransferPage: new ecsDoTheyWorkForYouAsAResultOfATupeTransferPage(page),
      ecsWhenWasTheTupeTransferPage: new ecsWhenWasTheTupeTransferPage(page),
      ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage: new ecsAreYouUnableToUseDRTWSDueToTechnicalErrorPage(page),
      ecsHasTheWorkerAppliedToTheEUSSPage: new ecsHasTheWorkerAppliedToTheEUSSPage(page),
      ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage: new ecsDoesTheWorkerHaveAnARCThatShowsTheyHaveRTWPage(page),
      ecsHaveYouSeenTheOriginalDocumentPage: new ecsHaveYouSeenTheOriginalDocumentPage(page),
      ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage: new ecsWhatIsTheWorkersApplicationRegistrationCardNumberPage(page),
      ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage: new ecsDoesTheWorkerHaveAnOngoingAppealOrApplicationWithTheHOPage(page),
      ecsHasTheWorkerBeenInTheUkSinceBefore1988Page: new ecsHasTheWorkerBeenInTheUkSinceBefore1988Page(page),
      ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage: new ecsHasTheWorkerAppliedForOrDoTheyQualifyForSPPage(page),
      ecsYouNeedToAskTheHOToConductARightToWorkCheckPage: new ecsYouNeedToAskTheHOToConductARightToWorkCheckPage(page),
      ecsWorkerDetails1998Page: new ecsWorkerDetails1998Page(page),
      ecsWorkerDetailsPage: new ecsWorkerDetailsPage(page),
      ecsHomeOfficeReferenceNumberPage: new ecsHomeOfficeReferenceNumberPage(page),
      ecsWorkersCurrentAddressPage: new ecsWorkersCurrentAddressPage(page),
      ecsWorkersCurrentAddressUkPage: new ecsWorkersCurrentAddressUkPage(page),
      ecsWorkersJobInformationPage: new ecsWorkersJobInformationPage(page),
      ecsEmployerContactDetailsPage: new ecsEmployerContactDetailsPage(page),
      ecsBusinessAddressPage: new ecsBusinessAddressPage(page),
      ecsCheckYourAnswersPage: new ecsCheckYourAnswersPage(page),
      ecsDataProtectionStatementPage: new ecsDataProtectionStatementPage(page),
      ecsRightToWorkCheckRequestedPage: new ecsRightToWorkCheckRequestedPage(page),
      ecsYouDoNotNeedToRequestHORTWCIneligibilityPage: new ecsYouDoNotNeedToRequestHORTWCIneligibilityPage(page),
      ecsYouDoNotNeedToRequestHORTWCIneligibilityEmployedPage: new ecsYouDoNotNeedToRequestHORTWCIneligibilityEmployedPage(page),
      ecsYouDoNotNeedToRequestHORTWCIneligibilityTupePage: new ecsYouDoNotNeedToRequestHORTWCIneligibilityTupePage(page),
      ecsYouMustHaveSeenTheOriginalDocumentPage: new ecsYouMustHaveSeenTheOriginalDocumentPage(page),
    });
  },
});

export const expect = test.expect;