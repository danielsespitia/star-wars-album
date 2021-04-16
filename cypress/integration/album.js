describe('renders home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders correctly', () => {
    cy.get('.album-container');
  });
  it('clicks the collapse button', () => {
    cy.get('.name-button').click({ multiple: true });
  });
  it('renders section name', () => {
    cy.findByText('Películas' && 'Personajes' && 'Naves').should('exist');
  });
  it('clicks the get button', () => {
    cy.get('.name-button').click({ multiple: true });
    cy.get('.get-button').click({ multiple: true });
  });
  it('renders films names', () => {
    cy.get('.name-button').click({ multiple: true });
    cy.get('.get-button').click({ multiple: true });
    cy.get('#films-render').should('contain', 'A New Hope');
  });
  it('renders people names', () => {
    cy.get('.name-button').click({ multiple: true });
    cy.get('.get-button').click({ multiple: true });
    cy.get('#people-render').should('contain', 'Luke Skywalker');
  });
  it('renders starships names', () => {
    cy.get('.name-button').click({ multiple: true });
    cy.get('.get-button').click({ multiple: true });
    cy.get('#starship-render').should('contain', 'CR90 corvette');
  });
});
