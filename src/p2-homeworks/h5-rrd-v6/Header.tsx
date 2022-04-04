import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>pre_junior
                (1-6)
            </NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>junior (7-11)
            </NavLink>
            <NavLink to={PATH.PLUS_JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>plus_junior
                (12-finish)
            </NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
