import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [credithour, setcredithour] = useState(0);
  const [remaininghour, setremaininghour] = useState(20);

  const handlebookmarks = (course, credit) => {

    const result = bookmarks.find((element) => element === course);
    if (!result) {
      const newbookmarks = [...bookmarks, course];
      setbookmarks(newbookmarks)

      setcredithour(credithour + credit);
      setremaininghour(remaininghour - credit);
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
          <Bookmarks bookmarks={bookmarks} credithour={credithour} remaininghour={remaininghour}></Bookmarks>
        </div>

      </div>


    </>
  )
}

export default App
