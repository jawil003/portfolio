beforeEach(() => {
  cy.visit("/");
});

describe("Navigation", () => {
  it("Open navbar", () => {
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
  it("Fill contact form valid", () => {
    cy.get(
      ".css-xbw9dc-FlexContainer > #heading4",
    ).scrollIntoView();

    cy.get(
      '[data-testid="index-contact-form-email-input"]',
    )
      .type("maxine@musterfrau.de")
      .should(
        "have.value",
        "maxine@musterfrau.de",
      );

    cy.get(
      '[data-testid="index-contact-form-name-input"]',
    )
      .type("Maxine Musterfrau")
      .should(
        "have.value",
        "Maxine Musterfrau",
      );

    cy.get(
      '[data-testid="index-contact-form-title-input"]',
    )
      .type("Anfrage")
      .should("have.value", "Anfrage");

    cy.get(
      '[data-testid="index-contact-form-message-textarea"]',
    )
      .type("Sehr geehrter Herr Will")
      .should(
        "have.value",
        "Sehr geehrter Herr Will",
      );

    cy.get(
      "[data-testid=index-contact-form-submit-button]",
    ).click();
  });
  it("Check contact form validation", () => {
    cy.get(
      ".css-xbw9dc-FlexContainer > #heading4",
    ).scrollIntoView();

    cy.get(
      '[data-testid="index-contact-form-email-input"]',
    )
      .click()
      .type("abc");

    cy.get(
      '[data-testid="index-contact-form-name-input"]',
    ).click();

    cy.get(
      '[data-testid="index-contact-form-title-input"]',
    ).click();

    cy.get(
      '[data-testid="index-contact-form-message-textarea"]',
    ).click();
  });
});
