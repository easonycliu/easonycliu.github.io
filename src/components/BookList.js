import React from "react";
import {getBooks, getBooksByName, getBooksByClassName} from "../services/BookServices.js"
import Book from "./Book.js"

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            classification: this.props.classification,
            books:[]
        };
    };

    componentDidMount() {
        if (this.state.classification === 'home') {
            this.setState({
                books: getBooks()
            });
        }
        else {
            this.setState({
                books: getBooksByClassName(this.state.classification)
            });
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.search !== prevState.search) {
            return {
                search: nextProps.search,
                books: getBooksByName(nextProps.search)
            };
        }
        else if (nextProps.classification !== prevState.classification) {
            return {
                classification: nextProps.classification,
                books: getBooksByClassName(nextProps.classification)
            };
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div className='books'>
                <div className='gridcontainer'>
                    {
                        this.state.books.map((element, index) => {
                            return(
                                <Book info={element} key={index}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    };
};