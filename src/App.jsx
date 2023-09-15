import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center'>Course Registration </h1>

        <div className='md:flex gap-10 mt-10'>
          <Courses></Courses>
          <Bookmarks></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
