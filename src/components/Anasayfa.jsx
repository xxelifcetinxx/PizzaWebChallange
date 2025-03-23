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
                        <p>KOD ACIKTIRIR </p>
                        <p>PIZZA, DOYURUR </p>
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
                                alt="food-1" src="./images/iteration-2-images/pictures/food-1.png"
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
                                alt="food-2" src="./images/iteration-2-images/pictures/food-2.png"
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
                                alt="food-3" src="./images/iteration-2-images/pictures/food-3.png"
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