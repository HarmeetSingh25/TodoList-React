import { useContext } from "react"
import { toast } from "react-toastify"
import { textcontext } from "../Wrapper"

const Read = () => {
    const [data, setdata] = useContext(textcontext)

    let Delete = (id) => {
        let FilterTodo = data.filter((value) => { if (value.id != id) return value })

        toast.error(' Deleted Todo !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
        });
        setdata(FilterTodo);
    }
    
    let user = data.map(d =>
        <div key={d.id} className=" bg-amber-100 flex rounded-md px-3  items-center justify-between">
            <label className="flex items-center w-full gap-2">

                <input type="checkbox" className="h-4 w-4 " />
                <li className="    text-xl p-4 w-full" key={d.id}>{d.Tittle}</li>
            </label>
            <span className=' text-xl bg-red-400 cursor-pointer px-2.5 py-2 rounded-md text-amber-50' onClick={() => { Delete(d.id) }}>Delete</span>

        </div>
    )
    return (
        <div className="flex flex-col gap-2" >
            <h1 className="text-5xl decoration-solid underline text-white pb-4"><span className="text-pink-400">Pending </span>Todos</h1>

            <ol className="w-200  h-200 p-5 rounded-md flex  flex-col gap-5 bg-gray-400 mr-20">
                {user}
            </ol>
        </div>
    )
}

export default Read