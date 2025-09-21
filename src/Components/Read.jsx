import React from 'react'

const Read = ({ data }) => {
    let user = data.map(d => <li key={d.id}>{d.Tittle}</li>)
    return (
        <div>
            <ul>
                {user}
            </ul>
        </div>
    )
}

export default Read