"use client";

import { useEffect } from 'react';
import Maincpn from "./components/maincpn";
import Textdetail from "./components/textdetail";
import Boxcontent from './components/boxcontent';
import Contact from './components/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <Maincpn />
      <Textdetail />
      <Boxcontent />
      <Contact />
    </div>
  );
}
