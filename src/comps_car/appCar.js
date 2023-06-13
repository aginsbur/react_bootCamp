import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import CarItem from './carItem';

export default function CarsList() {
  const [ar,setAr] = useState([]);
  const nav = useNavigate();
  const inpRef = useRef();
  // איסוף קווארי סטרינג
  // ?s=
  const [query] = useSearchParams();

  useEffect(() => {
    doApi();
  },[query])

  const doApi = async() => {
    let searchQ = query.get("s") || "jeep";
    let url = "https://cars-otdf.onrender.com/cars/search?s="+searchQ;
    let resp = await axios.get(url);
    console.log(resp.data);
    console.log(searchQ);
    setAr(resp.data);

  }}