describe('User functionality', function() {
  beforeEach(() => {
    cy.app('clean')
  })

  it('allows to create a new account', function() {
    cy.visit('/')

    cy.get('a').contains('sign up').click()
    cy.get("#user_email").type("user@mail.com");
    cy.get("#user_password").type("123456");
    cy.get("#user_password_confirmation").type("123456");
    cy.get('form').submit()

    cy.contains("sign out")
  })

  it('cleaner works?', function() {
    cy.visit('/')

    cy.get('a').contains('sign up').click()
    cy.get("#user_email").type("user@mail.com");
    cy.get("#user_password").type("123456");
    cy.get("#user_password_confirmation").type("123456");
    cy.get('form').submit()

    cy.contains("sign out")
  })

  it('allows using existing account to sign in', function() {
    cy.appFactories([
      [
        'create',
        'user',
        {
          email: 'user@mail.com',
          password: '123123'
        }
      ]
    ])

    cy.visit('/')

    cy.get('a').contains('sign in').click()
    cy.get("#user_email").type("user@mail.com");
    cy.get("#user_password").type("123123");
    cy.get('form').submit()

    cy.contains("sign out")
  })
})
