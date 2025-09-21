import { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {
  const [data, setdata] = useState([
    { id: 1, Tittle: "fds", iscomplete: false }
  ])
  // console.log(data);

  return (
    <div>
      <Create data={data} setdata={setdata} />
      <Read data={data} setdata={setdata} />
    </div>
  )
}

export default App