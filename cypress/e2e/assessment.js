/// <reference types="cypress" />

describe('Clicking elements', () => {
    it('Get any list element using an index', () => {
      cy.visit('https://the-internet.herokuapp.com/');

      /** 
       * Create a function to get any list element using an index, i.e. 
       * function getListElement(index) {
       *    // Get the list...
       *    return list[index]
       * }
       */ 
      // YOUR CODE BELOW

      

      // ----------
    })

    it('Clicking a checkbox', () => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes');

      // Create a script to check and uncheck the checkboxes on this page
      // YOUR CODE BELOW

      

      // ----------
    })

    it('Basic authentication', () => {
      // Implement a way to authenticate Cypress on this page
      // YOUR CODE BELOW

      cy.visit('https://the-internet.herokuapp.com/basic_auth');

      // ----------
    })

    it('Drag and Drop', () => {
      cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

      // Implement a method to drag and drop the elements on this page
      // YOUR CODE BELOW

      

      // ----------
    })

    it('Type "Hello world!"', () => {
      cy.visit('https://the-internet.herokuapp.com/key_presses');

      // Type "Hello world!" in the input box on this page
      // YOUR CODE BELOW

      

      // ----------
    })

    it(`Verify a page's contents`, () => {
      cy.visit('https://the-internet.herokuapp.com/abtest');

      /** 
       * Verify the contents of this page, i.e.
       * The title should be "A/B Test Control"
       * The body content should be "Also known as split testing. This is a way in which businesses ..."
       * Each element should be visible
       */
      // YOUR CODE BELOW

      

      // ----------
    })
  })