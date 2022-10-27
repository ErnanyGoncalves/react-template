describe('App', () => {
    it('increments the counter', () => {
      cy.visit('http://127.0.0.1:5173/')

      const btn = cy.findByRole('button', { name: /count is/i })
      btn.click()
      btn.click()
      btn.click()
      btn.click()
      btn.click()
      btn.should(
        'contain',
        'count is 5'
      )
    })
  })