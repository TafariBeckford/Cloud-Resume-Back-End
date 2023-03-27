describe('API Test', () => {
  it('should return a 200 status code', () => {
    cy.request('GET', 'https://66w06ptmw5.execute-api.us-east-1.amazonaws.com')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('should return the expected response body equal to any number', () => {
    cy.request('GET', 'https://66w06ptmw5.execute-api.us-east-1.amazonaws.com')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(Number(response.body)).to.be.a('number')
      })
  })

  it('should return the expected CORS headers', () => {
    cy.request({
      method: 'GET',
      url: 'https://66w06ptmw5.execute-api.us-east-1.amazonaws.com',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.headers).to.have.property('access-control-allow-origin', '*')
      expect(response.headers).to.have.property('access-control-allow-methods', '*')
      expect(response.headers).to.have.property('access-control-allow-headers', '*')
    })
  })

})