import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProperties } from "../assets/data";
import { useUser } from "@clerk/clerk-react";


const AppContext = createContext()

export const AppContextProvider = ({children})=>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const {user}=useUser()
    const [properties, setProperties] = useState([])
    const [searchedCities, setSearchedCities] = useState([])
    const [showAgencyReg, setShowAgencyReg] = useState(false)
    const [isOwner, setIsOwner] = useState(true)

    const getProperties = ()=>{
        setProperties(dummyProperties)
    }
    useEffect(()=>{
        getProperties()
    },[])
    const value = {
        navigate,properties,currency,user,showAgencyReg, setShowAgencyReg,isOwner,setIsOwner,searchedCities, setSearchedCities
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)