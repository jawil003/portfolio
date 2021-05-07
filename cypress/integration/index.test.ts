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
  });
});
