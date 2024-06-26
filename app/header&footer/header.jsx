'use client'

import Link from "next/link";
import style from "./header.module.css";
import { useState, useEffect } from 'react';

export default function Header() {
    const [menu, setMenu] = useState("เมนู")
    const [dropdown, setDropdown] = useState(false)
    const [showSearch,setShowSearch] = useState(false)
    
    function switchSearch(){
        setShowSearch(switchS => !switchS);
        if(dropdown){
            setDropdown(false)
            setMenu("เมนู")
        }
    }

    function switchDropdown() {
        setDropdown(switchD => !switchD);
        setTimeout(() => {
            setMenu(!dropdown ? <i className="bi bi-x-lg fw-bolder fs-3 " ></i> : "เมนู")
            setShowSearch(false)
        }, 1000)
    }
    useEffect(()=>{
        
    },[])
    return (
        <div className="navbar border-bottom border-3 border-black">
            <div className="container">
                <div className={`d-sm-flex d-none`}>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู1</Link>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู2</Link>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู3</Link>
                </div>

                {/* phone */}
                <div className="d-sm-none ">
                    <button className={`px-3 ${style.dropdown_btn}`}
                        onClick={switchDropdown} >
                        {menu}</button>
                    <div className={` ${style.dropdown_menu} 
                        ${dropdown ? style.show : style.close} border-top border-3 border-black`}>
                        <div className="container">
                            <Link href='#' className="nav-link p-3">เมนู1</Link>
                            <Link href='#' className="nav-link p-3">เมนู3</Link>
                            <Link href='#' className="nav-link  p-3">เมนู4</Link>
                            <Link href='#' className="nav-link p-3">เมนู2</Link>
                            <Link href='#' className="nav-link  p-3">เมนู5</Link>
                            <Link href='#' className="nav-link  p-3">เมนู6</Link>
                            <div className="border-bottom border-black border-3 my-3 mx-3"></div>
                            <div className="d-flex flex-wrap py-3">
                                <Link href="#" className="nav-link col-6 px-3 py-2">เกี่ยวกับฉัน</Link>
                                <Link href="#" className="nav-link col-6 px-3 py-2">ช่วยเหลือ</Link>
                                <Link href="#" className="nav-link col-6 px-3 py-2">เกี่ยวกับฉัน</Link>
                                <Link href="#" className="nav-link col-6 px-3 py-2">เกี่ยวกับฉัน</Link>
                                <Link href="#" className="nav-link col-6 px-3 py-2">เกี่ยวกับฉัน</Link>
                                <Link href="#" className="nav-link col-6 px-3 py-2">เกี่ยวกับฉัน</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/" className="navbar-brand">ptsweb</Link>
                <div className="d-flex d-sm-none">
                    <Link href="#" className="nav-link bi bi-search px-2"
                    onClick={switchSearch}></Link>
                    <div className={`${style.search} border-top border-bottom border-black border-3`}
                        style={{display: showSearch ? "block":"none"}}>
                        <div className={`input-group `}>
                            <input type="text" className="form-control rounded-0 py-3" placeholder="คุณต้องการค้นหาอะไร ?"/>
                            <button className="rounded-0"><i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    <Link href="#" className="nav-link bi bi-github px-2"></Link>
                </div>

                <div className={`d-sm-flex d-none`}>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู4</Link>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู5</Link>
                    <Link href='#' className={`nav-link px-lg-5 px-md-4 px-sm-2`}>เมนู6</Link>
                </div>
            </div>
        </div>
    );
}