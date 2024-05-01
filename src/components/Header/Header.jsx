import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
     <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>
                find book of your choice
            </h2><br />
            <p className='header-text fs-18 fw-3'>
            Welcome to our book library homepage, where you can explore a vast collection of books covering various genres, topics, and authors. Whether you're an avid reader or just looking for your next great read, you'll find something to captivate your interest here.
            </p>
            <SearchForm />
        </div>

     </header>
    </div>
  )
}

export default Header
