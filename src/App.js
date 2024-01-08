import React, {useRef} from 'react';
import Navbar from "./Navbar";
import opona from './imgs/opona.png'
import wymiana from './imgs/wymiana.png'
import naprawa from './imgs/naprawa.png'
import przechowywanie from './imgs/przechowywanie.png'
import Footer from "./Footer";
import Map from "./Map";
import {faClock, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function App() {
    const orange = 'rgb(254, 189, 91)';

    const mapRef = useRef(null);
    const aboutUsRef = useRef(null);
    const offerRef = useRef(null);

    const handleLocationIconClick = () => {
        if (mapRef && mapRef.current) {
            mapRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleUserIconClick = () => {
        if (aboutUsRef && aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleOfferClick = () => {
        if (offerRef && offerRef.current) {
            offerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <div>
        <Navbar handleLocationIconClick={handleLocationIconClick} handleUserIconClick={handleUserIconClick} />
        <div className="header center">
            <div className="titel">
                Wulkanizacja
            </div>
            <div className="subtitel center
       ">
                - Profesjonalna Obsługa Klienta
                i Usługi Wulkanizacyjne
            </div>


        </div>
        <div className="d-flex flex-column" ref={offerRef}>
            <div className="center uslugi title" >Usługi opon</div>
            <div className="d-flex justify-content-center " >
                <div className="d-flex flex-row justify-content-evenly  flex-wrap" style={{ width: "100%", maxWidth:"1800px", fontWeight: "700"}}>

                    <div className="uslugi-details subtitle center ">
                        Wymiana
                        <img src={wymiana} alt="Wymiana" className="expand"/>
                    </div>

                    <div className="uslugi-details subtitle center">
                        Naprawa
                        <img src={naprawa} alt="Naprawa" className="expand" />
                    </div>
                    <div className="uslugi-details subtitle center">
                        Przechowywanie
                        <img src={przechowywanie} alt="Przechowywanie" className="expand"/>
                    </div>
                    <div className="uslugi-details subtitle center">
                        Sprzedaż
                        <img src={opona} alt="Opona" className="expand"/>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "50px" }} className="center " ref={aboutUsRef}>

               <div className="title" >
                   O Nas
               </div>

                <div style={{fontSize: "18px"}} className="subtitle w-50 m-3">
                    Wulkanizacja powstała we <b>wrześniu 2023</b> roku z pasji do motoryzacji i zobowiązania do świadczenia najwyższej jakości usług w zakresie wulkanizacji. Zrodziliśmy się z potrzeby - dostrzegliśmy duże zapotrzebowanie na wysoką jakość usług w naszym regionie. Nasza wszechstronność obejmuje wymianę opon w <b>samochodach osobowych i busach</b>. Wszystkie narzędzia i maszyny, których używamy do wymiany kół, są nowe i zostały zakupione we wrześniu 2023 roku.
                    Nasza wulkanizacja dysponuje bardzo dużym, <b>darmowym parkingiem</b>, zapewniając wygodę i swobodę podczas korzystania z naszych usług. Zapewniamy również wygodę w płatnościach, umożliwiając naszym klientom dokonywanie transakcji zarówno <b>kartą, jak i gotówką</b>.<br/> Dołącz do społeczności zadowolonych klientów, gdzie troszczymy się o Twoje bezpieczeństwo i komfort.
                </div>
            </div>

            <div style={{ marginTop: "50px" }} className="center " >

                <div className="title" >
                    Opony całoroczne czy sezonowe?
                </div>

                <div style={{fontSize: "18px"}} className="subtitle w-50 m-3">
                    <b>Opony całoroczne</b> to świetne rozwiązanie dla kierowców, którzy nie chcą tracić czasu na sezonowe zmiany. W naszym regionie, gdzie zima bywa kapryśna, mogą być one szczególnie praktyczne. Oferują one solidną przyczepność w zróżnicowanych warunkach pogodowych, zarówno podczas śniegu, deszczu, jak i na suchej nawierzchni.
<br/><br/>
                    <b>Opony sezonowe</b> są dedykowane konkretnym warunkom atmosferycznym. W okresie zimowym gwarantują lepszą przyczepność na zaśnieżonych drogach, podczas gdy opony letnie zapewniają optymalną wydajność w cieplejszych warunkach.
                    <br/><br/>
                    <b>Nasza wulkanizacja poleca </b>opony całoroczne dla tych, którzy przemieszczają się głównie w obszarze miejskim i nie są często wystawieni na trudne warunki terenowe. Dla kierowców często podróżujących poza miasto i napotykających na różnorodne warunki pogodowe, opony sezonowe mogą być lepszym wyborem.
                    <br/><br/>
                    Nie ważne, czy decydujesz się na opony całoroczne czy sezonowe, nasza wulkanizacja służy pomocą w doborze odpowiednich opon oraz ich fachową wymianą.
                </div>
            </div>

<div style={{marginTop: "50px"}} className="center" ref={mapRef}>
    <div className="title">Odwiedź nas</div>
    <div className="subtitle pt-3">
        Wulkanizacja znajduje się na terenie  <b>Hurtowni Elektrycznej Kabel</b>.
<br/>
        <p style={{textAlign: "center" }}>
            <FontAwesomeIcon style={{ color: `${orange}`, marginTop: "20px"}}
                             icon={faLocationDot} size="l"/> <br/>Aleja Piłsudskiego 60, 18-400 Łomża
        </p>
        <p style={{textAlign: "center" }}>
            <FontAwesomeIcon style={{ color: `${orange}`, marginTop: "20px"}}
                             icon={faPhone} size="l"/> <br/>+48 602 467 698
        </p>
        <p style={{textAlign: "center" }}>
            <FontAwesomeIcon style={{ color: `${orange}`, marginTop: "10px"}}
                             icon={faClock} size="l"/>
            <p style={{fontWeight: "700"}}>Godziny otwarcia:</p>
            Pon.- Pt. 8:00 - 17:00<br/>
            Sob. 8:00 - 12:00
        </p>
    </div >
    < Map/>
    <div className="subtitle mt-5">***</div>
</div>

            <Footer handleLocationIconClick={handleLocationIconClick} handleUserIconClick={handleUserIconClick} handleOfferClick={handleOfferClick}/>
        </div>


    </div>;
}
