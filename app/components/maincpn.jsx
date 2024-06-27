import style from './styles/maincpn.module.css';
import Image from 'next/image';

export default function Maincpn() {

    return (
        <div className={`${style.maincpn} border-bottom border-black border-3
        d-flex flex-column pt-md-4 pt-3 align-items-center`}>

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
                <h1 className='container fs-lg-1'>ทำเว็บอะไรดี ?</h1>
                <div className={`${style.maincpn_p_group} mt-3 bg-dark text-white p-2 p-sm-3 `} >
                    <p className=' m-0 '>console.log(<span style={{color: "orange"}}>"รับเขียนเว็บไซต์ ตามความต้องการ"</span>);</p>
                    <p className=' m-0'>console.log(<span style={{color: "orange"}}>"หรือ ตัดไฟล์ รูป photoshop, adobe, figma etc. เป็น website"</span>);</p>
                </div>
            </div>

            <div className={`${style.maincpn_animate} d-sm-none d-flex justify-content-between mt-sm-5 mt-4`}>
                <Image src="/image/bird2.png" height={1000} width={1000} className={`${style.maincpn_animate_item}`}></Image>
            </div>
            {/* <div className={`${style.maincpn_cloud_group}`}>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
                <Image src="/image/cloud.png" height={1000} width={1000} className={`${style.maincpn_cloud}`}></Image>
            </div> */}

            
           <div className={`${style.maincpn_model} d-flex mt-sm-5 mt-3 `}>
                <Image src="/image/poster_main_1.png" height={1000} width={1000} className={`${style.maincpn_model_img} `}></Image>

           </div>
        </div>
    );
}