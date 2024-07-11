

import style from './styles/webProject.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function WebProject() {


    const data = [
        {
            photo: "/image/toondiary.png",
            title: "Read Comics",
            detail: "Nextjs + Bootstrap.",
            url: 'https://toondiary.netlify.app/'
        },
        {
            photo: "/image/khonkaentravel.png",
            title: "Promote Tousris",
            detail: "Reactjs + Bootstrap.",
            url: 'https://khonkaentravel.netlify.app/'
        },
        {
            photo: "/image/carshop.png",
            title: "Reserve Cars.",
            detail: "Nextjs + Bootstrap.",
            url: ''
        },
        {
            photo: "/image/shirtshop.png",
            title: "Selling Sport Shirt 2",
            detail: "Nextjs+Bootstrap+Nodejs+MongoDB.",
            url: ''
        },
        {
            photo: "/image/simweb.png",
            title: "Search Phone Number",
            detail: "CSS Bootstrap.",
            url: ''
        },
        {
            photo: "/image/fluent.png",
            title: "Fluent Web",
            detail: "CSS Bootstrap.",
            url: ''
        },
        {
            photo: "/image/portfolio.png",
            title: "Portfolio Website",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/2psshop.png",
            title: "Selling Sport Shirt 1",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/appstore.png",
            title: "Apple Store",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/blog.png",
            title: "Blog Web",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/pscontent.png",
            title: "PS Content",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/movielike.png",
            title: "Movie Like",
            detail: "Not Use Framwork.",
            url: ''
        },
        {
            photo: "/image/designwall.png",
            title: "Designwall",
            detail: "Not Use Framwork.",
            url: ''
        },
        
    ]
    return (
        <div className={`container d-flex flex-column align-items-center mt-5 pt-3`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >My Project</h1>
            <p data-aos='fade-up' className='text-center'>Collection my website projects.</p>
            <div className={`${style.box_list} d-flex flex-wrap mt-4`}>
                {data.map((data, index) => (
                    <div key={index} className={` col-lg-4 col-md-6 p-2`} data-aos='fade-up'>
                        <Link href={data.url} className={`nav-link d-flex flex-column align-items-center p-3 ${style.box} `}>
                            <Image src={data.photo} className={`${style.box_img}`} height={1000} width={1000} alt='website' priority></Image>
                            <h4 className='mt-4 text-center'>{data.title}</h4>
                            <p className='text-center' >{data.detail}</p>
                            <button className={``}>Visits</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}