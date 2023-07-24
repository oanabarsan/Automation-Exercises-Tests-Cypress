/// <reference types = "cypress" />

import HomeCategoryLinksPage from "../pages/HomeCategoryLinksPage";

describe("Navigation to Women categories in home page test suite", () => {
  beforeEach(() => {
    HomeCategoryLinksPage.getMenCategoryLink().click();
  });
  it("Navigate to TShirts category test", () => {
    HomeCategoryLinksPage.getTShirtsCategory().click();
    cy.get("div.features_items h2.title.text-center")
      .scrollIntoView()
      .within(() => {
        cy.window().then((win) => {
          cy.contains("Men - Tshirts Products").then(($el) => {
            const before = win.getComputedStyle($el[0], "::before");
            const beforeContent = before.getPropertyValue("content");
            expect(beforeContent).to.equal('" "');
          });
        });
      });
  });

});
