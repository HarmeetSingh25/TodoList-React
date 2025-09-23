import { nanoid } from 'nanoid'
import React, { useState } from 'react'

const Create = ({ data, setdata }) => {


    const [Tittle, setTittle] = useState("")
    return (
        <div>
            <form className='flex gap-2 mt-5' action=""
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
                    className='border-0 outline-0 bg-green-50 w-100 text-black p-4 rounded-xs '
                    type="text"
                    value={Tittle}
                    placeholder='Enter Todo'
                    onChange={(e) => {
                        setTittle(e.target.value);

                    }} />
                <button className='bg-amber-400 p-2 rounded-xs'>Create Todo</button>

            </form>

        </div>
    )
}

export default Create