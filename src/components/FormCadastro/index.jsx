// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// function FormCadastro({setUser,setSuccess}) {

//     const history = useHistory();

//     const formSchema = yup.object().shape({
//         name: yup
//             .string()
//             .required("Campo Obrigatório"),
//         email: yup
//             .string()
//             .required("Campo Obrigatório")
//             .email("email não é válido"),
//         phone_number: yup
//             .string()
//             .required("Campo Obrigatório"),
//         senha: yup
//             .string()
//             .required("Campo Obrigatório")
//             .min(8,"Mínimo 8 Caracteres")
//             .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Mínimo de oito caracteres, pelo menos uma letra, um número e um caractere especial"),
//         confirmarSenha: yup.string().oneOf([yup.ref("senha")],"As senhas não coincidem")
//     });

//     const {register, handleSubmit, formState: {errors}} = useForm({
//         resolver: yupResolver(formSchema)
//     });


//     const onRegister = (data) => {
//         console.log(data);
//         setUser(data);
//     };

//     const handleClick = () => {
//         setSuccess(false)
//         history.push("/");
//     }

//     return(
//         <>
//             <h1>Formulario Cadastro</h1>
//             <form onSubmit={handleSubmit(onRegister)}>
//                 <input type="text" placeholder="Nome" {...register("name")}/>
//                 <input type="text" placeholder="E-mail" {...register("email")}/>
//                 <input type="text" placeholder="Phone-number" {...register("phone_number")}/>
//                 <input type="password" placeholder="Senha" {...register("senha")}/>
//                 <input type="password" placeholder="Confirmar Senha" {...register("confirmarSenha")}/>
//                 <button type="submit">No</button>
//             </form>
//             <button onClick={() => handleClick()}>Voltar</button>
//         </>
//     );
// }

// export default FormCadastro;