"use client"

import style from './styles/maincpn.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Maincpn() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <div className={`${style.maincpn} 
        d-flex flex-column pt-4 align-items-center mt-5 pt-5`}>

            {/* <div className={`${style.maincpn_draw_people}`}>
                <div className={`${style.maincpn_draw_people_eye} ${style.maincpn_draw_people_eye_left}`}>
                    <div className={`${style.maincpn_draw_people_eye_detail}`}></div>
                </div>
                <div className={`${style.maincpn_draw_people_eye} ${style.maincpn_draw_people_eye_right}`}>
                    <div className={`${style.maincpn_draw_people_eye_detail}`}></div>
                </div>
                <div className={`${style.maincpn_draw_people_mouth}`}></div>
            </div> */}

            <div style={{ width: "max-content" }}>
                <h1 className='container fs-lg-1' data-aos="fade">ทำ เ ว็ บ อ ะ ไ ร ดี ?</h1>
                <div className={`${style.maincpn_p_group} mt-3 bg-dark text-white p-2 p-sm-3 `} data-aos="fade-up">
                    <p className=' m-0 '>console.log(<span style={{ color: "orange" }}>"รับเขียนเว็บไซต์ ตามความต้องการ"</span>);</p>
                    <p className=' m-0'>console.log(<span style={{ color: "orange" }}>"หรือ ตัดไฟล์ รูป photoshop, adobe, figma etc. เป็น website"</span>);</p>
                </div>
            </div>

            {/* <div className={`${style.maincpn_animate}  d-flex justify-content-between mt-sm-5 mt-4`}>
                <Image src="/image/bird2.png" height={1000} width={1000} className={`${style.maincpn_animate_item}`} alt='brid-robot' priority></Image>
            </div> 
            {/* <div className={`${style.maincpn_cloud_group}`}>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
            </div> */}

            <div id='maincpn_slider' className={`carousel slide ${style.maincpn_model} mt-sm-5 mt-5 `} data-aos="fade" data-aos-duration="4000">
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <Link href="#" className='nav-link'>
                            <h4 className='h3 text-center mb-3 '>เว็บไซต์ โปรโมท</h4>
                            <Image src="/image/poster_main_3.png" height={1000} width={1000} className={`${style.maincpn_model_img} `} alt='link-poster1' priority></Image>
                        </Link>
                    </div>
                    <div className='carousel-item'>
                        <Link href="#" className="nav-link">
                            <h4 className='h3 text-center mb-3'>เว็บไซต์ อ่านการ์ตูน</h4>
                            <Image src="/image/poster_main_1.png" height={1000} width={1000} className={`${style.maincpn_model_img} `} alt='link-poster2' priority></Image>
                        </Link>
                    </div>
                    <div className='carousel-item'>
                        <Link href="#" className='nav-link'>
                            <h4 className='h3 text-center mb-3'>เว็บไซต์ Portfolio</h4>
                            <Image src="/image/poster_main_2.png" height={1000} width={1000} className={`${style.maincpn_model_img} `} alt='link-poster3' priority></Image>
                        </Link>
                    </div>
                </div>
                <div className={`${style.maincpn_model_btn} fs-2 `}>
                    <button className={`carousel-control-prev`} type='button' data-bs-target="#maincpn_slider" data-bs-slide="prev">
                        <span className='bi bi-arrow-left-circle-fill' aria-hidden="true"></span>
                        <span className='visually-hidden'></span>
                    </button>
                    <button className={`carousel-control-next`} type='button' data-bs-target="#maincpn_slider" data-bs-slide="next">
                        <span className='bi bi-arrow-right-circle-fill' aria-hidden="true"></span>
                        <span className='visually-hidden'></span>
                    </button>
                </div>
                <div className={`${style.maincpn_model_fade}`}>
                    <div className={``}></div>
                    <div className={``}></div>
                </div>
            </div>
        </div>
    );
}