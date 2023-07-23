/// <reference types = "cypress" />

import TopCarouselHomePage from "../pages/TopCarouselHomePage";

describe("Carousel arrows functionality test suite", () => {
  it("Prev arrow carousel test", () => {
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl3.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl2.jpg"]').should("exist");
  });

  it("Next arrow carousel test", () => {
    TopCarouselHomePage.getNextArrow().click();
    cy.get('img[src="/static/images/home/girl3.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl1.jpg"]').should("exist");
    TopCarouselHomePage.getPrevArrow().click();
    cy.get('img[src="/static/images/home/girl2.jpg"]').should("exist");
  });
});
