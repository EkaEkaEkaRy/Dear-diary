import { useLocation } from "react-router-dom"
import p from "./profile.module.css"
import Main from '../main_page/main'
import Header from './profile_comp/header_p'
import Person from './profile_comp/person'
import Level from './profile_comp/level'
import Settings from './profile_comp/settings'
import History from './profile_comp/history'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"


const Profile = () => {
    const navigate = useNavigate();
    if (localStorage.getItem('userMailId') === 'unknown_user' || localStorage.getItem('userMailId') === null) navigate('/Start')
    else
    return (
        <div className={p.app_wrapper}>
            <Header className={p.header}/>
            <main className={p.main}>
                <Person name={localStorage.getItem('userNameId')} />
                <div className={p.content_wrapper}>
                    <div className={p.wrapper1}>
                        <Level scale={localStorage.getItem('userLevelId')}/>
                        <History />
                        
                    </div>
                    <div className={p.wrapper1}>
                    <Settings />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile