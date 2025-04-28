import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SiparisBasarili.css";

export default function SiparisBasarili({ verilenSiparis }) {
  const history = useHistory();

  useEffect(() => {
    if (!verilenSiparis) {
      // Eğer verilenSiparis boşsa hata toast mesajı göster ve hemen yönlendir
      toast.error(
        "Hata!! Sipariş bulunamadı, anasayfaya yönlendiriliyorsunuz",
        {
          position: "top-right",
          autoClose: 5000, // 5 saniye sonra otomatik kapanır
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: "white", color: "red" }, // Kırmızı arka plan ve beyaz yazı
        }
      );

      const myTimeout = setTimeout(() => {
        history.push("/"); // Hedef sayfa: Anasayfa
      }, 5000); // 5 saniye sonra yönlendirme

      return () => clearTimeout(myTimeout); // Cleanup function
    } else {
      // Eğer sipariş varsa, başarı mesajı göster ve 5 saniye sonra yönlendir
      toast.success(
        "Siparişiniz başarıyla alınmıştır!! Anasayfaya yönlendiriliyorsunuz. Teşekkür ederiz. ",
        {
          position: "top-right",
          autoClose: 5000, // 5 saniye sonra otomatik kapanır
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: "green", color: "white" }, // Yeşil arka plan ve beyaz yazı
        }
      );

      const myTimeout = setTimeout(() => {
        history.push("/"); // Hedef sayfa: Anasayfa
      }, 5000); // 5 saniye sonra yönlendirme

      return () => clearTimeout(myTimeout); // Cleanup function
    }
  }, [verilenSiparis, history]);

  return verilenSiparis ? (
    <div className="siparisBasarili">
      <section className="siparisBasariliHeader">
        <img src="/public/images/iteration-1-images/logo.svg" alt="Logo" />
      </section>
      <section className="SiparisBasariliTxt">
        <p>
          <p className="lezzet">lezzetin yolda</p> SIPARIS ALINDI!
        </p>
      </section>
      <section className="cizgi"></section>
      <div>
        <section className="siparisBasariliBaslik">
          Position Absolute Acı Pizza
        </section>
      </div>
      <div className="siparisBasariliDetay">
        <div className="siparisOzet">
          Boyut: <strong> {verilenSiparis.isim} </strong>
        </div>
        <div className="siparisOzet">
          Hamur: <strong>{verilenSiparis.boyut}</strong>
        </div>
        <div className="siparisOzet">
          Malzemeler: <strong>{verilenSiparis.malzemeler.join(", ")}</strong>
        </div>
      </div>
      <div className="siparisBasariliFiyat">
        <div className="siparis siparisRenk">Sipariş Toplamı</div>
        <div className="secimler siparisRenk">
          <div className="left siparisRenk">Seçimler</div>
          <div className="right siparisRenk">
            {verilenSiparis.malzemeler.length * 5 * verilenSiparis.adet}₺
          </div>
        </div>
        <div className="toplami siparisRenk">
          <div className="left siparisRenk">Toplam</div>
          <div className="right siparisRenk">
            {(
              verilenSiparis.malzemeler.length * 5 +
              verilenSiparis.fiyat
            ).toFixed(2) * verilenSiparis.adet}
            ₺
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <div className="siparisBasarili">
      <section className="siparisBasariliHeader">
        <img src="/public/images/Iteration-1-images/logo.svg" alt="Logo" />{" "}
      </section>
      <section className="SiparisBasariliTxt">
        <div>
          <img
            src="/public/images/iteration-2-images/pictures/food-1.png"
            alt="food-1"
            style={{ width: "100%", marginBottom: "50px" }}
          />
        </div>

        <div>
          <p>Sipariş Alınamadı.</p>
          <p>Tekrar Deneyiniz! </p>
        </div>

        <div>
          <img
            src="/public/images/iteration-2-images/pictures/food-2.png"
            alt="food-2"
            style={{ width: "100%", marginBottom: "80px" }}
          />
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
