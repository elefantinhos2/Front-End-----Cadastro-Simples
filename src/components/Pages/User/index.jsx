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
            <header className="App-header">
                <span>
                    <h1 className='color_Nu'>Nu</h1>
                    <h1 className='color_Kenzie'>Kenzie</h1>
                </span>
                <button>Inicio</button>
            </header>
            <main className='Home'>
                <ul>
                    <h2>Bem Vindo {params.name}</h2>
                    <li>
                        Usuario: {user.name}
                    </li>
                    <li>
                        E-mail: {user.email}
                    </li>
                </ul>
                <section className='entradaDados'>
                    <FormContact listContacts={listContacts} setListContacts={setListContacts}/>
                </section>
                <section>
                {/*} <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>*/}
                    <Condicional listContacts={listContacts} setListContacts={setListContacts}/>
                </section>
            </main>
            <button onClick={() => handleClick()}>Voltar</button>
        </>
    );
}

export default User;