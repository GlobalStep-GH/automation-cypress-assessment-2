/// <reference types="Cypress" />

// ---------- Get elements ----------

export function getHeader() {
    return cy.get('#header');
}

// ---------- Element actions ----------

export function clickHeader() {
    getHeader().click();
}

// ---------- Verify elements ----------

export function verifyHeader() {
    getHeader()
        .should('be.visible')
        .should('have.text', 'Page header');
}