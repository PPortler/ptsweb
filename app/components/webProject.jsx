

import style from './styles/webProject.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function WebProject() {


    const data = [
        {
            url: "/image/website1.png",
            title: "เว็บไซต์พอร์ตฟอริโอ",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis nostrum ut quo quos hic ipsa repellendus impedit iure delectus.",
        },
        {
            url: "/image/website1.png",
            title: "Website Company books",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis nostrum ut quo quos hic ipsa repellendus impedit iure delectus.",
        },
        {
            url: "/image/website1.png",
            title: "Website Company Books",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis nostrum ut quo quos hic ipsa repellendus impedit iure delectus.",
        },
        {
            url: "/image/website1.png",
            title: "Website Company Books",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto debitis nostrum ut quo quos hic ipsa repellendus impedit iure delectus.",
        },
    ]
    return (
        <div id='webproject' className={`container d-flex flex-column align-items-center mt-5 pt-3`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >Web Project</h1>
            <p data-aos='flip-down' className='text-center'>Portfolio My Website etc Lorem ipsum dolor sit amet.</p>
            <div className={`${style.box_list} d-flex flex-wrap mt-4`}>
                {data.map((data, index) => (
                    <div key={index} className={` col-lg-4 col-md-6 p-2`} data-aos='fade-up'>
                        <Link href="#" className={`nav-link d-flex flex-column align-items-center ${style.box} `}>
                            <Image src={data.url} className={`${style.box_img}`} height={1000} width={1000} alt='website' priority></Image>
                            <h4 className='mt-4 text-center'>{data.title}</h4>
                            <button className={`mt-2`}>ดูเว็บไซต์</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}