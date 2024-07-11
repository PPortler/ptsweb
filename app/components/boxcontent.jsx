

import style from './styles/boxcontent.module.css'
import Image from 'next/image'


export default function Boxcontent() {

    return (
        <div className='container d-flex flex-column flex-md-row mt-5 '>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-up">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon1.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>Beautiful Website</h3>
                    <p className='mt-2'>Design the website to be modern, beautiful, and meet your needs. Follow the design or have additional work done to help make the website more beautiful.</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-up">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon2.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>Responsive Website</h3>
                    <p className='mt-2'>Supports display usage on every screen, every device, whether it be PC, Laptop, Tablet, and various mobile phones. Makes it convenient to use anywhere, anytime.</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-up">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon3.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>Complete Information.</h3>
                    <p className='mt-2'>Fill in complete information according to requirements, whether it be contact information. or other information on other parts of the website as desired.</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}