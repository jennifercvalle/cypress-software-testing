# 🧪 Testes Automatizados com Cypress

Este repositório contém meus **primeiros testes automatizados utilizando Cypress**, desenvolvidos como parte do meu processo de aprendizado na área de **Qualidade de Software (QA)**.

Os testes foram realizados no site de demonstração:  
🔗 https://practicesoftwaretesting.com

##  Objetivo do Projeto

O objetivo deste projeto é praticar:
- Automação de testes end-to-end (E2E)
- Escrita de testes simples e claros
- Validação de cenários positivos e negativos
- Organização de testes por funcionalidade

##  Funcionalidades Testadas

###  Login
Foram automatizados cenários como:
- Login com dados válidos
- Tentativa de login com campos vazios
- Login com credenciais inválidas
- Validação de mensagens de erro

Arquivo: `cypress/e2e/login.cy.js`

### Cadastro
Foram automatizados cenários como:
- Cadastro com dados válidos
- Validação de campos obrigatórios
- Comportamento do sistema ao inserir dados inválidos

Arquivo: `cypress/e2e/cadastro.cy.js`

## Tecnologias Utilizadas

- **Cypress** — Framework de automação de testes
- **JavaScript**
- **Node.js**
- **VS Code**
