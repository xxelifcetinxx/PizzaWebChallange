import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import "./Anasayfa.css"

export default function Anasayfa() {
    return (
        <>

        
            <div className="hero-image">
            <img src="images/iteration-1-images/Home-banner.png" alt="banner" />
                <div className="hero-text">
                    <section>
                        <Link to="/">
                            <img src="images/iteration-1-images/logo.svg" alt="Logo" />
                        </Link>
                    </section>
                    <p className="firsat">fırsatı kaçırma</p>
                    <section className="anasayfaTxt">
                        <p>
                            KOD ACIKTIRIR Pizza, DOYURUR
                        </p>
                    </section>
                    <section>
                        <Link to="/siparis-olustur">
                            <Button color="warning" className="anasayfaBtn">
                                ACIKTIM
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>
            <div>

            

                <div className="gövdeNav">
                    <a href="#">
                        <img src="./images/iteration-2-images/icons/1.svg" alt="1.svg" />
                        YENİ! Kore
                    </a>
                    <a href="#">
                    <img src="./images/iteration-2-images/icons/2.svg" alt="2.svg" />
                        Pizza
                    </a>
                    <a href="#">
                        <img src="./images/iteration-2-images/icons/3.svg" alt="3.svg" />
                        Burger
                    </a>
                    <a href="#">
                        <img src="./images/iteration-2-images/icons/4.svg" alt="4.svg" />   
                        Kızartmalar
                    </a>
                    <a href="#">
                    <img src="./images/iteration-2-images/icons/5.svg" alt="5.svg" />
                        Fast food
                    </a>
                    <a href="#">
                        <img src="./images/iteration-2-images/icons/6.svg" alt="6.svg" />
                        Gazlı İçecek
                    </a>
                </div>



            


                <div className="icerik">
                    <Card inverse className="box" style={{ background: "#CE2829" }}>
                        <CardImg
                            alt="kart-1.png"
                            src="./images/iteration-2-images/cta/kart-1.png"
                            style={{
                                height: 465
                            }}
                            width="100%"
                        />
                        <CardImgOverlay>
                            <CardTitle className="boxHeader">
                                Özel Lezzetus
                            </CardTitle>
                            <CardText className="boxBody">
                                Position:Absolute Acı Burger
                            </CardText>
                            <CardText className="boxBody">
                                <a className="boxButton" href="#">
                                    SİPARİŞ VER
                                </a>
                            </CardText>
                        </CardImgOverlay>
                    </Card>


                    <div>
                        <Card inverse className="box" style={{ background: "#292929", marginBottom: "15px" }}>
                            <CardImg
                                alt="kart-2.png"
                                src="./images/iteration-2-images/cta/kart-2.png"
                                style={{height: 225
                                }}
                                width="100%"
                            />
                            <CardImgOverlay>
                                <CardTitle className="box1Body">
                                    Hackathlon Burger Menü
                                </CardTitle>
                                <CardText className="box1Body">
                                    <a className="boxButton" href="#">
                                        SİPARİŞ VER
                                    </a>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        
                        <Card inverse className="box" style={{ color: "#CE2829", overflow: "hidden" }}>
                            <CardImg
                                alt="kart-3.png"
                                src="./images/iteration-2-images/cta/kart-3.png"
                                style={{height: 225,
                                }}
                                width="100%"
                            />
                            <CardImgOverlay>
                                <CardTitle className="box2Body"style={{ color: "#CE2829" }}>
                                    <p> Çoooook <span style={{ color: "black" }}> hızlı </span></p>
                                    <p><span style={{ color: "black" }}>npm gibi kurye </span></p>
                                </CardTitle>
                                <CardText className="box2Body">
                                    <a className="boxButton" href="#">
                                        SİPARİŞ VER
                                    </a>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        
                    </div>



                </div>
                <div className="paketHeader">
                    <div className="slogan1">
                        en çok paketlenen menüler
                    </div>
                    <div className="slogan2">
                        Acıktıran Kodlara Doyuran Lezzetler
                    </div>
                </div>
                <div className="footterHeader">
                    <div className="headerButton">
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/1.svg" alt="1.svg" />
                            Ramen
                        </a>
                    </div>
                    <div className="headerButton" >
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/2.svg" alt="2.svg" />
                            Pizza
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/3.svg" alt="3.svg" />
                            Burger
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/4.svg" alt="4.svg" />
                            French Fries
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/5.svg" alt="5.svg" />
                            Fast food
                        </a>
                    </div>
                    <div className="headerButton">
                        <a href="#">
                        <img src="./images/iteration-2-images/icons/6.svg" alt="6.svg" />
                            Soft drinks
                        </a>
                    </div>
                </div>



                <div className="pizzas">
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/d864/d5f2/cfeae804c5416af75c83724fea1e8a2a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAzZ3NJmZ3ybWEKebQM6R6YW4mx36cvjrRzzjsAmsPA~ELhfDrdWCC~Od1YDhzRZGauTGIZcHleTVT3iCvACeb6ffdHhuG18pcgKd49XQSKVtbrf2curg~8mEJHHz0Ss7RZRNrm5h45vwfpxXc6MZ7eOjg1m3xv~4F5HiO8ve0zdcEGx42NVBacg9xix0xKxVQrbo55Lr6Ho2r1tXLkbHo3jUSBs4ZLBw2BrK2bm44W~xYyQtKEQbzdhOfr9o-iZE~py~AkV8~V3iXoQ0aFDp1zxv7nwfo2KR5TiLaYUclZtGD9ymupdFBgd~oLynLOYQLO2QLbUxhf8d1Pdz1TN7Q__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    Terminal Pizza
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/b4ef/f9b1/a666a9eaf37b96abc3aa028f58013324?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFaubq~Lg3WuyFXBU3-nI8ERUfIl-rO0zMhkU32BRTPYVB6D40q5btuE2i1YKYAIBDtzFjtR2cF4M9VC44bJAWmo6DJK5p8U3xgHiMNzdmE6bJHoiCoyFA60l7hYdJvOcT-q6WriqifpxhPq1LZPHs~ukI46VjmnqA3GP3Bo~bRirtuN7r541RQch84MjDEuBDSDLZWCpu7oijHICFwLE~1N5jOWOF5QMQxw3pCLaZZVh4rgvmrxpkAbQcM8BrJEsnqBvrzMaujTgdTndW4YiGwA~i~vLOnPefmo-tLTenSzZPeWn7XmHgLs-J-AuNI0COT6diHP04FshMMgy1VxeQ__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    Position Absolute Acı Pizza
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card
                            style={{
                                width: '334.67px',
                                height: "419px",
                                padding: "5%",
                            }}
                        >
                            <img
                                alt="Sample"
                                src="https://s3-alpha-sig.figma.com/img/458e/326c/cd5af55f8af508250a5509f485252911?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EC5JkEiBjoojca~BM~y1HOs80yNJsBMixj9Smi2-na5rvhwYcSujOM3Io8yw7yrpmUV4DPH~Lt2z6U6fSM7vbRtM958CBHhIar8STNEAfuV24NYKiSWbHi0sXVqpIxK5Eud7Kx9S6lZNTXuyLkCuGs2EczL-cCqik2YFgBp5nuI50jUL-o4homvhIG~8KE4j-IsgU4RhZ4bcipsFa78aysxns779CxLMlLnWr0YDzcQCFvr~jNN5BdzOlsTDAuq2~xIU20O~E0Eq8wZs3iA4LPsEXo32FPbMJqvuVJDMr9P0BfzXiBpnsbmdcWCPT629r4bugge3pUf6Cff21M3PSQ__"
                            />
                            <CardBody>
                                <CardTitle className="pizzaHeader">
                                    useEffect Tavuklu Burger
                                </CardTitle>
                                <div className="pizzaİnfo">
                                    <CardText className="pizzaStar">
                                        4.9
                                    </CardText>
                                    <CardText className="pizzaComment">
                                        (200)
                                    </CardText>
                                    <CardText className="pizzaMoney">
                                        60₺
                                    </CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
}