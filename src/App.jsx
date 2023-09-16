import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookmarks, setbookmarks] = useState([]);
  const [credithour, setcredithour] = useState(0);
  const [remaininghour, setremaininghour] = useState(20);

  const handlebookmarks = (course, credit) => {

    const result = bookmarks.find((element) => element === course);

    const newcredithour = credithour + credit;
    const newremaininghour = remaininghour - credit;



    if (!result) {
      const newbookmarks = [...bookmarks, course];

      if (newcredithour <= 20 && newremaininghour >= 0) {
        setcredithour(newcredithour);
        setbookmarks(newbookmarks);
        setremaininghour(newremaininghour);
      }
      else {
        toast.warn('🦄 You can not added more than 20 credits!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        toast.warn('🦄 Your remaining credit hour is less than 0!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

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

        <div className='flex flex-col flex-col-reverse md:flex-row  gap-10 mt-10'>
          <Courses handlebookmarks={handlebookmarks}></Courses>
          <Bookmarks bookmarks={bookmarks} credithour={credithour} remaininghour={remaininghour}></Bookmarks>
        </div>
        <ToastContainer></ToastContainer>
      </div>


    </>
  )
}

export default App
