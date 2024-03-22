import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookmar] = useState([])
  const handleBookMark =(blog)=>{
    const newBookMark = [...bookmarks, blog]
    setBookmar(newBookMark)
  }
  const [readingTime, setReadingTime] = useState(0)
  const handleMakeAdRead = (time)=>{
    const newReadingTime = (readingTime + time)
    setReadingTime(newReadingTime)
    console.log(readingTime)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-5'>
        <Blogs 
        handleBookMark={handleBookMark} 
        handleMakeAdRead={handleMakeAdRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
