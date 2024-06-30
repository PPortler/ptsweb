'use client'

import Link from "next/link";
import style from "./header.module.css";
import { useState, useEffect } from 'react';

export default function Header() {
    const [dropdown, setDropdown] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    function switchSearch() {
        const checkDrop = document.getElementById('dropdown')
        const checkSearch = document.getElementById('checkSearch')
        setShowSearch(switchS => !switchS);
     
        if(!showSearch){
            checkSearch.checked = true;
            checkDrop.checked = false;
            setDropdown(false)
        }else{
            checkSearch.checked = false
        }
    }

    function switchDropdown() {
        const checkDrop = document.getElementById('dropdown')
        const checkSearch = document.getElementById('checkSearch')
        setDropdown(check => !check);
        if(!dropdown){
            checkDrop.checked = true;
            checkSearch.checked = false;
            setShowSearch(false)
        }else{
            checkDrop.checked = false;
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className={` border-bottom border-3 border-black ${style.header_main} fs-5 position-sticky top-0 py-2 py-sm-3`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className={`d-sm-flex d-none`} >
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`}>เมนู1</Link>
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`}>เมนู2</Link>
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`}>เมนู3</Link>
                </div>

                {/* phone */}
                <div className="d-sm-none d-flex">
                    <input id="dropdown" type="checkbox" className={`${style.dropdown_btn}`}/>
                    <button className={`${style.toggle} `} type="checkbox" onClick={switchDropdown}>
                        <span className={`${style.first} ${style.common}`}></span>
                        <span className={`${style.second} ${style.common}`}></span>
                        <span className={`${style.third} ${style.common}`}></span>
                    </button>
                    <div className={` ${style.dropdown_menu} 
                      border-top border-3 border-black`}>
                        <div className="container ">
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

                <Link href="/" className={`navbar-brand ${style.header_logo} fs-4`}>ptsweb</Link>

                <div className="d-flex d-sm-none">
                    <Link href="#" className="nav-link bi bi-search px-2"
                        onClick={switchSearch}></Link>
                    <Link href="#" className="nav-link bi bi-github px-2"></Link>
                </div>

                <div className={`d-sm-flex d-none`}>
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`} onClick={switchSearch}>ค้นหา</Link>
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`}>github</Link>
                    <Link href='#' className={`nav-link px-xl-5 px-md-4 px-sm-2`}>เมนู6</Link>
                </div>

                <input id="checkSearch" type="checkbox" className={`${style.checkSearch}`}/>
                <div className={`${style.search} border-top border-bottom border-black border-3`}>
                    <div className={`input-group `}>
                        <button className={`bi bi-x-lg ${style.search_btn_close} px-3 fs-2`} onClick={switchSearch}></button>
                        <input type="text" className="form-control rounded-0 py-3" placeholder="คุณต้องการค้นหาอะไร ?" />
                        <button className={`rounded-0 px-3 ${style.search_btn}`}><i className="bi bi-arrow-right fs-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}