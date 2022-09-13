### Task 1

Complete each of the tests within *cypress/e2e/assessment.js*

[Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

### Task 2

Relocate all of the getters/functions from **Task 1** into a POM system
Use the location *cypress/pages*, one has been created for you already

[Page Object Model](https://medium.com/nerd-for-tech/cypress-page-object-model-953791736972#:~:text=Page%20Object%20Model%2C%20also%20known%20as%20POM%2C%20is%20a%20design,application%20as%20a%20class%20file.)

### Task 3

* Relocate any constant (non-changing) strings into a *.json* file in *cypress/fixtures*
* Import those strings and use them in place of the strings created in *cypress/e2e/assessment.js*

An example of this are the strings in the test "Verify a page's contents" in *cypress/e2e/assessment.js*

[Cypress Fixtures](https://docs.cypress.io/api/commands/fixture)