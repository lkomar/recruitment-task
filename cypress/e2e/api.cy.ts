import { apiUrl } from '../../app/utils'
import blog from '../../public/blog.json'
import { paginationUtils } from '../../app/utils'

describe('GET /api/categories', () => {
  it('should return categories with status 200', () => {
    cy.request('get', `${apiUrl}/api/categories`).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.deep.equal(blog.categories)
    })
  })
})

describe('GET /api/posts', () => {
  it('should return paginated posts after providing a page', () => {
    cy.request('get', `${apiUrl}/api/posts?page=1`).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('pages')
      expect(response.body.posts).to.be.an('array')
      expect(response.body.posts).to.have.lengthOf(paginationUtils.limit)
    })
  })

  it('should return posts without providing a page', () => {
    cy.request('get', `${apiUrl}/api/posts`).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.posts).to.be.an('array')
      expect(response.body.posts).to.have.lengthOf(paginationUtils.limit)
    })
  })

  it('should return proper pages amount', () => {
    cy.request('get', `${apiUrl}/api/posts?page=2`)
      .its('body.pages')
      .should('equal', Math.ceil(blog.posts.length / paginationUtils.limit))
  })
})
