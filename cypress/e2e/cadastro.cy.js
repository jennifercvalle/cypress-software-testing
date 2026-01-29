it('Permitir o cadastro no sistema', () => {
    cy.visit('https://practicesoftwaretesting.com/auth/register')
        cy.get('input[data-test="first-name"]').type('Primeiro Nome')
        cy.get('input[data-test="last-name"]').type('Ultimo Nome')
        cy.get('input[id="dob"]').type('2000-10-10')
        cy.get('input[id="street"]').type('rua olinda beto')
        cy.get('input[id="postal_code"]').type('821000-280')
        cy.get('input[id="city"]').type('Curitiba')
        cy.get('input[id="state"]').type('Paraná')
        cy.get('select[data-test="country"]').select('BR')
        cy.get('input[id="phone"]').type('123456789')
        cy.get('input[id="email"]').type('teste@gmail.com')
        cy.get('input[id="password"]').type('testandO123@')
        cy.get('button[type="submit"]').click()
        cy.url().should('include','/login')


})
