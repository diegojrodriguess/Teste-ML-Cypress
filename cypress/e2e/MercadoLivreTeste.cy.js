/// <reference = cypress>

describe("Testes de UI no site do Mercado Livre",()=>{
  it("Teste de visita ao site com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
  })


  it("Teste de direcionamento a pagina de criacao de user com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('[href="https://www.mercadolivre.com.br/registration?confirmation_url=https%3A%2F%2Fwww.mercadolivre.com.br%2F#nav-header"]').click()
    cy.get('.hub-card__title').should("contain.text","Complete os dados para criar sua conta")
  })

  it("Teste de ida a aba de ofertas para pneus com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('.andes-carousel-snapped__slide--next > .ui-card > .collections-slide_title-wrapper > a').click()
    cy.get('.ui-search-breadcrumb__title').should("contain.text","Oferta em Pneus")
  })


  it("Teste de direcionamento para a pagina de celulares com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('#cb1-edit').type("celular")
    cy.get('.nav-search-btn').click()
    cy.get('.ui-search-breadcrumb__title').should("contain.text","Celular")
  })


  it("Teste de busca para um produto com nome inexistente, com falha",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('#cb1-edit').type("jdasjddlaskjdlaskjkadjkasd")
    cy.get('.nav-search-btn').click()
    cy.get('.ui-search-rescue__title').should("contain.text","Não há anúncios que correspondam à sua busca")
  })

  it("Teste de direcionamento a uma pagina vazia de historico com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get(':nth-child(3) > .nav-menu-item-link').click()
    cy.get('.ui-empty-list__Typography').should("contain.text","Você ainda não viu anúncios.")
  })

  it("Teste de ida a aba de cuidado pessoal a partir da aba de supermercado, com sucesso",()=>{
    cy.visit('https://www.mercadolivre.com.br/')
    cy.get('.nav-menu-list > :nth-child(4)').click()
    cy.get('[aria-label="3 de 8"] > .carousel__item > .splinter-link > :nth-child(1) > .carousel__item__2 > .carousel__item-img > img').click()
    cy.get('.ui-search-breadcrumb__title').should("contain.text","Beleza e Cuidado Pessoal")
  })

})


