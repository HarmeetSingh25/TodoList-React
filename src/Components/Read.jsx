const Read = ({ data, setdata }) => {


    const Data = [...data]

    let Delete = (id) => {
        let FilterTodo = data.filter((value) => {value.id != id })

        setdata(FilterTodo);
    }
    let user = data.map(d => <li key={d.id}>{d.Tittle} | <span className='bg-red-400 cursor-pointer' onClick={() => { Delete(d.id) }}>Delete</span></li>)
    return (
        <div>
            <ol>
                {user}
            </ol>
        </div>
    )
}

export default Read