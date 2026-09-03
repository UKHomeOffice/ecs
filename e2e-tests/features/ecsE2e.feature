@EcsRegression
@EcsRegressionCI
@ECS-E2E

Feature: ECS - Employer's checking service

  #TLF-173, TLF-175, TLF-176, TLF-177, TLF-184
  @ECS-HP
  Scenario Outline: ECS - User is able to submit right to work check requested [E2E Happy Path]
    Given I visit the Employer's checking service Page
    When I fill out the answers to ECS form pertaining to "<Check Requested Journey Test>" happy path test
    Then I should see "Right to work check requested – Employer checking service – GOV.UK" page
    And "Right to work check requested" text is displayed as page header
    And Request another check button is displayed
    Examples:
      | Check Requested Journey Test            |
      | Right to work check requested journey 1 |
      | Right to work check requested journey 2 |
      | Right to work check requested journey 3 |
      | Right to work check requested journey 4 |
      | Right to work check requested journey 5 |
      | Right to work check requested journey 6 |
      | Right to work check requested journey 7 |
      | Right to work check requested journey 8 |



  #TLF-173, TLF-175, TLF-176, TLF-184
  Scenario Outline: ECS - User doesn't not need to request right to work check [E2E]
    Given I visit the Employer's checking service Page
    When I fill out the answers to ECS form pertaining to "<Ineligible Journey Test>"
    Then I should see "You do not need to request a Home Office right to work check – Employer checking service – GOV.UK" page
    And "You do not need to request a Home Office right to work check" text is displayed as page header
    And "<Document link>" link is displayed on the page
    Examples:
      | Ineligible Journey Test     | Document link       |
      | Ineligible journey          | Ineligible          |
      | Ineligible employer journey | Ineligible Employer |
      | Ineligible tupe journey     | Ineligible Tupe     |



  #TLF-177
  Scenario: ECS - Verify that you must have seen the original document page is displayed [E2E]
    Given I visit the Employer's checking service Page
    When I fill out the answers to ECS form pertaining to "Original document journey"
    Then I should see "You must have seen the original document – Employer checking service – GOV.UK" page
    And "You must have seen the original document" text is displayed as page header



  #TLF-191
  Scenario: ECS - User is able change answers in the Check your answers page [E2E Happy Path]
    Given I visit the Employer's checking service Page
    When I choose to navigate to "Check you answers" page for ECS
    Then I should see "Eligibility criteria" section name displayed
    And I should see "Worker details" section name displayed
    And I should see "Worker's address" section name displayed
    And I should see "Job information" section name displayed
    And I should see "Employer contact details" section name displayed