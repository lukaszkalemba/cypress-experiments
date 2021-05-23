/// <reference types="cypress" />

describe('Basic Tests', () => {
  beforeEach(() => {
    cy.visit('http://codedamn.com/');
  });

  it('Every basic element exists', () => {
    cy.contains('Learn web development');

    cy.contains('Get Pro - Unlock everything.').should(
      'have.text',
      'Get Pro - Unlock everything.'
    );
  });

  it('Every basic element exists on mobile', () => {
    cy.viewport('iphone-6');

    cy.contains('Learn web development');

    cy.contains('Get Pro - Unlock everything.').should(
      'have.text',
      'Get Pro - Unlock everything.'
    );
  });

  it('Course page looks good', () => {
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

  it('Login should display correct error', () => {
    cy.viewport('macbook-16');

    cy.get('[href="/settings"]').click();

    cy.url().should('include', '/login');

    cy.get('[data-testid=snackclose]').should('not.exist');

    cy.get('[data-testid=username]').type('lukasz.kalemba1@gmail.com');
    cy.get('[data-testid=password]').type('zaq1@WSX');
    cy.get('[data-testid=login]').click();

    cy.get('[data-testid=snackclose]').should('exist');
  });

  it.only('Login process should work fine', () => {
    cy.viewport('macbook-16');

    cy.get('[href="/settings"]').click();

    cy.url().should('include', '/login');

    cy.get('[data-testid=username]').type('iosdev');
    cy.get('[data-testid=password]').type('iosdev');
    cy.get('[data-testid=login]').click();

    cy.get('[data-testid=snackclose]').should('not.exist');

    cy.url().should('include', '/dashboard');
  });
});
