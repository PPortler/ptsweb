

import style from './styles/webProject.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function WebProject() {


    const data = [
        {
            photo: "/image/toondiary.png",
            title: "เว็บไซต์ อ่านการ์ตูน",
            detail: "Reactjs + Bootstrap.",
            url: 'https://toondiary.netlify.app/'
        },
        {
            photo: "/image/khonkaentravel.png",
            title: "การท่องเที่ยวจังหวัด",
            detail: "Reactjs + Bootstrap.",
            url: 'https://khonkaentravel.netlify.app/'
        },
        {
            photo: "/image/carshop.png",
            title: "เว็บไซต์ จองรถ",
            detail: "Nextjs + Bootstrap.",
            url: ''
        },
        {
            photo: "/image/shirtshop.png",
            title: "ขายเสื้อผ้ากีฬา2",
            detail: "Nextjs+Bootstrap+Nodejs+MongoDB.",
            url: ''
        },
        {
            photo: "/image/simweb.png",
            title: "เว็บไซต์ ค้นหาเบอร์มงคล",
            detail: "html + css + Bootstrap.",
            url: ''
        },
        {
            photo: "/image/fluent.png",
            title: "Fluent Web",
            detail: "html + css + Bootstrap.",
            url: ''
        },
        {
            photo: "/image/portfolio.png",
            title: "เว็บไซต์ Portfolio",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/2psshop.png",
            title: "ขายเสื้อผ้ากีฬา1",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/appstore.png",
            title: "Apple Store",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/blog.png",
            title: "Blog Web",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/pscontent.png",
            title: "PS Content",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/movielike.png",
            title: "Movie Link",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        {
            photo: "/image/designwall.png",
            title: "Designwall",
            detail: "html + css ไม่ใช้ Framwork.",
            url: ''
        },
        
    ]
    return (
        <div className={`container d-flex flex-column align-items-center mt-5 pt-3`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >เว็บโปรเจ็ค</h1>
            <p data-aos='flip-down' className='text-center'>รวบรวมเว็บโปรเจ็คทั้งหมดของฉัน.</p>
            <div className={`${style.box_list} d-flex flex-wrap mt-4`}>
                {data.map((data, index) => (
                    <div key={index} className={` col-lg-4 col-md-6 p-2`} data-aos='fade-up'>
                        <Link href={data.url} className={`nav-link d-flex flex-column align-items-center ${style.box} `}>
                            <Image src={data.photo} className={`${style.box_img}`} height={1000} width={1000} alt='website' priority></Image>
                            <h4 className='mt-4 text-center'>{data.title}</h4>
                            <p className='text-center' >{data.detail}</p>
                            <button className={`mt-2`}>ดูเว็บไซต์</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}