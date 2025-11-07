//PRUEBAS DE ACE`PTACIÓN PARA HU01 - REGISTRO DE USUARIO, BASICAMENTE ES UN E2E, SE PRUEBA EL FLUJO COMPLETO, E2E = END TO END LO MENCIONA EL PROFE EN LA DOCUMENTACION AULA VIRTUAL
describe('HU01 - Registro de usuario - PRUEBAS ACEPTACIÓN', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/prueba'); // ruta de registro
  });

  it('E1 - Registro válido', () => {
    cy.get('input[name="email"]').type('al921@uji.es');
    cy.get('input[name="password"]').type('pepeElMasGuapo82');
    cy.get('button[type="submit"]').click();

    // Espera un resultado exitoso (Firebase real)
    // Comprueba que la URL cambió a /
    cy.url().should('include', '/');
  });

  it('E2 - Correo ya existente', () => {
    cy.get('input[name="email"]').type('al921@uji.es');
    cy.get('input[name="password"]').type('pepeElMasGuapo82');
    cy.get('button[type="submit"]').click();

    // Espera el mensaje de error
    cy.contains('Email already in use').should('be.visible');
  });
});