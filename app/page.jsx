"use client";

import { useEffect } from 'react';
import Maincpn from "./components/maincpn";
import Textdetail from "./components/textdetail";
import Boxcontent from './components/boxcontent';
import Contact from './components/contact';
import WebProject from './components/webProject';
import MySkills from './components/myskills';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    AOS.init({
    });
  }, []);
  return (
    <div>
      <div id='main'></div>
      <Maincpn />
      {/* <Textdetail /> */}
      <Boxcontent />
      <div id='webproject'></div>
      <WebProject />
      <div id='skills'></div>
      <MySkills />
      <div id='contact'></div>
      <Contact />
      <div className='mt-5 pt-5'></div>
    </div>
  );
}
