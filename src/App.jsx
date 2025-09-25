import Create from './Components/Create'
import Read from './Components/Read'
const App = () => {

  // console.log(data);

  return (
    <div className='w-screen h-screen bg-emerald-900 py-10 px-15 gap-5 flex  justify-between'>
      <Create  />
      <Read  />
    </div>
  )
}

export default App