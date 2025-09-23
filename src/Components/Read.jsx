import React from 'react'

const Read = ({ data }) => {
    let Delete = (id) => {
        let FilterTodo = data.filter((value) => {
            value.id != id ? console.log(value.id, value) : "no match"
            // console.log(value.id);

        })
        // console.log(FilterTodo);

    }
    let user = data.map(d => <li key={d.id}>{d.Tittle} | <span className='"bg-sky-500/10' onClick={() => { Delete(d.id) }}>Delete</span></li>)
    return (
        <div>
            <ol>
                {user}
            </ol>
        </div>
    )
}

export default Read