describe('Login - testes básicos', () => {
    it('Login com credenciais incorretas', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').type('testejusssara@gmail.com')
        cy.get('input[id=password]').type('-123456789')
        cy.get('input[type="submit"]').click()

        cy.url().should('include', '/login')
        cy.contains('Invalid email or password').should('be.visible')
    })

    it.only('Login com email formato invalido', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').type('testejusssara.com')
        cy.get('input[id=password]').type('-123456789')
        cy.get('input[type="submit"]').click()

        cy.url().should('include', '/login')
        cy.contains('Email format is invalid').should('be.visible')
    })

    it('Login password nao preenchido', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').type('testejusssara.com')
        cy.get('input[type="submit"]').click()

        cy.url().should('include', '/login')
        cy.contains('Password is required').should('be.visible')
    })

    it('Login valido', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').type('customer@practicesoftwaretesting.com')
        cy.get('input[id=password]').type('welcome01')
        cy.get('input[type="submit"]').click()

        cy.url().should('include', '/account')
    })
    it('Campo senha visivel/oculta', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')

        cy.get('svg[data-icon="eye"]').click()
        cy.get('input[id=password]').should('have.attr', 'type', 'text')

        cy.get('svg[data-icon="eye-slash"]').click()
        cy.get('input[id=password]').should('have.attr', 'type', 'password')

    })
    it('Deve permitir logout no sistema', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').type('customer@practicesoftwaretesting.com')
        cy.get('input[id=password]').type('welcome01')
        cy.get('input[type="submit"]').click()
        cy.get('a[id="menu"]').click()

        cy.get('[data-test="nav-sign-out"]').click()
        cy.url().should('include', '/login')

    })
    it('Login com campos vazios', () => {
        cy.visit('https://practicesoftwaretesting.com/auth/login')
        cy.get('input[id=email]').clear()
        cy.get('input[id=password').clear()
        cy.get('input[type="submit"]').click()

        cy.contains('Email is required').should('be.visible')
        cy.contains('Password is required').should('be.visible')
    })


})
