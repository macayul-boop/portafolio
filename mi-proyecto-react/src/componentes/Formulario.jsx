import { useState } from "react"
import InputTexto from "./InputTexto";

function Formulario(){

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [errores, setErrores] = useState({})

    const enviar = (e)=>{
        e.preventDefault()

        let erroresNuevos = {}

        if(nombre.trim.length === 0){
            erroresNuevos.nombre = 'El nombre es obligatorio';
        }

        if(email.trim.length === 0){
            erroresNuevos.email = 'El email es obligatorio';
        }else if(!email.includes('@')){
            erroresNuevos.email = 'Ingresa un email valido';
        }

        if(mensaje.trim.length === 0){
            erroresNuevos.mensaje = 'El mensaje es obligatorio';
        }else if(mensaje.length < 10){
            erroresNuevos.mensaje = 'El mensaje debe tener minimo 10 caracteres'
        }

        setErrores(erroresNuevos)

        if(Object.keys(erroresNuevos).length !== 0){
            console.log("Mensaje enviado con exito")
        }else{
            console.log("Hay un error")
            console.log(erroresNuevos)
        }
    }

    return(
        <form className="w-full p-8 mt-12 border border-gray-300 rounded-2xl ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                 
                <InputTexto 
                   label='Nombre'
                   value={nombre}
                   placeholder='Nombre'
                   onChange={(e)=> setNombre(e.target.value)}
                />              
                
                <InputTexto 
                   label='Email'
                   value={email}
                   placeholder='example@gmail.com'
                   onChange={(e)=> setEmail(e.target.value)}
                />   
            </div>
            <div className="flex flex-col mb-10">
                <label className="mb-2.5">Mensaje</label>
                <textarea onChange={(e)=> setMensaje(e.target.value)} placeholder="Mensaje" className="border border-gray-300 rounded-lg py-2 px-4 resize-none min-h-50"></textarea>
                {errores.mensaje && <span className="text-red-500">{errores.mensaje}</span>}
            </div>
            <div className="flex justify-center">
                <button onClick={(e)=> enviar(e)} className="bg-blue-700 px-8 py-4 rounded-4xl text-white font-semibold hover:bg-blue-800">Enviar Mensaje</button>
            </div>
        </form>
    )

}

export default Formulario