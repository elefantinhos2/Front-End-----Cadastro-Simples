import {useState} from "react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
// import "./style.css"

function FormContact({listContacts, setListContacts}) {
    
    const [name, setName]                 = useState("");
    const [email, setEmail]               = useState("");
    const [phone_number, setPhone_Number] = useState("");

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Campo Obrigatório"),
        email: yup
            .string()
            .required("Campo Obrigatório")
            .email("email não é válido"),
        phone_number: yup
            .string()
            .required("Campo Obrigatório"),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const onRegister = (data) => {
        const objetoData = 
        {
            name: data.name,
            email: data.email,
            phone_number: data.phone_number,
        }
        console.log(objetoData);
        setListContacts([...listContacts, objetoData]);
        setName("");
        setEmail("");
        setPhone_Number("");
        // setListContacts([...listContacts, objetoData]);
        //setSuccess(true)
    };


    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(valorSelect);
    //     const ObjetoData =  {
    //         name: name,
    //         email: email,
    //         phone_number: phone_number,
    //     }
    //     setListTransactions([...listTransactions,ObjetoData]);
    //     setDescription("")
    //     setValue("");
    // }

    
    return (
        <form className="signupForm" onSubmit={handleSubmit(onRegister)}>
        <input type="text" placeholder="Nome" {...register("name")}/>
        {errors.name && <span>{errors.name.message}</span>}
        <input type="text" placeholder="E-mail" {...register("email")}/>
        {errors.email && <span>{errors.email.message}</span>}
        <input type="text" placeholder="Phone-number" {...register("phone_number")}/>
        {errors.phone_number && <span>{errors.name.message}</span>}
        <button type="submit">Cadastrar</button>
    </form>
    )
}

export default FormContact