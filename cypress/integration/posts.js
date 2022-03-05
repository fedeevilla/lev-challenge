import postsList from "../fixtures/posts.json";

describe("Posts List", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.reddit.com/r/sports/top.json?limit=50",
      postsList
    ).as("posts");
    cy.visit("/");
  });

  it("Should load Posts", () => {
    cy.wait("@posts").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get("[data-test='post-card-item']").should("have.length", 10);
    cy.get("[data-test='select-post-item']").should("exist");
  });

  it("Should load more posts", () => {
    cy.wait("@posts").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get("[data-test='post-card-item']").should("have.length", 10);
    cy.get(".primary-button").click();
    cy.get("[data-test='post-card-item']").should("have.length", 20);
  });

  it("Should dismiss all posts", () => {
    cy.wait("@posts").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get("[data-test='post-card-item']").should("have.length", 10);
    cy.get(".danger-button").click();
    cy.get("[data-test='post-card-item']").should("have.length", 0);
    cy.get("[data-test='no-results-label']").should("exist");
  });

  it("Should dismiss one post", () => {
    cy.wait("@posts").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get("[data-test='post-card-item']").should("have.length", 10);
    cy.get(
      ':nth-child(2) > [data-test="post-card-item"] > .post-card-header > .clear-button'
    ).click();
    cy.get("[data-test='post-card-item']").should("have.length", 10);
  });

  it("Should select one post and show details", () => {
    cy.wait("@posts").then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
    });

    cy.get("[data-test='post-card-item']").should("have.length", 10);
    cy.get(
      ':nth-child(1) > [data-test="post-card-item"] > .post-card-footer > .success-button'
    ).click();
    cy.get("[data-test='select-post-item']").should("not.exist");
    cy.get("[data-test='title-post']").contains(
      postsList.data.children[0].data.title
    );
  });
});
