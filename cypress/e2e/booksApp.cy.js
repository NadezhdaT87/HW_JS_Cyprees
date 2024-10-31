describe("authorization in the Books application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should successfulle login", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("should unsuccessfulle mail", () => {
    cy.login(" ", "test");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("should unsuccessfulle password", () => {
    cy.login("test@test.com", "{Enter}");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});

describe("add Books to application", () => {
  it.skip("should add book", () => {
    cy.authorization();
    cy.contains("Add new").click();
    cy.get("#title").type("1984");
    cy.get("#description").type("Эксклюзивная классика");
    cy.get("#authors").type("Джордж Оруэлл");
    cy.contains("Submit").click();
    cy.contains("1984").should("be.visible");
  });

  it("should add book to favorites", () => {
    cy.authorization();
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)"
    ).click();
    cy.contains("Favorites").click();
    cy.contains("1984").should("be.visible");
  });

  it("should delete book to favorites", () => {
    cy.authorization();
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)"
    ).click();
    cy.contains("Favorites").click();
    cy.get("button[class='btn btn-secondary']").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});
