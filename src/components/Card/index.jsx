import "./style.css"

function Card({contact,handleRemove, index}) {
 
    const {name, email, phone_number} = contact
    
    console.log(contact)
    return (
        <li id={index} >
            <span>
                <h3>{name}</h3>
                <h4>{email}</h4>
            </span>
           <span className="styleLinha">
                <p>{phone_number}</p>
                <button onClick={() => handleRemove(name)}>Remover</button>
           </span>
        </li>
    )
}

export default Card