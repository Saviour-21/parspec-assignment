import { useEffect, useState } from 'react';

import './App.css';

import InputBox from './components/InputBox';
import CardList from './components/CardList';

import { getData } from './apicalls';
import { MOCKDATA_URL } from './apicalls/ApiConstant';

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [query, setQuery] = useState("");

  // fetching the data 
  const fetchData = () => {
    getData(MOCKDATA_URL).then((res)=>{
        setData(res);
        setFilterData([]);
    }).catch((err)=>{
      console.err(err);
    })
}

useEffect(()=>{
    fetchData();
}, [])
  return (
    <div className="App">
      <InputBox data={data} setData={setFilterData} setQuery={setQuery}/>
      <CardList data={filterData} query={query}/>
    </div>
  );
}

export default App;
