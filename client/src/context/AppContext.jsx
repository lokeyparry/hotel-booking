import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { dummyProperties } from "../assets/data";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL


const AppContext = createContext()

export const AppContextProvider = ({children})=>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const {user}=useUser()
    const {getToken}=useAuth()
    const [properties, setProperties] = useState([])
    const [searchedCities, setSearchedCities] = useState([])
    const [showAgencyReg, setShowAgencyReg] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const [searchQuery,setSearchQuery]=useState("")

    const getProperties = async()=>{
        try {
            const {data}=await axios.get("/api/properties")
            if(data.success){
                setProperties(data.properties)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            
        }
    }
    const getUser = async ()=>{
        try {
            const {data} = await axios.get('/api/user',{headers:{Authorization:`Bearer ${await getToken()}`}})
            if(data.success){
                setIsOwner(data.role==="agencyOwner")
                setSearchedCities(data.recentSearchedCities)
            }else{
                setTimeout(()=>{
                    getUser()
                },5000)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        if(user){
            getUser()
        }
    },[user])
    useEffect(()=>{
        getProperties()
    },[])
    const value = {
        navigate,properties,currency,user,showAgencyReg, setShowAgencyReg,isOwner,getToken,setIsOwner,searchedCities,axios, setSearchedCities,setProperties,searchQuery,setSearchQuery
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)