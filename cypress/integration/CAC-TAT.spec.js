///<reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(function () {
    cy.visit("../../src/index.html");
  });

  it("Verifica o título da aplicação.", () => {
    // validando titulo
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it.only("Preenche os campos obrigatórios e envia o formulário.", () => {
    cy.get("#firstName").type("Marcos");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("marcos@gmail.com");
    cy.get("#phone").type("(79) 998446876");
    cy.get("#open-text-area").type("estou validando um teste.");
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });
});
