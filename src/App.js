import React from 'react';
import Navbar from "./Navbar";
import opona from './imgs/opona.png'
import wymiana from './imgs/wymiana.png'
import naprawa from './imgs/naprawa.png'
import przechowywanie from './imgs/przechowywanie.png'
import Footer from "./Footer";
import Map from "./Map";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function App() {
    const orange = 'rgb(254, 189, 91)';

    return <div>
        <Navbar/>
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
        <div className="d-flex flex-column">
            <div className="center uslugi title" >Usługi opon</div>
            <div className="d-flex justify-content-center " >
                <div className="d-flex flex-row justify-content-evenly  flex-wrap" style={{ width: "100%", maxWidth:"1800px"}}>

                    <div className="uslugi-details subtitle  center">
                        Wymiana
                        <img src={wymiana} alt="Wymiana" />
                    </div>

                    <div className="uslugi-details subtitle center">
                        Naprawa
                        <img src={naprawa} alt="Naprawa" />
                    </div>
                    <div className="uslugi-details subtitle center">
                        Przechowywanie
                        <img src={przechowywanie} alt="Przechowywanie" />
                    </div>
                    <div className="uslugi-details subtitle center">
                        Sprzedaż
                        <img src={opona} alt="Opona" />
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "50px" }} className="center ">

               <div className="title">
                   O Nas
               </div>

                <div style={{fontSize: "18px"}} className="subtitle w-50 m-3">
                    Wulkanizacja powstała we <b>wrześniu 2023</b> roku z pasji do motoryzacji i zobowiązania do świadczenia najwyższej jakości usług w zakresie wulkanizacji. Zrodziliśmy się z potrzeby - dostrzegliśmy duże zapotrzebowanie na wysoką jakość usług w naszym regionie. Nasza wszechstronność obejmuje wymianę opon w <b>samochodach osobowych i busach</b>. Wszystkie narzędzia i maszyny, których używamy do wymiany kół, są nowe i zostały zakupione we wrześniu 2023 roku.
                    Nasza wulkanizacja dysponuje bardzo dużym, <b>darmowym parkingiem</b>, zapewniając wygodę i swobodę podczas korzystania z naszych usług. <br/> Dołącz do społeczności zadowolonych klientów, gdzie troszczymy się o Twoje bezpieczeństwo i komfort.
                </div>

                <b></b>





            </div>


<div style={{marginTop: "50px"}} className="center">
    <div className="title">Odwiedź nas</div>
    <div className="subtitle pt-3">
        Wulkanizacja znajduje się na terenie  <b>Hurtowni Elektrycznej Kabel</b>.
<br/>
        <p style={{textAlign: "center" }}>
            <FontAwesomeIcon style={{ color: `${orange}`, marginTop: "20px"}}
                             icon={faLocationDot} size="l"/> Aleja Piłsudskiego 60, 18-400 Łomża
        </p>

    </div>
    < Map/>
</div>

            <Footer/>
        </div>


    </div>;
}
