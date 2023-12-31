import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";



const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const { login } = useLogin();
    const Navigate = useNavigate();

   
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
      setError("")  
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await login(form.email, form.password)
            Navigate("/");
        }
        catch (err) {
         setError (err.message)
            
            
            alert(err.message)
        }
    }

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col items-center justify-center w-fit h-fit bg-slate-200 rounded-md p-8">
                <h1 className="text-2xl font-bold text-slate-900">Iniciar sesión</h1>
                <form className="flex flex-col w-full mt-4 text-slate-900" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500" 
                        name="email"
                        onChange={handleChange}
                        />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        className="w-full p-2 mt-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-500" 
                        name="password"
                        onChange={handleChange}
                        />
                    <button type="submit" className="w-full p-2 mt-4 bg-slate-500 text-white rounded-md hover:bg-slate-600">Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login;