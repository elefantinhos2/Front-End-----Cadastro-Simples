import Card from "../Card"
import "./style.css"
import {useState} from "react"

function List({listContacts,setListContacts}) {


    function handleRemove(descriptionObject) {
        console.log("Item clicado",descriptionObject);
        const teste = listContacts.findIndex((data) => data.name === descriptionObject);
        console.log(teste);
        const filteredData = listContacts.filter((dados,index) =>index !== teste)
        setListContacts(filteredData);
        
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