const Read = ({ data, setdata }) => {


    const Data = [...data]

    let Delete = (id) => {
        let FilterTodo = data.filter((value) => { if (value.id != id) return value })

        setdata(FilterTodo);
    }
    let user = data.map(d => <li className="flex gap-2 items-center bg-amber-100 justify-between text-xl p-4 rounded-xs" key={d.id}>{d.Tittle}
        <span className=' text-xl bg-red-400 cursor-pointer px-2.5 py-1.5 rounded-md text-amber-50' onClick={() => { Delete(d.id) }}>Delete</span>
    </li>)
    return (
        <div >
            <ol className="w-200  h-200 p-5 rounded-md flex flex-col gap-5 bg-gray-400 mr-20">
                {user}
            </ol>
        </div>
    )
}

export default Read