@EcsRegression
@ECS-V

Feature: ECS - Employer's checking service
#TLF-285, #TLF-293 and #TLF-293


  Scenario: ECS - Radio validation check for Eligibility, Already employed, Digital right to work, Eu-settlement scheme, Arc card, Ongoing appeal, Before 1988 and Settlement Protection pages
    Given I visit the Employer's checking service Page
#Eligibility page radio check
    When I choose to navigate to "Right to work check eligibility" page for ECS
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has any of the listed documents or evidence" error summary
#Already employed page radio check
    When I answer "No" on "Right to work check eligibility" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker already works for you" error summary
#Digital right to work page radio check
    When I answer "No" on "Does this person already work for you?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if you are unable to use a digital Right to Work service" error summary
#Eu-settlement scheme page radio check
    When I answer "No" on "Are you unable to use a digital Right to work service due to a technical error?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has applied to the EU Settlement Scheme (EUSS)" error summary
#Arc card page radio check
    When I answer "None of the above" on "Has the worker applied to the EU Settlement Scheme(EUSS)?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has an application registration card (ARC) that shows they have the right to work" error summary
#Ongoing appeal page radio check
    When I answer "No" on "Does the worker have an application registration card (ARC) that shows they have the right to work?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has an ongoing application or appeal for permission to stay in the UK" error summary
#Before 1988 page radio check
    When I answer "No" on "Does the worker have an ongoing appeal or application with the Home Office?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has been in the UK since before 1988" error summary
#Settlement Protection page radio check
    When I answer "No" on "Has the worker been in the UK since before 1988?" page and choose to continue
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Tell us if the worker has any evidence from or ongoing applications with the Home Office" error summary




  Scenario Outline: ECS - Radio validation check for Original document and Tupe pages
    Given I visit the Employer's checking service Page
    When I choose to navigate to "<Page Name>" page for ECS
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "<Error>" error summary
    Examples:
      | Page Name                                            | Error                                                              |
      | Have you seen the original document?                 | Tell us if the you have seen the worker's original document        |
      | Do they work for you as a result of a TUPE transfer? | Tell us if the worker works for you as a result of a TUPE transfer |




  Scenario Outline: ECS - Date page validation error message check for When they started working and Tupe date transfer
    Given I visit the Employer's checking service Page
    When I choose to navigate to "When did they start working for you?" page for ECS
#When-started page - No date enter and continue selected
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Tell us when the worker started working for you" error summary
#When-started page - Future date enter
    When I enter "Tomorrow's date" in When did they start working for you? date field
    Then I should see "There is a problem" error message displayed
    And I should see "The worker start date must be today or in the past" error summary
#When-started page - Date enter is more than 100 years
    When I enter "more than 100 years ago" in When did they start working for you? date field
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date when the worker started working for you" error summary
    When I answer "<Date>" on "When did they start working for you?" page and choose to continue
    And I answer "Yes" on "Do they work for you as a result of a TUPE transfer?" page and choose to continue
#Tupe-data page - Date validation check no data enter
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Tell us when the worker works for you as a result of a TUPE transfer" error summary
#Tupe-data page - Date validation check when date is before the employee start date entered on when-started page
    When I enter "<Date>" in When was the TUPE transfer? date field
    Then I should see "There is a problem" error message displayed
    And I should see "TUPE transfer date must be after (02 January 2008) the worker started working for you" error summary
    Examples:
      | Date       |
      | 02/01/2008 |




Scenario: ECS - Field page validation error message check for Arc number page
    Given I visit the Employer's checking service Page
    When I choose to navigate to "What is the worker's application registration card number" page for ECS
#Selects 'Continue' without entering an ARC number
    And I select continue
    Then I should see "There is a problem" error message displayed
    And  I should see "Enter an ARC number" error summary
#Entering an ARC number that contains special characters or whitespace
    When I enter "!123ASD" in What is the worker's application registration card number date field
    Then I should see "There is a problem" error message displayed
    And  I should see "ARC number can only have numbers and letters a-z" error summary
