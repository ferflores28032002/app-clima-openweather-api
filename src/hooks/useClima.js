
import { useDispatch, useSelector } from "react-redux"
import { climaApi } from "../Api/climaApi"
import { addElement, setLoading, setLoadingFalse } from "../store/slices/ClimaSlice"
import { toast } from 'react-toastify'

export const useClima = () => {


    const { loading, data } = useSelector(state => state.clima)
    const dispatch = useDispatch()


    const climaActual = async ({ busqueda }) => {

        try {

            dispatch( setLoading( ) )
         
            const { data } = await climaApi.get(`/weather?q=${busqueda}&lang=sp&units=metric&appid=${import.meta.env.VITE_APP_LLAVE}`)
        
            dispatch( addElement(data) )
           
               
        } catch (error) {
            
            toast.info("Ciudad no encontrada", { position: "bottom-right"})

            dispatch( setLoadingFalse() )
        }

    } 





    return {
        
        // Atributos 
        data, 
        loading,



        // Métodos
        climaActual



    }
}