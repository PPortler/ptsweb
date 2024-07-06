

import Image from "next/image";
import Link from "next/link";
import style from './styles/contact.module.css'


export default function Contact() {

    return(
        <div className={`${style.contact} d-flex flex-column align-items-center justify-content-center text-center my-5 pt-3 pb-3 container`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >ติดต่อฉัน</h1>
            <p data-aos='flip-down' className='text-center'>ติดต่องานหรือสอบถามเกี่ยวกับรายละเอียดต่างๆ</p>
            <Link href="#" data-aos="fade-up">
                <Image src="/image/contact.jpg" className={style.contact_img} width={1000} height={1000} priority alt="line add"></Image>
            </Link>
            <p className="mt-3" data-aos="fade-up">ช่องทางการติดตาม</p>
            <div className="d-flex" data-aos='fade-up'>
                <Link href="#" className="bi bi-instagram nav-link px-2"></Link>
                <Link href="https://github.com/PPortler" className="bi bi-github nav-link px-2"></Link>
                <Link href="https://www.tiktok.com/@portlerdev?is_from_webapp=1&sender_device=pc" className="bi bi-tiktok nav-link px-2"></Link>
            </div>
        </div>
    );
}