#Entering an ARC number that contains special characters or whitespace
    When I enter "1 23ASD" in What is the worker's application registration card number date field
    Then I should see "There is a problem" error message displayed
    And  I should see "ARC number can only have numbers and letters a-z" error summary




Scenario: ECS - Field page validation error message check for worker details 1988 and Reference number page
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Worker details 1988" page for ECS
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the worker's full name¬Enter the worker's date of birth¬Enter a country of nationality¬Tell us where the worker was born¬Tell us the year when the worker first came to the UK before 1988" error summary
#Date of birth entered is after 1988, User enters a year of entry to the UK that is before the date of birth and National insurance number is fewer than 9 characters
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam       |
      | Date of birth             | 01/01/1988    |
      | Country of nationality    | Spain         |
      | Place of birth            | Leeds         |
      | Year of entry to the UK   | 1987          |
      | National insurance no     | A123456C      |
      | Employer telephone number | 01613456789   |
      | Employer email address    | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Worker's date of birth must be before 1988, when they came to the UK¬Worker's year of entry must be after 01 January 1988 when they were born¬Enter a National Insurance number in the correct format" error summary
#Date of birth entered is more than 120 years ago, Year of entry to the UK entered is more than 120 years ago and National insurance number is more than 9 characters
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam                 |
      | Date of birth             | more than 120 years ago |
      | Country of nationality    | Spain                   |
      | Place of birth            | Leeds                   |
      | Year of entry to the UK   | more than 120 years ago |
      | National insurance no     | AA1234567C              |
      | Employer telephone number | 01613456789             |
      | Employer email address    | Test@test.com           |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date of birth¬Enter a real date of entry¬Enter a National Insurance number in the correct format" error summary
#User enters a year of entry to the UK that is before the date of birth and National insurance number is a character other than letters as the first 2 characters
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam       |
      | Date of birth             | 01/01/1960    |
      | Country of nationality    | Spain         |
      | Place of birth            | Leeds         |
      | Year of entry to the UK   | 1959          |
      | National insurance no     | 00123456C     |
      | Employer telephone number | 01613456789   |
      | Employer email address    | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Worker's year of entry must be after 01 January 1960 when they were born¬Enter a National Insurance number in the correct format" error summary
#User enters a year of entry to the UK that is after 1987 and National insurance number is a character other than numbers for characters 3 to 8
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam       |
      | Date of birth             | 11/01/1987    |
      | Country of nationality    | Spain         |
      | Place of birth            | Leeds         |
      | Year of entry to the UK   | 1988          |
      | National insurance no     | AA12345IC     |
      | Employer telephone number | 01613456789   |
      | Employer email address    | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "You told us the worker arrived in the UK before 1988 – worker's year of entry must be before 1988¬Enter a National Insurance number in the correct format" error summary
#National insurance number is a character other than A, B, C or D as the 9th character
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam       |
      | Date of birth             | 31/12/1987    |
      | Country of nationality    | Spain         |
      | Place of birth            | Leeds         |
      | Year of entry to the UK   | 1987          |
      | National insurance no     | AA123456E     |
      | Employer telephone number | 01613456789   |
      | Employer email address    | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a National Insurance number in the correct format" error summary
    When I complete the fields below with worker details 1988 details:
      | Full name                 | Ful Sam       |
      | Date of birth             | 11/01/1987    |
      | Country of nationality    | Spain         |
      | Place of birth            | Leeds         |
      | Year of entry to the UK   | 1987          |
      | National insurance no     | AA123456C     |
      | Employer telephone number | 01613456789   |
      | Employer email address    | Test@test.com |
