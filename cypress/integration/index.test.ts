beforeEach(() => {
  cy.visit("/");
});

describe("Navigation", () => {
  it("open page", () => {
    cy.get(
      ".desktop-navigation-bar-hamburger-menu-container",
    ).click();
    cy.wait(1000);
    cy.get(
      ".desktop-navigation-bar-sidebar-container-background",
    ).click();
  });
});

describe("ContactForm", () => {
  it("scroll", () => {
    cy.get(
      ".css-xbw9dc-FlexContainer > #heading4",
    ).scrollIntoView();

    cy.get(
      '[data-testid="index-contact-form-email-input"]',
    ).type("maxine@musterfrau.de");

    cy.get(
      '[data-testid="index-contact-form-name-input"]',
    ).type("Maxine Musterfrau");

    cy.get(
      '[data-testid="index-contact-form-title-input"]',
    ).type("Anfrage");

    cy.get(
      '[data-testid="index-contact-form-message-textarea"]',
    ).type(
      "Sehr geehrter Herr Will,\nich möchte ihnen auf diesem Wege eine nette Testnachricht schreiben.\nWas mich dazu bewegt hat, keine Ahnung.\nAber vielleicht freuen Sie sich ja trotzdem.",
    );
    cy.get(
      "[data-testid=index-contact-form-submit-button]",
    ).click();
  });
});
