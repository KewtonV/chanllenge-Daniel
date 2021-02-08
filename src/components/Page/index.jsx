import React from 'react'
import { BsBook } from 'react-icons/bs';
import BookList from '../BookList'
import './styles.css';

function index() {
    return (
        <>
        <header>
            <BsBook color='white' size={30}/>
            <h1>Book Match</h1>
        </header>
        <main>
            <BookList/>
        </main>
        <footer>
            <p>Servnac Challenge React-Typescript CRUD</p>
        </footer>

        </>
    )
}

export default index
