import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

const ModalProvider = ({children}) => {
    const [data, setData] = useState(null)
    const [countOfProduct, setCountOfProduct ] = useState(0)

    return (
        <ModalContext.Provider value={{data, setData, countOfProduct, setCountOfProduct}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext)
}

export default ModalProvider;