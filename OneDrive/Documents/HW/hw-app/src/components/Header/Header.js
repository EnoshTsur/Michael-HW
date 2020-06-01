import React from 'react'

import Logo from '../../components/Header/gif/succes.gif'
import Logo2 from '../../components/Header/gif/signup.gif'

export default function Header({ company, }) {

    const style = {
        textAlign:'center',
        color:!!company ? 'darkgreen' : 'darkbrown',
        padding:'1rem',
        backgroundColor: !!company ? 'lightgreen' : 'red',
        borderRadius:'7px'
    }
    

    return (
        <div style = {style} >{
            !!company ? (
                <div>
                    <h1>{`hello your company goes by the name : ${company.name}`}</h1>
                    <p>{`your email is : ${company.email}`}</p>
                    <p>{`your password is : ${company.password}`}</p>
                    <img src= {Logo} alt="succes"/>
                </div>
            ) :
                (
                    <div style = {style}>
                        <h1>hello guest , please sign up</h1>
                        <img src={Logo2} alt="signup"/>
                    </div>
                )
        }
        </div>
    )

}