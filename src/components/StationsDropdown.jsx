const StationsDropdown=({stations,onSelectionChange})=>{

    const handleSelectChange=(event)=>{
        onSelectionChange(event.target.value);
    };
    //console.log(stations);

    return(
        <>
        <select className="stops" name="place" onChange={handleSelectChange}>
          <option value=''>Select Station</option>
          {
            stations.map((element,index)=>{
              return <option key={index} value={element}>{element}</option>
            })
          }
        </select>
        </>
    )
}
export default StationsDropdown;