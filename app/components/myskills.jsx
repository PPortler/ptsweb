import style from "./styles/myskills.module.css"
import Image from "next/image";

export default function MySkills() {
    const myskills = [
        {
            image: "/image/html-5.png",
            title: "HTML 5",
            level: "ดีเยี่ยม"
        },
        {
            image: "/image/css-3.png",
            title: "CSS 3",
            level: "ดีเยี่ยม"
        },
        {
            image: "/image/js.png",
            title: "JavaScript",
            level: "ระดับกลาง"
        },
        {
            image: "/image/react.png",
            title: "React Js",
            level: "ระดับกลาง"
        },
        {
            image: "/image/nextjs.webp",
            title: "Next Js",
            level: "ระดับกลาง"
        },
        {
            image: "/image/nodejs.png",
            title: "Node Js",
            level: "พื้นฐาน"
        },
        {
            image: "/image/mysql.png",
            title: "My SQL",
            level: "พื้นฐาน"
        },
        {
            image: "/image/mongodb.png",
            title: "Mongo DB",
            level: "เริ่มต้น"
        },
        {
            image: "/image/bootstrap.png",
            title: "Bootstrap",
            level: "ดีเยี่ยม"
        },
        {
            image: "/image/python.png",
            title: "Python",
            level: "ระดับดี"
        },
        {
            image: "/image/java.png",
            title: "Java",
            level: "พื้นฐาน"
        },
        {
            image: "/image/c.png",
            title: "C Language",
            level: "พื้นฐาน"
        },
        {
            image: "/image/kotlin.png",
            title: "Kotlin",
            level: "เริ่มต้น"
        },
        
    ]
    return (
        <div id="myskills" className={`container d-flex flex-column align-items-center mt-5 pt-3`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >ทักษะ</h1>
            <p data-aos='flip-down' className='text-center'>ทักษะที่ฉันได้เรียนรู้ สามารถ click หรือ hover เพื่อดูการประเมินตัวเองของฉันได้.</p>
            <div className={`${style.box} d-flex flex-wrap justify-content-center mt-4`} >
                {myskills.map((skill,index) => (
                    <div key={index} className={`col-lg-2 col-6 col-sm-4 col-md-3 p-2 `} data-aos='fade-up'>
                        <div className={`${style.box_item} p-2 py-4 `}>
                            <Image className={`${style.box_img}`} src={skill.image} height={1000} width={1000} alt="skills" priority></Image>
                            <h5 className="text-white mt-4">{skill.title}</h5>
                            <div className={`${style.box_slider}`}>
                                <h4>{skill.level}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}