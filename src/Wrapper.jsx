import  { createContext, useState } from 'react'
export const textcontext = createContext()

const Wrapper = (props) => {
    const [data, setdata] = useState([
        { id: 1, Tittle: "fds", iscomplete: false }
    ])
    
    return (
        <textcontext.Provider value={[data, setdata]}>
          
            {props.children}

        </textcontext.Provider >

    )
}

export default Wrapper