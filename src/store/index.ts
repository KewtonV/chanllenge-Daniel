import { createStore } from 'redux';


export interface BOOK {
    title: string;
    description?: string;
    read: boolean;
}
export interface BOOKS {
    Books: [BOOK]
}

interface ACTION {
    type: string;
    index: number;
    book: BOOK;

}
const INITIAL_STATE = {
    Books: [
        { title: "Harry Potter and the Philosopher's Stone", 
        description: "Harry Potter is an orphan boy who lives unhappy with his uncles, the Dursleys. He receives a letter containing an invitation to join Hogwarts...", 
        read: false },
        { title: "Lord of the Rings",
         description: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil...",
          read: false },
        
        { title: "Fantastic Beasts", 
        description: "The year is 1926 and Newt Scamander has just completed a global excursion to find and document an extraordinary array of magical creatures...", read: false }
    ]
}


function books(state = INITIAL_STATE, action: ACTION): any {
    switch (action.type) {
        case 'ADD_BOOK':
            return { ...state, Books: [...state.Books, action.book] };
        case 'DELETE_BOOK':
            return {
                Books: state.Books.filter((book, index) => index !== action.index)

            };
        case 'UPDATE_BOOK':
            return {
                Books: state.Books.map((book, idx) => idx === action.index ? { ...book, read: !book.read } : book)
            }
        default:
            return state;
    }
}


const store = createStore(books);

export default store;