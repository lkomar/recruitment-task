describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should open the page', () => {
    cy.get('h1').contains('From the blog')
  })

  it('should navigate to category page on badge click', () => {
    cy.get('[href="/category/3"]').click()

    cy.get('h1').contains('Posts for category "Books"')
  })
})

export {}
