// import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css"

import { useHistory, useParams } from "react-router-dom";
import FormContact from "../../FormContact";
import { useState } from "react";
import Condicional from "../../Condicional";

function User({users, setUsers}) {

    const [listContacts, setListContacts] = useState([
        { name: "Douglas", email: "douglas@email.com", phone_number: "209301-129" },
    ]);

    const params = useParams();
    const history = useHistory();


    const handleClick = () => {

        history.push("/Form");
    }

    const UserSelecionado = users.filter((users) => users.name  === params.name);
        
    const user = (UserSelecionado[0])

    console.log(user)

    return (
        <>  
            <header className="Cabecalho">
                <span>
                    <h1 className='color_Agenda'>Agenda</h1>
                    <h1 className='color_Kenzie'>Kenzie</h1>
                </span>
                <button>Inicio</button>
            </header>
            <main className='Home'>
                <section className="userInfo">
                    <h2>Bem Vindo {params.name}</h2>
                    <ul>
                        <li>
                            Usuario: {user.name}
                        </li>
                        <li>
                            E-mail: {user.email}
                        </li>
                    </ul>
                </section>
                <div className="mainPage">
                    <section className='entradaDados'>
                        <FormContact listContacts={listContacts} setListContacts={setListContacts}/>
                    </section>
                    <section>
                    {/*} <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>*/}
                        <Condicional listContacts={listContacts} setListContacts={setListContacts}/>
                    </section>
                </div>
            </main>
            <button onClick={() => handleClick()}>Voltar</button>
        </>
    );
}

export default User;
// scheduled with Nikolle Lima Marques

// 09:30 - 10:00, Monday, October 10, 2022