import { useState } from "react";
import Stations from "./Stations";

const Fare=(props)=>{

    const {fromStation,toStation} =props;

    const [receivedArray, setReceivedArray] = useState([]);
  
    const handleDataReceive = (newArray) => {
        setReceivedArray(newArray);
    };
    let index1;
    let index2;
    for (let i=0;i<receivedArray.length;i++){

        if(fromStation==receivedArray[i]){
            index1=i;
        }
        else if(toStation==receivedArray[i]){
            index2=i
        }
    }
    let ticket=index2-index1;
    let price;
    if(ticket>0){
        price=ticket*25;
    }
    else{
        price=Math.abs(ticket)*25;
    }
    return (
        <>
        <Stations onDataReceive={handleDataReceive} />
        <div className="fare">
        <center>
        <fieldset className="price">
        {
            (price>0)?(<table className="ticket" align="center">
                <tr>
                    <td>Journey  </td>
                    <td>From {fromStation} To {toStation}</td>
                </tr>
                <tr>
                    <td>Fare ==</td>
                    <td>₹{price}/-</td>
                </tr>
            </table>):<p className="same">From and To Stations must be Different</p>
        }
        </fieldset>
        </center>
        </div>
        </>
    )
}

export default Fare;