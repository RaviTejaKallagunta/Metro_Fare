import { useState } from "react";
import Stations from "./Stations";
import StationsDropdown from "./StationsDropdown";
import Fare from "./Fare";

const FromAndToStations=()=>{

    const [stationsArrray,setStationsArray]=useState([]);

    const [fromStation,setFromStation]=useState('');

    const [toStation,setToStation]=useState('');

    const handleDataReceive=(array)=>{
        setStationsArray(array);
    };
    //console.log(stationsArrray);

    const handleFromChange = ( value) => {
        setFromStation(value);
    };
      
    const handleToChange = ( value) => {
        setToStation(value);
    };

    return(
        <>
        <Stations onDataReceive={handleDataReceive} ></Stations>

        <div className="stations">
            <table>
                <tr>
                    <td>From :</td>
                    <td><StationsDropdown stations={stationsArrray} onSelectionChange={handleFromChange}></StationsDropdown></td>
                </tr>
                <tr>
                    <td>To   :</td>
                    <td><StationsDropdown stations={stationsArrray} onSelectionChange={handleToChange}></StationsDropdown></td>
                </tr>
            </table> 
        </div>

        <Fare fromStation={fromStation} toStation={toStation} ></Fare>
        </>
    )
}
export {FromAndToStations};