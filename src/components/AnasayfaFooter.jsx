import { TwitterLogo } from "@phosphor-icons/react";
import "./AnasayfaFooter.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="solFooter">
          <div className="yaziFooter">Teknolojik Yemekler</div>
          <div className="solFooterYazi" style={{ width: "55%" }}>
          <img alt="icon-1" src="./images/iteration-2-images/footer/icons/icon-1.png"/>
            341 Londonderry Road, Istanbul Türkiye
          </div>
          <div className="solFooterYazi">
          <img alt="icon-2" src="./images/iteration-2-images/footer/icons/icon-2.png"/>
            aciktim@teknolojikyemekler.com
          </div>
          <div className="solFooterYazi">
          <img alt="icon-3" src="./images/iteration-2-images/footer/icons/icon-3.png"/>
            +90 216 123 45 67
          </div>
        </div>
        <div className="ortaFooter">
          <h3>Hot Menu</h3>
          <div>Terminal Pizza</div>
          <div>5 Kişilik Hackathlon Pizza</div>
          <div>useEffect Tavuklu Pizza</div>
          <div>Beyaz Console Frosty</div>
          <div>Testler Geçti Mutlu Burger</div>
          <div>Position Absolute Acı Burger</div>
        </div>
        <div className="sagFooter">
          <h3>Instagram</h3>
          <div>
            <img alt="li-0" src="./images/iteration-2-images/footer/insta/li-0.png"/>
            <img alt="li-1" src="./images/iteration-2-images/footer/insta/li-1.png"/>
            <img alt="li-2" src="./images/iteration-2-images/footer/insta/li-2.png"/>
            <img alt="li-3" src="./images/iteration-2-images/footer/insta/li-3.png"/>
            <img alt="li-4" src="./images/iteration-2-images/footer/insta/li-4.png"/>
            <img alt="li-5" src="./images/iteration-2-images/footer/insta/li-5.png"/>
          </div>
        </div>
      </div>
      <div className="infoGrup">
        <div className="info">
          <div>© 2025 Teknolojik Yemekler - @elifcetin </div>
          <div>
            <TwitterLogo size={25} weight="fill" />
          </div>
        </div>
      </div>
    </>
  );
}