import React from 'react'

import SuccessImg from '../../assets/gif/succes.gif'
import SignUpImg from '../../assets/gif/signup.gif'

export default function Header({ company, }) {

    const style = {
        textAlign:'center',
        color:!!company ? 'darkgreen' : 'darkbrown',
        padding:'1rem',
        backgroundColor: !!company ? 'lightgreen' : 'red',
        borderRadius:'7px'
    }
    
    function Logo() {
    
        return (
            <img 
                src={!!company ? SuccessImg : SignUpImg} 
                alt={!!company ? "success" : "signup"}
            />
        )
    }

    return (
        <div style = {style} >{
            !!company ? (
                <div>
                    <h1>{`hello your company goes by the name : ${company.name}`}</h1>
                    <p>{`your email is : ${company.email}`}</p>
                    <p>{`your password is : ${company.password}`}</p>
                    <Logo />
                </div>
            ) :
                (
                    <div style = {style}>
                        <h1>hello guest , please sign up</h1>
                        <Logo />
                    </div>
                )
        }
        </div>
    )

}
