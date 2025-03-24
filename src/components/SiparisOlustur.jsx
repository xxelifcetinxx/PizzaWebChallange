import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  CardBody,
  CardText,
  CardTitle,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";
import "./SiparisOlustur.css";

const initialForm = {
  isim: "",
  boyut: "",
  malzemeler: [],
  özel: "",
  fiyat: 85.5,
  adet: 1,
};

const errorMessages = {
  isim: "Boyut seçmelisiniz.",
  boyut: "Hamur seçmelisiniz.",
  malzemeler: "En az 4 malzeme seçmelisiniz.",
};

export default function SiparisOlustur({ setVerilenSiparis }) {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({ isim: true, boyut: true, malzemeler: true });
  const history = useHistory();

  const isMaxDisabled = form.malzemeler.length >= 10;

  useEffect(() => {
    setIsValid(!errors.isim && !errors.boyut && !errors.malzemeler);
  }, [errors]);




  const handleChange = (event) => {
  let { name, value, type, checked } = event.target;

  if (type === "checkbox" && name === "malzemeler") {
    setForm((prevForm) => {
      let updatedMalzemeler;

      if (checked) {
        if (prevForm.malzemeler.length < 10) {
          updatedMalzemeler = [...prevForm.malzemeler, value];
        } else {
          return prevForm;
        }
      } else {
        updatedMalzemeler = prevForm.malzemeler.filter((item) => item !== value);
      }

      return { ...prevForm, malzemeler: updatedMalzemeler };
    });


    setErrors((prevErrors) => ({
      ...prevErrors,
      malzemeler: form.malzemeler.length < 3,
    }));
  } else {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    if (name === "boyut") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: ["İncecik Hamur", "İnce Hamur", "Klasik Hamur"].includes(value) ? false : true,
      }));
    }
  }
 };


  const handleIncrement = () => {
    setForm((prevForm) => ({ ...prevForm, adet: prevForm.adet + 1 }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .get("https://reqres.in/api/pizza")
      .then(() => {
        setForm(initialForm);
        history.push("/siparis-basarili");
        setVerilenSiparis(form);
      })
      .catch(() => {
        history.push("/error");
      });
  };

  const handleSize = (size) => {
    setForm((prevForm) => ({ ...prevForm, isim: size }));
    setErrors((prevErrors) => ({ ...prevErrors, isim: false }));
  };




  return (
    <>
      {/* HEADER */}
      <header className="header">
        <section>
          <Link to="/">
            <img src="./images/Iteration-1-images/logo.svg" alt="logo" />
          </Link>
        </section>
      </header>
  
      {/* BANNER */}
      <section className="banner">
        <div>
          <img
            src="./images/Iteration-2-images/pictures/form-banner.png"
            alt="form-banner"
          />
        </div>

        <div className="yazi">
          <Link to="/">Anasayfa</Link> -{" "}
          <Link to="/siparis-olustur" style={{ color: "#CE2829" }}>
            Sipariş Oluştur
          </Link>
          <CardBody>
            <CardTitle tag="h2">
              <section className="baslik">Position Absolute Acı Pizza</section>
            </CardTitle>
            <CardText className="fy">
              <section className="fiyat">{form.fiyat.toFixed(2)}₺</section>
              <section className="yorumdegerlendirme">
                <p>4.9</p>
                <p>(200)</p>
              </section>
            </CardText>
          </CardBody>
          <div className="girisYazi">
          <p>
            Frontend Dev olarak hala position: absolute kullanıyorsan, bu çok acı
            pizza tam sana göre! Pizza, domates, peynir ve çeşitli malzemelerle
            kaplanmış, geleneksel olarak odun ateşinde yüksek sıcaklıkta
            pişirilen, yuvarlak, düzleştirilmiş mayalı hamurdan oluşur. Küçük bir
            pizzaya bazen pizzetta denir.
          </p>
          </div>
        </div>

      </section>
  

  
      {/* FORM */}
      <section className="form">
        <Form onSubmit={handleSubmit}>
          {/* BOYUT & HAMUR SEÇİMİ */}
          <FormGroup className="boyutHamur">
            <FormGroup className="yeni" tag="fieldset">
              <legend>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </legend>
              <div className="yeniBoyut">
                {["S", "M", "L"].map((size) => (
                  <div
                    key={size}
                    className={form.isim === size ? "boyutSecim secili" : "boyutSecim"}
                    onClick={() => handleSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
              {errors.isim && (
                <FormFeedback tooltip>{errorMessages.isim}</FormFeedback>
              )}
            </FormGroup>
  
            <FormGroup className="yeni">
              <Label htmlFor="exampleSelect">
                <legend>
                  Hamur Seç <span style={{ color: "red" }}>*</span>
                </legend>
              </Label>
              <Input
                id="exampleSelect"
                name="boyut"
                type="select"
                style={{ background: "#FAF7F2" }}
                onChange={handleChange}
                invalid={errors.boyut}
              >
                <option>--Hamur Kalınlığı--</option>
                <option>İncecik Hamur</option>
                <option>İnce Hamur</option>
                <option>Klasik Hamur</option>
              </Input>
              {errors.boyut && <FormFeedback tooltip>{errorMessages.boyut}</FormFeedback>}
            </FormGroup>
          </FormGroup>
  
          {/* EK MALZEMELER */}
          <legend>Ek Malzemeler <span style={{ color: "red" }}>*</span></legend>
          <legend className="malzemeSec">
            En Fazla 10 Malzeme Seçebilirsiniz. (5₺)
          </legend>

      
          <FormGroup className="malzemeList">
            {[
              ["Pepperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas"],
              ["Sosis", "Soğan", "Sucuk", "Biber", "Kabak"],
              ["Kanada Jambonu", "Domates", "Jalepeno", "Kaşar Peyniri"],
            ].map((group, index) => (
              <FormGroup className="ekMalzemeler" key={index}>
                {group.map((item) => (
                  <FormGroup check inline className="malzemeBosluk" key={item}>
                    <Input
                      type="checkbox"
                      name="malzemeler"
                      id={item}
                      value={item}
                      onChange={handleChange}
                      disabled={isMaxDisabled && !form.malzemeler.includes(item)}
                      invalid={errors.malzemeler}
                    />
                    <Label htmlFor={item} check>
                      {item}
                    </Label>
                  </FormGroup>
                ))}
              </FormGroup>
            ))}
          </FormGroup>
          {errors.malzemeler && (
            <FormFeedback tooltip>{errorMessages.malzemeler}</FormFeedback>
          )}
  



          {/* SİPARİŞ NOTU */}
          <FormGroup className="textAlani">
            <Label htmlFor="özel" style={{ fontWeight: "bold" }}>
              Sipariş Notu
            </Label>
            <Input
              id="özel"
              name="özel"
              type="text"
              placeholder="Siparişinize Eklemek İstediğiniz Not Var Mı?"
              className="not"
              onChange={handleChange}
            />
          </FormGroup>
  
          {/* SİPARİŞ DETAYLARI */}
          <div className="siparisGör">
            <FormGroup className="arttir">
              <Button
                color="warning"
                className="arttirbtn"
                onClick={() => setForm({ ...form, adet: Math.max(form.adet - 1, 1) })}
              >
                -
              </Button>
              <Input
                type="text"
                value={form.adet}
                readOnly
                className="arttirtxt"
              />
              <Button
                color="warning"
                className="arttirbtn"
                onClick={handleIncrement}
              >
                +
              </Button>
            </FormGroup>
  
            <div className="siparisDetay">
              <div className="siparis">Sipariş Toplamı</div>
              <div className="secimler">
                <div className="left">Seçimler</div>
                <div className="right">{form.malzemeler.length * 5 * form.adet}₺</div>
              </div>
              <div className="toplami">
                <div className="left">Toplam</div>
                <div className="right">
                  {((form.malzemeler.length * 5 + form.fiyat) * form.adet).toFixed(2)}₺
                </div>
              </div>
            </div>
          </div>
  
          {/* SİPARİŞ VER BUTONU */}
          <FormGroup className="btnSiparis">
            <Button color="warning" className="siparisVer" disabled={!isValid}>
              Sipariş Ver
            </Button>
          </FormGroup>
        </Form>
      </section>
    </>
  );
  
}




  