describe('Post functionality', function() {
  beforeEach(() => {
    cy.app('clean')
  })

  it('allows user to create a new post', function() {
    cy.appFactories([['create', 'user']])
    cy.forceLogin()

    cy.visit('/')

    cy.get('a').contains('posts').click()
    // cy.get('a').contains('New post').click() # random failing
    cy.get('a:contains("New post")').click();
    cy.get("#post_title").type("First post!");
    cy.get("#post_body").type("This is my first post");
    cy.get('form').submit()

    cy.contains("Post was successfully created.")

    cy.url().should('include', '/posts/')

    cy.get('a').contains('Back to posts').click()

    cy.url().should('eq', 'http://localhost:5017/posts')
  })

  it('allows user to see all posts', function() {
    cy.appFactories([['create', 'user']])
    cy.appScenario('basic_posts')
    cy.forceLogin()

    cy.visit('/posts')

    cy.get('#posts').within(() => {
      cy.get('div').first().within(() => {
        cy.contains("Post 1")
        cy.contains("body 1")

        cy.contains("Post 2").should('not.exist')
        cy.contains("body 2").should('not.exist')
      })

      cy.get('div').eq(1).within(() => {
        cy.contains("Post 2")
        cy.contains("body 2")

        cy.contains("Post 1").should('not.exist')
        cy.contains("body 1").should('not.exist')
      })
    })
  })
})
