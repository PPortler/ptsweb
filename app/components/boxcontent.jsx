

import style from './styles/boxcontent.module.css'
import Image from 'next/image'


export default function Boxcontent() {

    return (
        <div className='container d-flex flex-column flex-md-row mt-5 '>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon1.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>เว็บไซต์สวยงามทันสมัย</h3>
                    <p className='mt-2'>ด้วยทีมงานมืออาชีพของเราสามารถออกแบบเว็บไซต์ ให้ตรงตามจุดประสงค์ตอบโจทย์ธุกิจคุณ เว็บไซต์สวยงาม ทันสมัย และสร้างความน่าเชื่อถือให้กับเว็บไซต์ของคุณ</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon2.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>Responsive Website</h3>
                    <p className='mt-2'>รองรับการแสดงผลการใช้งาน ทุกหน้าจอ ทุกอุปกรณ์ ไม่ว่าจะเป็น จอคอมพิวเตอร์ PC, Laptop, Tablet และมือถือรุ่นต่างๆ ทำให้คุณสามารถใช้งานได้สะดวกทุกที่ ทุกเวลา</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon3.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>ลงข้อมูลที่จำเป็นครบถ้วน</h3>
                    <p className='mt-2'>ทีมงานจะลงข้อมูลติดต่อของคุณให้ครบถ้วน ให้คุณ ไม่พลาดโอกาสทางการโปรโมทธุรกิจ เช่น เบอร์ติดต่อ, Social Network รวมถึงข้อมูล SEO เบื้องต้นด้วย</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}