#Reference number page - User selects Continue while reference number field empty
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a Home Office reference number" error summary
#Reference number page - User enter less than 2 characters
    When I complete the fields below with reference number detail:
      | Reference number | 1 |
    Then I should see "There is a problem" error message displayed
    And I should see "Home Office reference number must be between 2 and 250 characters" error summary




  Scenario: ECS - Field page validation error message check for Worker details page
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Worker details" page for ECS
#Worker details page - No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the worker's full name¬Enter the worker's date of birth¬Enter a country of nationality" error summary
#Worker details page - Date of birth is less than 16 years ago
    When I complete the fields below with worker details details:
      | Full name     | Ful Sam                |
      | Date of birth | less than 16 years ago |
      | Nationality   | Spain                  |
    Then I should see "There is a problem" error message displayed
    And I should see "The worker must be 16 years or older – this service only applies to workers aged 16 or over" error summary
#Worker details page - Date of birth entered is more than 120 years ago
    When I complete the fields below with worker details details:
      | Full name     | Ful Sam                 |
      | Date of birth | more than 120 years ago |
      | Nationality   | Spain                   |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real date of birth" error summary




  Scenario: ECS - Field page validation error message check for Worker's current address page
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Worker's current address" page for ECS
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
#User selects 'Continue' after entering a postcode that contains special characters (not including whitespace)
    And I should see "Enter address line 1, typically the building and street¬Enter a town or city¬Enter the country the worker's address is in" error summary
    When I complete the fields below with worker's current address details:
      | Address line 1     | 12        |
      | Address line 2     | less than |
      | Town or City       | Leeds     |
      | Postal or ZIP code | 12733£    |
      | Country            | Chad      |
    Then I should see "There is a problem" error message displayed
    And I should see "Postal or ZIP code must only include letters a-z, numbers, spaces and dashes" error summary




  Scenario: ECS - Field page validation error message check for Worker's current address uk page
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Worker's current address uk" page for ECS
#No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter address line 1, typically the building and street¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with worker's current address uk details:
      | Address line 1 | 12      |
      | Address line 2 | Test St |
      | Town or City   | Leeds   |
      | Postcode       | 2L 1PP  |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with worker's current address uk details:
      | Address line 1 | 12      |
      | Address line 2 | Hof St  |
      | Town or City   | Leeds   |
      | Postcode       | L1- 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary



  Scenario: ECS - Field page validation error message check for Worker's job information, Employer contact detail, Business address and Data protection pages
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Worker's job information" page for ECS
#Job-Information page - No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter the job title of the role¬Tell us how many hours per week the job involves" error summary
#Job-Information page - User selects 'Continue' after entering a number outside the range 1-99
    When I complete the fields below with Worker's job information details:
      | Job Title | Business Analysis |
      | Hours     | 0                 |
    Then I should see "There is a problem" error message displayed
    And I should see "Hours of work per week must be between 1 and 99" error summary
    When I complete the fields below with Worker's job information details:
      | Job Title | Business Analysis |
      | Hours     | 1                 |
#Employer contact detail page - No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a business name¬Enter type of business¬Enter a name of a contact from the employer¬Enter the job title of the employer contact¬Enter a contact telephone number¬Enter a contact email address from the employer" error summary
#Business name is outside of permitted character range Business name less than 3 characters
    When I complete the fields below with Employer contact details:
      | Business name           | IT            |
      | Type of business        | Tech          |
      | Employer's contact name | Ful Sam       |
      | Contact job title       | Tester        |
      | Contact telephone       | 01612566787   |
      | Name email address      | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Business name must be between 3 and 256 characters" error summary
#Business Type is outside of permitted character range Business Type less than 3 characters
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD       |
      | Type of business        | TT            |
      | Employer's contact name | Ful Sam       |
      | Contact job title       | Tester        |
      | Contact telephone       | 01612566787   |
      | Name email address      | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Type of business must be between 3 and 256 characters" error summary
#Contact name is outside of permitted character range Contact name less than 3 characters
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD       |
      | Type of business        | Tech          |
      | Employer's contact name | TA            |
      | Contact job title       | Tester        |
      | Contact telephone       | 01612566787   |
      | Name email address      | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Contact name must be between 3 and 256 characters" error summary
