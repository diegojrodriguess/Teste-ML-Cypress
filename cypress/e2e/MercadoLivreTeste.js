/// <reference = cypress>

describe("Testes da criacao, registro e login",()=>{
  it("Teste de criacao de usuario com sucesso",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Diego")
    cy.get('#Text1').type("Diego")
    cy.get('#username').type("Diego")
    cy.get('#password').type("Diego")
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should("contain.text","Registration successful")
  })




  it("Teste de criacao de usuario com falha",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Diego")
    cy.get('#Text1').type("Diego")
    cy.get('#username').type("Diego")
    cy.get('.btn-primary').should("be.disabled")

  })


  it("Teste de login de usuario com sucesso",()=>{

    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text",infos[0])

  })


  it("Teste de login de usuario com falha, apos o user ser deletado",()=>{

    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()

    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()

    cy.get('.ng-binding').should("contain.text","Username or password is incorrect")
  })
})

it ("Delete do user com sucesso",()=>{
  let infos = criarUser()
  cy.login(infos[0],infos[1])

  cy.get('.ng-binding > a').click()
  cy.get('.btn').click()

  cy.login(infos[0],infos[1])

  cy.get('.ng-binding').should("contain.text","Username or password is incorrect")

})


function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()



  let Id = hora + minuto + seg + "ID"
  let Senha = hora + minuto + seg + "SENHA"

  let infos = [Id, Senha]


  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(Id)
  cy.get('#Text1').type(Id)
  cy.get('#username').type(Id)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()

  cy.get('.ng-binding').should("contain.text","Registration successful")
  return infos
}