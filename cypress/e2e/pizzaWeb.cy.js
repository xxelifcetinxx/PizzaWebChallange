describe('Sipariş Oluştur Sayfası', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/siparis-olustur');
    cy.wait(1000); // Sayfanın yüklenmesini bekle
  });

  it('Input alanına metin girme testi', () => {
    cy.get('input[name="özel"]', { timeout: 6000 }).should('be.visible').type('Ekstra peynir ekleyin.');
    cy.get('input[name="özel"]').should('have.value', 'Ekstra peynir ekleyin.');
  });

  it('Birden fazla malzeme seçilebilmeli', () => {
    const malzemeler = ['Pepperoni', 'Mısır', 'Sucuk', 'Biber'];

    cy.get('.malzemeList').should('be.visible');

    malzemeler.forEach((malzeme) => {
      cy.get(`input[value="${malzeme}"]`, { timeout: 6000 }).should('exist').check().should('be.checked');
    });
  });

  it('Formu başarıyla gönderebilmeli', () => {
    cy.get('.yeniBoyut', { timeout: 6000 }).should('be.visible');
    cy.get('.yeniBoyut div').contains('M').click();
    
    cy.get('select[name="boyut"]', { timeout: 6000 }).should('be.visible').select('İnce Hamur');

    const malzemeler = ['Pepperoni', 'Mısır', 'Sucuk', 'Biber'];
    malzemeler.forEach((malzeme) => {
      cy.get(`input[value="${malzeme}"]`, { timeout: 6000 }).should('exist').check();
    });

    cy.get('button.siparisVer').should('not.be.disabled').click();

    cy.url().should('include', '/siparis-basarili');
  });
});
