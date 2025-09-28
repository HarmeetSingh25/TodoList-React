import { createContext, useState } from 'react'
export const textcontext = createContext()

const Wrapper = ({ children }) => {
    const [data, setdata] = useState([
        { id: 1, Tittle: "fds", iscomplete: false }
    ])
    // console.log(children);


    return (
        <textcontext.Provider value={[data, setdata]}>

            {children}

        </textcontext.Provider >

    )
}

export default Wrapper