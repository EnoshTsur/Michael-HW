import React from 'react'
import Company from '../../common/Company'

export default function SignUp({setCompany,}){

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    function isValidInput(){
        return ![name,email,password].includes('')

    }

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            / >

            <button 
                disabled={!isValidInput()} 
                onClick={()=> {
                    const company = new Company(name,email,password)
                    setCompany(company)
                }}
            >
            signUp
            </button>

        </div>
    )
}
