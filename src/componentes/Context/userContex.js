
import { useState, createContext } from "react"
import  ClienteAxios  from '../config/axios'

export const userContex = createContext()

export const UserProvider = ({children})=>{
   
    const [ Registro, setRegistro ]= useState(false)
    const [ user, setUser] =useState({username:null,email:null,password:null })
    const [ authStatus, setAuthStatus] =useState(false)
    const [ Datos , setDatos] = useState({
        username:'',
        email:'',
        password:''
    });

    const handleInputChange = (e) =>{
        e.preventDefault();
        setDatos({...Datos, [e.target.name]: e.target.value});
    }
    
    const registroUsuario = async(Datos)=>{
        try {
            const res = await ClienteAxios.post('/usuario/crear', Datos)
            localStorage.setItem('token',res.data.token)
            setAuthStatus(true)
            

        } catch (error) {
            console-log (error)
        }
    } 

    const VerifyingToken = async()=>{
        const token = localStorage.getItem('token')
        if(token){
            ClienteAxios.defaults.headers.common['x-auth-token']=token
        } else {
            delete ClienteAxios.defaults.headers.common['x-auth-token']
        }

        try {
            const res = token && ( await ClienteAxios.get('./usuario/verificar') )
            setUser(res.data)
            setAuthStatus(true)
        } catch (error) {
            console-log ('Error en verificacion',error)
       }
    }

    const loginUsuario = async()=>{
        try {
            const res = await ClienteAxios.post('./usuario/login', Datos)
            localStorage.setItem('token', res.data.token)
            setAuthStatus(true)
        } catch (error) {
            console-log (error)
         }
    }
      
    const logout =()=>{
        localStorage.removeItem('token')
        setUser(null)
        setAuthStatus(false)
    }
    
    const data = { registroUsuario, loginUsuario, 
                   handleInputChange,VerifyingToken, 
                   logout, Datos, user, authStatus,Registro,
                   setRegistro,setDatos } 
    return <UserContex.Provider value={data}>{children}</UserContex.Provider>                

}