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

  it('Course page looks good', () => {
    cy.visit('http://codedamn.com/');

    cy.get('[data-testid="menutoggle"]').click();

    cy.contains('Login').click({ force: true });

    cy.log('HELLO WORLD');

    cy.url().then((value) => {
      cy.log('The current real URL is:', value);
    });

    cy.log('HELLO WORLD');

    cy.contains('Start your course').click({ force: true });

    cy.url().should('include', '/learn');
    cy.go('back');
  });
});