#Job title is outside of permitted character range Job title less than 3 characters
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD        |
      | Type of business        | Tech           |
      | Employer's contact name | Ful Sam        |
      | Contact job title       | HH             |
      | Contact telephone       | +44808 1570192 |
      | Name email address      | Test@test.com  |
    Then I should see "There is a problem" error message displayed
    And I should see "Contact job title must be between 3 and 256 characters" error summary
#Contact telephone number is 10 digits long
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD       |
      | Type of business        | Tech          |
      | Employer's contact name | Ful Sam       |
      | Contact job title       | Tester        |
      | Contact telephone       | 0161629965    |
      | Name email address      | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192" error summary
#Contact telephone number is 12 digits long
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD       |
      | Type of business        | Tech          |
      | Employer's contact name | Ful Sam       |
      | Contact job title       | Tester        |
      | Contact telephone       | 016162996500  |
      | Name email address      | Test@test.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192" error summary
#Telephone number contains disallowed special characters or is in an invalid format
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD        |
      | Type of business        | Tech           |
      | Employer's contact name | Ful Sam        |
      | Contact job title       | Tester         |
      | Contact telephone       | $48081570192   |
      | Name email address      | Tester@tlf.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192" error summary
#Email address short Contact email address is less than 6 characters
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD     |
      | Type of business        | Tech        |
      | Employer's contact name | Ful Sam     |
      | Contact job title       | Tester      |
      | Contact telephone       | 01613296000 |
      | Name email address      | T@t.c       |
    Then I should see "There is a problem" error message displayed
    And I should see "Contact email address must be between 6 and 256 characters" error summary
#Enter a real email address email does not have @ symbol
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD       |
      | Type of business        | Tech          |
      | Employer's contact name | Ful Sam       |
      | Contact job title       | Tester        |
      | Contact telephone       | 01613296000   |
      | Name email address      | TesterTlf.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter a real email address email has nothing before @ symbol
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD        |
      | Type of business        | Tech           |
      | Employer's contact name | Ful Sam        |
      | Contact job title       | Tester         |
      | Contact telephone       | 01613296000    |
      | Name email address      | @TesterTlf.com |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
#Enter a real email address email has nothing after @ symbol
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD        |
      | Type of business        | Tech           |
      | Employer's contact name | Ful Sam        |
      | Contact job title       | Tester         |
      | Contact telephone       | 01613296000    |
      | Name email address      | TesterTlf.com@ |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real email address" error summary
    When I complete the fields below with Employer contact details:
      | Business name           | TLF LTD        |
      | Type of business        | Tech           |
      | Employer's contact name | Ful Sam        |
      | Contact job title       | Tester         |
      | Contact telephone       | 01613296000    |
      | Name email address      | Tester@Tlf.com |
#Business address page - No data entered in any of the fields
    And I select continue
    Then I should see "There is a problem" error message displayed
    And I should see "Enter address line 1, typically the building and street¬Enter a town or city¬Enter a postcode" error summary
#Postcode entered in an invalid UK format
    When I complete the fields below with Business address details:
      | Address line 1 | 12        |
      | Address line 2 | less than |
      | Town or City   | Leeds     |
      | Postcode       | 2L 1PP    |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
#Postcode entered contains special characters (not including whitespace)
    When I complete the fields below with Business address details:
      | Address line 1 | 12      |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L1! 1PP |
    Then I should see "There is a problem" error message displayed
    And I should see "Enter a real UK postcode" error summary
    When I complete the fields below with Business address details:
      | Address line 1 | 12      |
      | Address line 2 | Kings   |
      | Town or City   | Leeds   |
      | Postcode       | L12 1PP |
    And I select continue
#Data-protection page - When confirm check box is not checked
    And I select submit request
    Then I should see "There is a problem" error message displayed
    And I should see "Confirm you have read the Data Protection statement" error summary