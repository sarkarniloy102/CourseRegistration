import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {
  const [bookmarks, setbookmarks] = useState([]);

  const handlebookmarks = course => {

    const result = bookmarks.find((element) => element === course);
    if (!result) {
      const newbookmarks = [...bookmarks, course];
      setbookmarks(newbookmarks)
    }
    else {
      const newbookmarks = [...bookmarks];
      setbookmarks(newbookmarks);
    }




  }
  return (
    <>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center'>Course Registration </h1>

        <div className='md:flex gap-10 mt-10'>
          <Courses handlebookmarks={handlebookmarks}></Courses>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
