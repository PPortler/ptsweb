

import Image from "next/image";
import Link from "next/link";
import style from './styles/contact.module.css'


export default function Contact() {

    return(
        <div className={`${style.contact} d-flex flex-column align-items-center justify-content-center text-center my-5 pt-3 pb-3 container`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >Contact Me</h1>
            <p data-aos='flip-down' className='text-center'>Contact us or inquire about various details.</p>
            <Link href="#" data-aos="fade-up">
                <Image src="/image/contact.jpg" className={style.contact_img} width={1000} height={1000} priority alt="line add"></Image>
            </Link>
            <p className="mt-5" data-aos="fade-up">contact etc.</p>
            <div className="d-flex flex-column flex-sm-row" data-aos='fade-up'>
                <Link href="https://github.com/PPortler" className={`  m-1 mx-2 ${style.btn_contact} ${style.btn_github}`} data-aos='fade-up'>
                    <i className="bi bi-github"></i> Github</Link>
                <Link href="https://www.tiktok.com/@portlerdev?is_from_webapp=1&sender_device=pc" className={`m-1 mx-2 ${style.btn_contact} ${style.btn_tiktok}`} data-aos='fade-up'>
                    <i className="bi bi-tiktok"></i> Tiktok</Link>
                <Link href="#" className={`m-1 mx-2 ${style.btn_contact} ${style.btn_instagram}`} data-aos='fade-up'>
                    <i className="bi bi-instagram"></i> Instagram</Link>
            </div>
        </div>
    );
}