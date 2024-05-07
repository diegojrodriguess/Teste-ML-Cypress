# Teste de UI no site do Mercado Livre

Nesse repositório, está armazenado testes de UI no site do Mercado Livre via Cypress, com um relatório gerado.  
Para rodar o código, faça os seguintes passos:

• baixe o repositório em sua máquina  
• via terminal, digite `npx cypress open` para iniciar o Cypress  
• escolha a opção "E2E Testing"  
• escolha seu navegador de preferência para rodar a aplicação  
• clique na spec `aplicaçãoMercadoLivreTeste.cy.js` e veja os testes serem realizados.

Para gerar o relatório (o mesmo já se encontra na pasta reports, dentro de cypress), digite `./node_modules/.bin/cypress run --spec 'cypress/e2e/**/`.
