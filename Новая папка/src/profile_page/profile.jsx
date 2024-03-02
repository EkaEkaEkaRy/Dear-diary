import { useLocation } from "react-router-dom"
import p from "./profile.module.css"
import Main from '../main_page/main'
import Header from './profile_comp/header_p'
import Person from './profile_comp/person'
import Level from './profile_comp/level'
import Settings from './profile_comp/settings'
import Calendar from './profile_comp/calendar'
import { useState } from 'react';


const Profile = (props) => {
    const loc = useLocation()
    const {name} = loc.state;
    var scale = props.scale;

    
    return (
        <div className={p.app_wrapper}>
            <Header />
            <main className={p.main}>
                <Person name={name} />
                <div className={p.content_wrapper}>
                    <div className={p.wrapper1}>
                        <Level scale={scale}/>
                        
                        
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