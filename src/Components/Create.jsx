import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const Create = ({ data, setdata }) => {


    const [Tittle, setTittle] = useState("")
    return (
        <div>
            <form action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    if (Tittle.trim() == "") {
                        console.error("Fill The tittle ");
                        return


                    }
                    const TodoData = {
                        id: nanoid(),
                        Tittle,
                        iscomplete: false
                    }
                    const CopyData = [...data]
                    CopyData.push(TodoData)
                    setdata(CopyData)
                    // console.log(data);

                    setTittle("")
                    // console.log(TodoData);

                }}>

                <input
                    className='border'
                    type="text"
                    value={Tittle}
                    placeholder='Enter Todo'
                    onChange={(e) => {
                        setTittle(e.target.value);

                    }} />
                <button>Create Todo</button>

            </form>

        </div>
    )
}

export default Create