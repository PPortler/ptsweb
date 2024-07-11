import style from "./styles/myskills.module.css"
import Image from "next/image";

export default function MySkills() {
    const myskills = [
        {
            image: "/image/html-5.png",
            title: "HTML 5",
            level: "Advanced"
        },
        {
            image: "/image/css-3.png",
            title: "CSS 3",
            level: "Advanced"
        },
        {
            image: "/image/js.png",
            title: "JavaScript",
            level: "Medium"
        },
        {
            image: "/image/react.png",
            title: "React Js",
            level: "Medium"
        },
        {
            image: "/image/nextjs.webp",
            title: "Next Js",
            level: "Medium"
        },
        {
            image: "/image/nodejs.png",
            title: "Node Js",
            level: "Basic"
        },
        {
            image: "/image/mysql.png",
            title: "My SQL",
            level: "Basic"
        },
        {
            image: "/image/mongodb.png",
            title: "Mongo DB",
            level: "Beginner"
        },
        {
            image: "/image/bootstrap.png",
            title: "Bootstrap",
            level: "Advanced"
        },
        {
            image: "/image/python.png",
            title: "Python",
            level: "Good"
        },
        {
            image: "/image/java.png",
            title: "Java",
            level: "Basic"
        },
        {
            image: "/image/c.png",
            title: "C Language",
            level: "Basic"
        },
        {
            image: "/image/kotlin.png",
            title: "Kotlin",
            level: "Beginner"
        },
        
    ]
    return (
        <div id="myskills" className={`container d-flex flex-column align-items-center mt-5 pt-3`} data-aos='fade-up'>
            <h1 style={{ color: "#01579b" }} className='fw-bolder' data-aos='fade' >Skills</h1>
            <p data-aos='fade-up' className='text-center'>The skills I have learned can be clicked or hovered to view my self-evaluation.</p>
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