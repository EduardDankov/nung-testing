describe('WebLoader', () => {
    const GOOGLE_URL = 'https://www.google.com/';
    const SEARCH_BAR = 'textarea[name="q"]';
    const SEARCH_BUTTON = 'input[name="btnK"]';
    const DOODLE_BUTTON = 'input[name="btnI"]';
    const IMAGES_LINK = 'a[data-pid="2"]';
    const GMAIL_LINK = 'a[data-pid="23"]';

    beforeEach(() => {
        cy.visit(GOOGLE_URL);
    });

    it('should contain search bar', () => {
        cy.get(SEARCH_BAR).should('exist');
    });

    it('should contain search button', () => {
        cy.get(SEARCH_BUTTON).should('exist');
    });

    it('should contain doodle button', () => {
        cy.get(DOODLE_BUTTON).should('exist');
    });

    it('should contain images link', () => {
        cy.get(IMAGES_LINK).should('exist');
    });

    it('should contain gmail link', () => {
        cy.get(GMAIL_LINK).should('exist');
    });
});
