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





  it('Boyut seçimi yapılabilmeli', () => {
    cy.get('.yeniBoyut div').contains('L').click();
    cy.get('.yeniBoyut div.secili').should('contain', 'L');
  });


  
  

  it('Kullanıcı 10dan fazla malzeme seçememeli', () => {
    const malzemeler = ['Pepperoni', 'Mısır', 'Sucuk', 'Biber', 'Sosis', 'Soğan', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Kaşar Peyniri', 'Ananas'];
    
    malzemeler.forEach((malzeme, index) => {
      if (index < 10) {
        cy.get(`input[value="${malzeme}"]`).check().should('be.checked');
      } else {
        cy.get(`input[value="${malzeme}"]`).should('be.disabled');
      }
    });
  



  it('Sipariş adeti artırılıp azaltılabilmeli', () => {
    cy.get('.arttirbtn').contains('+').click();
    cy.get('.arttirtxt').should('have.value', '2');
    cy.get('.arttirbtn').contains('-').click();
    cy.get('.arttirtxt').should('have.value', '1');
  });



  it('Eksik seçimlerle buton devre dışı olmalı', () => {
    cy.get('.siparisVer').should('be.disabled');
  });


  it('Hamur seçilmezse hata mesajı görünmeli', () => {
    cy.get('.siparisVer').should('be.disabled');
    cy.get('.form-feedback').should('be.visible').and('contain', 'Hamur seçmelisiniz!'); });
  });



  


    it('Sipariş toplamı doğru hesaplanıyor mu?', () => {
      // Boyut ve hamur seçimi yap
      cy.get('.yeniBoyut div').contains('M').click();
      cy.get('select[name="boyut"]').select('İnce Hamur');
  
      // Malzeme seçimi yap
      const malzemeler = ['Pepperoni', 'Mısır', 'Sucuk'];
      malzemeler.forEach((malzeme) => {
        cy.get(`input[value="${malzeme}"]`).check();
      });
  
      // Adeti artır
      cy.get('.arttirbtn').contains('+').click();
  
      // Beklenen toplamı hesapla
      const malzemeFiyati = malzemeler.length * 5;
      const adet = 2; // Adeti 2 yaptık
      const pizzaFiyati = 85.5;
      const beklenenToplam = (malzemeFiyati + pizzaFiyati) * adet;
  
      // Toplamın doğru hesaplandığını kontrol et
      cy.get('.right').contains(`${beklenenToplam.toFixed(2)}₺`);
    });
  



    it('Malzeme seçimi olmadan sipariş toplamı doğru hesaplanıyor mu?', () => {
      // Boyut ve hamur seçimi yap
      cy.get('.yeniBoyut div').contains('M').click();
      cy.get('select[name="boyut"]').select('İnce Hamur');
  
      // Adeti artır
      cy.get('.arttirbtn').contains('+').click();
  
      // Beklenen toplamı hesapla
      const adet = 2; // Adeti 2 yaptım
      const pizzaFiyati = 85.5;
      const beklenenToplam = pizzaFiyati * adet;
  
      // Toplamın doğru hesaplandığını kontrol et
      cy.get('.right').contains(`${beklenenToplam.toFixed(2)}₺`);
    });
  




    it('Adet değiştirildiğinde sipariş toplamı doğru hesaplanıyor mu?', () => {
      // Boyut ve hamur seçimi yap
      cy.get('.yeniBoyut div').contains('M').click();
      cy.get('select[name="boyut"]').select('İnce Hamur');
  
      // Malzeme seçimi yap
      const malzemeler = ['Pepperoni', 'Mısır'];
      malzemeler.forEach((malzeme) => {
        cy.get(`input[value="${malzeme}"]`).check();
      });
  
      // Adeti artır ve azalt
      cy.get('.arttirbtn').contains('+').click();
      cy.get('.arttirbtn').contains('-').click();
  
      // Beklenen toplamı hesapla
      const malzemeFiyati = malzemeler.length * 5;
      const adet = 1; // Adeti 1 yaptık
      const pizzaFiyati = 85.5;
      const beklenenToplam = (malzemeFiyati + pizzaFiyati) * adet;
  
      // Toplamın doğru hesaplandığını kontrol et
      cy.get('.right').contains(`${beklenenToplam.toFixed(2)}₺`);
    });


    it('Boyut seçimi hata mesajı kaybolma', () => {
      cy.contains('Boyut seçmelisiniz!').should('be.visible');
      cy.get('.yeniBoyut div').contains('M').click();
      cy.contains('Boyut seçmelisiniz!').should('not.exist');
  });


  it('Hamur seçimi hata mesajı kaybolma', () => {
    // Hata mesajının başlangıçta göründüğünü kontrol et
    cy.contains('Hamur seçmelisiniz!').should('be.visible');
    // Hamur seçimi yap
    cy.get('select[name="boyut"]').select('İnce Hamur');
    // Hata mesajının kaybolduğunu kontrol et
    cy.contains('Hamur seçmelisiniz!').should('not.exist');
});

it('Malzeme seçimi hata mesajı kaybolma', () => {
    // Hata mesajının başlangıçta göründüğünü kontrol et
    cy.contains('En az 4 malzeme seçmelisiniz!').should('be.visible');
    // Yeterli sayıda malzeme seçimi yap
    const malzemeler = ['Pepperoni', 'Mısır', 'Sucuk', 'Biber'];
    malzemeler.forEach((malzeme) => {
        cy.get(`input[value="${malzeme}"]`).check();
    });
    // Hata mesajının kaybolduğunu kontrol et
    cy.contains('En az 4 malzeme seçmelisiniz!').should('not.exist');
  });




  it('Minimum sipariş adedi', () => {
    cy.get('.arttirtxt').should('have.value', '1');
    cy.get('.arttirbtn').contains('-').click();
    cy.get('.arttirtxt').should('have.value', '1');
  });



  it('Sipariş notu girişi', () => {
    const not = 'Ekstra peynir ekleyin.';
    cy.get('input[name="özel"]').type(not);
    cy.get('input[name="özel"]').should('have.value', not);
  });


  it('Sipariş notu temizleme', () => {
    cy.get('input[name="özel"]').type('Ekstra peynir ekleyin.');
    cy.get('input[name="özel"]').clear();
    cy.get('input[name="özel"]').should('have.value', '');
  });



  });




















