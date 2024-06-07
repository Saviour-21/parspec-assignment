import React  from "react";
// import style from "./InputBox.module.css";

const InputBox = ({data, setData, setQuery}) => {
    const filterData = (query) => {
        setQuery(query);
        if(query.length > 0){
            // filterinng out that using basic string matching 
            const filteredData = data.filter(entry => {
                const { id, name, address, pincode, items } = entry;
                return (
                    id.toLowerCase().includes(query.toLowerCase()) || 
                    name.toLowerCase().includes(query.toLowerCase()) ||
                    address.toLowerCase().includes(query.toLowerCase()) ||
                    pincode.toLowerCase().includes(query.toLowerCase()) || 
                    items.filter(item => item.toLowerCase().startsWith(query.toLowerCase())).length > 0
                );
            });
            setData(filteredData);
        } else{
            setData([]);
        }
    }

    return(
        <div>
            <input type="text" id="inputBox" placeholder="Search" onChange={(event) => filterData(event.target.value)}/>
        </div>
    )
}

export default InputBox;