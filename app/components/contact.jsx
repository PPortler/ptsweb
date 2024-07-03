

import Image from "next/image";
import Link from "next/link";
import style from './styles/contact.module.css'


export default function Contact() {

    return(
        <div id="contact" className={`${style.contact} d-flex flex-column align-items-center justify-content-center text-center mt-5 container`}>
            <h1 className="fw-bolder" data-aos="zoom-in-up">@Line QR Code</h1>
            <Link href="" data-aos="zoom-in-up">
                <Image src="/image/contact.jpg" className={style.contact_img} width={1000} height={1000} priority alt="line add"></Image>
            </Link>
            <h4 className="mt-3" data-aos="zoom-in-up">สอบถามรายละเอียดต่างๆก่อนได้ที่ Line @</h4>
        </div>
    );
}