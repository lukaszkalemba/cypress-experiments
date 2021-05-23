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

  it('Login should display correct error', () => {
    cy.visit('http://codedamn.com/');
    cy.viewport('macbook-16');

    cy.get('[href="/settings"]').click();

    cy.url().should('include', '/login');

    cy.get('[data-testid=snackclose]').should('not.exist');

    cy.get('[data-testid=username]').type('lukasz.kalemba1@gmail.com');
    cy.get('[data-testid=password]').type('zaq1@WSX');
    cy.get('[data-testid=login]').click();

    cy.get('[data-testid=snackclose]').should('exist');
  });

  // run only this one
  it.only('Login should work fine', () => {
    // TODO: Set this as localStorage token for authentication
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlvc2RldiIsIl9pZCI6IjViNzM2N2JiYzdjNDU1MTA5ZTFmNzI4YyIsIm5hbWUiOiJpb3NkZXYiLCJpYXQiOjE2MjE3NTQ4NDIsImV4cCI6MTYyNDM0Njg0Mn0.UXVx8uTGF2c-NSZFdQbHsUJBUmpiM5VrgzDKx4Ch5r4';

    cy.visit('http://codedamn.com/');
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
