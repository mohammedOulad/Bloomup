import React, { FormEventHandler, useState } from 'react'
import crypto from 'crypto';

interface IGebruiker {

}

function Gebruiker() {

    const [userid, setUserid] = useState<number>()
    const [Name, setName] = useState<string>("")
    const [Ondernemingsnummer, setOndernemingsnummer] = useState<string>("")
    const [Password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [NewUser, setNewUser] = useState<any[]>([])

    const HandleSumbit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        let rand = Math.floor(Math.random() * 1000)
        setUserid(rand)

        setNewUser((prev: any) => [...prev, { userid, Name, Password }])
    }
    console.log("alle new users", NewUser)

    return (
        <div>
            <form action="" onSubmit={HandleSumbit}>

                <label>Ondernemingsnummer: </label>
                <input type="email" placeholder='Vul je naam in' onChange={(e) => setOndernemingsnummer(e.target.value)} required />

                <label>Email: </label>
                <input type="email" placeholder='Vul je naam in' onChange={(e) => setEmail(e.target.value)} required />

                <label>Usernaam: </label>
                <input type="text" placeholder='Vul je naam in' onChange={(e) => setName(e.target.value)} required />

                <label>Password: </label>
                <input type="text" placeholder='Vul je naam in' onChange={(e) => setPassword(e.target.value)} required />
               
                <input type="submit" value="send" />
            </form>
        </div>
    )
}

export default Gebruiker
