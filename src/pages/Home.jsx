import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Loading from '../asset/logo512.png'

const Home = () => {
    const navigate=useNavigate()
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const sadık = async () => {
      const { data } = await axios(url);
      // console.log(data);
      setCountry(data);
      setLoading(false)
      setInterval(()=> {setLoading(false)},2000)
    };
    sadık();
  }, []);
  console.log(country);
  if(loading){
    return <img className="w-[200px] mx-auto mt-48"  src={Loading} alt="" />;
  }

  return (
    <div>
      {country.map((item) => {
        return (
          <div className="flex justify-between border-2 items-center px-5" onClick={()=> navigate(`${item.name.common}`,{state:item})}>
            <div>{item.name.common}</div>
            <img src={item.flags.png} className="w-10 h-10" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
