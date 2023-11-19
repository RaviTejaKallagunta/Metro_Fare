import { useContext, useEffect } from "react";
import { metroContext } from "./MetroContext";
import React from "react";

const Stations=React.memo(({ onDataReceive})=>{

    const selectedCity=useContext(metroContext);

    let arrayOfStations;

    switch(selectedCity){
        case 'Delhi':
            arrayOfStations=['Huda City Centre','Qutab Minar','Green Park','AIIMS','Houz Khas','Jor Bagh','Central Secretariat','Rajiv Chowk','New Delhi','Chandni Chowk','Kashmere Gate','Vishwavidhyalaya','Samaypur Badli'];
            break;
        case 'Hyderabad':
            arrayOfStations=['Miyapur','JNTU College','KPHB Colony','Kukatpally','Balanagar','Moosapet','Bharat Nagar','Erragadda','ESI Hospital','S.R Nagar','Ameerpet','Panjagutta','Irrum Manzil'];
            break;
        case 'Mumbai':
            arrayOfStations=['Versova','D N Nagar','Azad Nagar','Andheri','WEH','Chakala','Airport','Marol Naka','Saki Naka','Asalpha','Jagruti Nagar','Ghatkopar','Harbour'];
            break;
        default:
            arrayOfStations=[];
            break;
    }

    useEffect(() => {
        onDataReceive(arrayOfStations)
      }, [selectedCity]);

return(
    <>
    
    </>
)
});
export default Stations;