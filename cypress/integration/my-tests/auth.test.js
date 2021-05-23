/// <reference types="cypress" />

describe('Authenticated Tests', () => {
  before(() => {
    cy.then(() => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlvc2RldiIsIl9pZCI6IjViNzM2N2JiYzdjNDU1MTA5ZTFmNzI4YyIsIm5hbWUiOiJpb3NkZXYiLCJpYXQiOjE2MjE3NTQ4NDIsImV4cCI6MTYyNDM0Njg0Mn0.UXVx8uTGF2c-NSZFdQbHsUJBUmpiM5VrgzDKx4Ch5r4';

      window.localStorage.setItem('__auth__token', token);
    });
  });

  it('Should pass', () => {
    cy.visit('http://codedamn.com/dashboard');
  });
});
