/// <reference types="cypress" />

describe('Authenticated Tests', () => {
  before(() => {
    cy.then(() => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlvc2RldiIsIl9pZCI6IjViNzM2N2JiYzdjNDU1MTA5ZTFmNzI4YyIsIm5hbWUiOiJpb3NkZXYiLCJpYXQiOjE2MjE3NTQ4NDIsImV4cCI6MTYyNDM0Njg0Mn0.UXVx8uTGF2c-NSZFdQbHsUJBUmpiM5VrgzDKx4Ch5r4';

      window.localStorage.setItem('__auth__token', token);
    });
  });

  it.only('Should load playground correctly', () => {
    cy.visit('http://codedamn.com/playground/html');

    cy.log('Checking for sidebar');
    cy.contains('Trying to connect').should('exist');

    cy.log('Checking bottom left button');
    cy.get('[data-testid=xterm-controls] > div').should(
      'contain.text',
      'Connecting'
    );

    cy.contains('Trying to establish connection');

    cy.log('Playground is initializing');
    cy.contains('Trying to establish connection', {
      timeout: 10 * 1000,
    }).should('not.exist');
  });

  // //! run only this one
  // it.only('Should pass', () => {
  //   cy.visit('http://codedamn.com/dashboard');

  //   cy.get('div');

  //   //! waits for resumption
  //   // cy.pause();

  //   //! debugger
  //   // cy.debug();
  // });
});
