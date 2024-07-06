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

        if (!showSearch) {
            checkSearch.checked = true;
            checkDrop.checked = false;
            setDropdown(false)
        } else {
            checkSearch.checked = false
        }
    }

    function switchDropdown() {
        const checkDrop = document.getElementById('dropdown')
        const checkSearch = document.getElementById('checkSearch')
        setDropdown(check => !check);
        if (!dropdown) {
            checkDrop.checked = true;
            checkSearch.checked = false;
            setShowSearch(false)
        } else {
            checkDrop.checked = false;
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className={` border-bottom border-3 border-black ${style.header_main} fs-5 position-fixed w-100 top-0 py-2 py-sm-3`}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className={`d-lg-flex d-none col-4`} >
                    <Link href='#main' className={`nav-link px-xl-4 px-md-3 px-sm-2`} style={{whiteSpace:'nowrap'}}>หน้าหลัก</Link>
                    <Link href='#webproject' className={`nav-link px-xl-4 px-md-3 px-sm-2`} style={{whiteSpace:'nowrap'}}>เว็บโปรเจ็ค</Link>
                    <div className={`${style.btn_dropdown_performance}`}>
                        <Link href='#skills' className="px-xl-4 px-md-3 px-sm-2 nav-link" style={{whiteSpace:'nowrap'}}>ทักษะ</Link>
                        {/* <div className={`${style.dropdown_performance}`}>
                            <Link href="#" className="nav-link px-3 py-2">Project in university</Link>
                            <Link href="#" className="nav-link p-3 py-2">Project work</Link>
                            <Link href="#" className="nav-link p-3 py-2">Project all</Link>
                        </div> */}
                    </div>

                </div>

                {/* phone */}
                <div className="d-lg-none d-flex toggler ">
                    <input id="dropdown" type="checkbox" className={`${style.toggle_check}`} />
                    <button className={`${style.toggle}`} onClick={switchDropdown}>
                        <span className={`${style.line} ${style.line_first}`}></span>
                        <span className={`${style.line} ${style.line_second}`}></span>
                        <span className={`${style.line} ${style.line_third}`}></span>
                    </button>
                    <div className={`${style.toggle_menu}`}>
                        <Link href="#main" className={`${style.toggle_item} bi bi-house-fill`} onClick={switchDropdown}></Link>
                        <Link href="#webproject" className={`${style.toggle_item} bi bi-card-heading`} onClick={switchDropdown}></Link>
                        <Link href="#skills" className={`${style.toggle_item} bi bi-rocket-takeoff`} onClick={switchDropdown}></Link>
                        <Link href="#contact" className={`${style.toggle_item} bi bi-person-lines-fill`} onClick={switchDropdown}></Link>
                    </div>
                </div>

                <Link href="/" className={`navbar-brand ${style.header_logo} fs-4 `}>ptsweb</Link>

                <div className="d-flex d-lg-none">
                    <Link href="#" className="nav-link bi bi-search px-2"
                        onClick={switchSearch}></Link>

                </div>

                <div className={`d-lg-flex d-none col-4 justify-content-end`}>
                    <Link href='#' className={`nav-link px-xl-4 px-md-3 px-sm-2`} onClick={switchSearch} style={{whiteSpace:'nowrap'}}>ค้นหา</Link>
                    <Link href='#contact' className={`nav-link px-xl-4 px-md-3 px-sm-2`} style={{whiteSpace:'nowrap'}}>ติดต่อ</Link>
                </div>

                {/* Search */}
                <input id="checkSearch" type="checkbox" className={`${style.checkSearch}`} />
                <div className={`${style.search} border-top border-bottom border-black border-3`}>
                    <div className={`input-group `}>
                        <button className={`bi bi-x-lg ${style.search_btn_close} px-3 fs-2 text-black`} onClick={switchSearch}></button>
                        <input type="text" className="form-control rounded-0 py-3" placeholder="คุณต้องการค้นหาอะไร ?" />
                        <button className={`rounded-0 px-3 ${style.search_btn}`}><i className="bi bi-arrow-right fs-2"></i></button>
                    </div>
                </div>

            </div>
        </div>
    );
}