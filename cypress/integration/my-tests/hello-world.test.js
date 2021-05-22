/// <reference types="cypress" />

describe('Basic Tests', () => {
  it('Every basic element exists', () => {
    cy.visit('http://codedamn.com/');

    cy.contains('Learn web development');

    cy.contains('Get Pro - Unlock everything.').should(
      'have.text',
      'Get Pro - Unlock everything.'
    );
  });

  it('Every basic element exists on mobile', () => {
    cy.viewport('iphone-6');
    cy.visit('http://codedamn.com/');

    cy.contains('Learn web development');

    cy.contains('Get Pro - Unlock everything.').should(
      'have.text',
      'Get Pro - Unlock everything.'
    );
  });
});
