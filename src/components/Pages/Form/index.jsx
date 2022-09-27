import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./style.css"
import { useState } from "react";

function Form({setUserObject, users , setUsers}) {

    const [name, setName]                = useState("");
    const [email, setEmail]              = useState("");
    const [phone_number,setPhone_Number] = useState("");
    const [password, setPassword]        = useState("");
    

    const history = useHistory();

    const handleClickReturnLogin = () => {
        return history.push("/login");
    }

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
        senha: yup
            .string()
            .required("Campo Obrigatório")
            .min(8,"Mínimo 8 Caracteres")
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"),
        confirmarSenha: yup.string().oneOf([yup.ref("senha")],"As senhas não coincidem")
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
            password: data.senha,
            contact: []
        }
        console.log(objetoData);
        setUsers([...users,objetoData])
        setName("");
        setEmail("");
        setPhone_Number("");
        setPassword("");
        setUserObject(data);
        history.push(`/Form/success/${data.name}`)
        //setSuccess(true)
    };
    

    return(
        <>
            <div className="centro">
                    <div className="signupTitle">
                        <h2>Agenda Online</h2>
                        <button onClick={() => handleClickReturnLogin()}>
                            <p>Voltar</p>
                        </button>
                    </div>
                    <form className="signupForm" onSubmit={handleSubmit(onRegister)}>
                        <input type="text" placeholder="Nome" {...register("name")}/>
                        {errors.name && <span>{errors.name.message}</span>}
                        <input type="text" placeholder="E-mail" {...register("email")}/>
                        {errors.email && <span>{errors.email.message}</span>}
                        <input type="text" placeholder="Phone-number" {...register("phone_number")}/>
                        {errors.phone_number && <span>{errors.name.message}</span>}
                        <input type="password" placeholder="Senha" {...register("senha")}/>
                        {errors.senha && <span>{errors.senha.message}</span>}
                        <input type="password" placeholder="Confirmar Senha" {...register("confirmarSenha")}/>
                        {errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}
                        <button type="submit">Cadastrar</button>
                    </form>
            </div>
        </>
    );
}

export default Form;