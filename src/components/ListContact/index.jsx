import Card from "../Card"
// import "./style.css"
import {useState} from "react"

function List({listContacts,setListContacts}) {

    // const [todos, setTodos] = useState(false);
    
    console.log(listContacts);
    // console.log(todos);

    // const lista = [...listContacts];


    // function handleDiplay(filteredData,descriptionObject) {
    //     console.log(filteredData)
    //     const teste = listContacts.find((data) => data.description === descriptionObject);
    //     console.log(teste); 
    //     const newFilteredData = filteredData.filter((dados) =>dados.type === teste.type);
    //     if(todos !== false) {
    //         console.log("Oi")
    //         setTodos(newFilteredData);
    //         console.log(newFilteredData);
    //         console.log(todos)
    //     }
    // }
    

    function handleRemove(descriptionObject) {
        console.log("Item clicado",descriptionObject);
        const teste = listContacts.findIndex((data) => data.name === descriptionObject);
        console.log(teste);
        const filteredData = listContacts.filter((dados,index) =>index !== teste)
        setListContacts(filteredData);
        // handleDiplay(filteredData,descriptionObject)
        
    }
  return (
    <div className="lista">
        <ul>
            {listContacts.map((contact,index) => (
                 <Card contact={contact} key={index} handleRemove={handleRemove} index={index} />
            ))}
        </ul>
    </div>
  )
}

export default List