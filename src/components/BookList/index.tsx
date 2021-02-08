import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card'
import { BOOK, BOOKS } from '../../store'
import './styles.css'


function BookList() {
    //book info
    const [Title, setTitle] = useState<string>('')
    const [Description, setDescription] = useState<string>('')
    //redux comunicate
    const books = useSelector((state: BOOKS) => state.Books)
    const dispatch = useDispatch()
    //setting book
    const book = { title: Title, description: Description, read: false };
    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event?.preventDefault();
        if(book.title===''&& book.description===''){
            return
        }else{
        addBook()
        setTitle('')
        setDescription('')
        }
    }

    //dispatch actions
    function addBook() {
        dispatch({ type: 'ADD_BOOK', book })
    }
    function deleteButton(index: number) {
        dispatch({ type: 'DELETE_BOOK', index })

    }
    function editButton(index: number) {
        dispatch({ type: 'UPDATE_BOOK', index })
    }

    return (
        <>
            <form className="FormSection" onSubmit={handleSubmit}>
                <h1> <u>Register your Books</u></h1>
                <label htmlFor="title">
                    title:
                    <input type="text" name='title' onChange={event => setTitle(event.target.value)} value={Title} />
                </label>

                <label htmlFor="Description">
                    Description:
                    <input type="text" name='description' onChange={event => setDescription(event.target.value)} value={Description} />
                </label>

                <button type='submit' >adicionar Livro</button>
            </form>

            <div className="cardSection">
                {books.map((book: BOOK, index: number) => <Card read={book.read} index={index} title={book.title} description={book.description} clickDelete={deleteButton} clickEdit={editButton}/>)}
            </div>
        </>
    )
}

export default BookList;