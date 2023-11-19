import { useState } from "react";
import { FromAndToStations } from "./FromAndToStations";
const { metroContext } = require("./MetroContext")

const City=()=>{

    const [city,setCity]=useState('');

    const handleCityChange=(event)=>{
        setCity(event.target.value);
    }

    return(
        <>
        <div className="container">
        <h2 className="title">Metro Fare</h2>
        <div className="city">
           Location : <select className="location" name="city" onChange={handleCityChange} value={city}>
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Mumbai">Mumbai</option>
            </select>
        </div>

        <metroContext.Provider value={city}>
            <FromAndToStations />
        </metroContext.Provider>
        </div>
        </>
    )

}
export default City;