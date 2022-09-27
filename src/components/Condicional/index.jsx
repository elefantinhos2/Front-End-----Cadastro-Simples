

import List from "../ListContact";
import ListEmpty from "../ListEmpty";

function Condicional({listContacts,setListContacts}) {
    if(listContacts.length !== 0) {
        return  <List listContacts={listContacts} setListContacts={setListContacts}/>
    } else {
        return <ListEmpty/>
    }
}
export default Condicional;