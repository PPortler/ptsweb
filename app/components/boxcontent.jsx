

import style from './styles/boxcontent.module.css'
import Image from 'next/image'


export default function Boxcontent() {

    return (
        <div className='container d-flex flex-column flex-md-row mt-5 '>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon1.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>เว็บไซต์สวยงาม</h3>
                    <p className='mt-2'>ออกแบบเว็บไซต์ให้ทันสมัย สวยงาม ตรงตามความต้องการของลูกค้า ทำตามแบบ design ของลูกค้าหรือมีการแนะนำเพิ่มเติมเพื่อช่วยทำให้เว็บไซต์สวยงามขึ้น</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon2.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>รองรับทุกอุปกรณ์</h3>
                    <p className='mt-2'>รองรับการแสดงผลการใช้งาน ทุกหน้าจอ ทุกอุปกรณ์ ไม่ว่าจะเป็น PC, Laptop, Tablet และมือถือรุ่นต่างๆ ทำให้สามารถใช้งานได้สะดวกทุกที่ ทุกเวลา</p>
                </div>
            </div>
            <div className={`px-2 col-md-4 mt-3 mt-md-0`} data-aos="fade-right">
                <div className={`${style.box} d-flex flex-column align-items-center justify-content-center p-4 rounded-3 shadow text-center`}>
                    <Image className={`${style.box_img}`} src="/image/box_icon3.png" priority alt='icon' width={1000} height={1000}></Image>
                    <h3 className='mt-3' style={{color:"#01579b"}}>ข้อมูลครบถ้วน</h3>
                    <p className='mt-2'>ลงข้อมูลตาม requirement ของลูกค้าครบถ้วน ไม่ว่าจะเป็นข้อมูลการติดต่อ หรือข้อมูลส่วนอื่นๆของหน้าเว็บไซต์ตามที่ลูกค้าต้องการ</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}