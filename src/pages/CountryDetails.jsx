import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CountryDetails = () => {
    const {country}= useParams()

    console.log("name",country)
    const {state}= useLocation()
    const navigate=useNavigate()
    console.log(state);

  return (
    <div className="flex flex-col items-center bg-slate-300 h-[84vh]">
      <div className="text-center font-bold text-2xl text-slate-500 mt-20">
        {state.name.common}
      </div>
      <img className="w-[400px]" src={state.flags.png} alt="" />
      <div className="text-center font-bold text-2xl text-slate-500">
        {state.capital}
      </div>
      <button
        className="bg-slate-500 py-1 rounded px-1"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default CountryDetails