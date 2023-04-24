import React from "react";
import Book from "./Book";
import {Container, Row, Col} from 'react-bootstrap';

class Books extends React.Component {
    profiles = this.props.profiles
    books = this.props.books

    render() {
        if (this.props.books.length > 0)
            return (
                <div className='books' key='books'>
                    <Container>
                        <Row className='books-header'>
                            {this.profiles.map((profile) => {
                                    if (profile.columnName === 'name' && profile.isVisible) {
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Название</Col>
                                    }
                                    if (profile.columnName === 'title') {
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Заголовок</Col>
                                    }
                                    if (profile.columnName === 'author') {
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Автор</Col>
                                    }
                                    if (profile.columnName === 'description') {
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Описание</Col>
                                    }
                                    if (profile.columnName === 'price') {
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Цена</Col>
                                    }
                                }
                            )}
                            <Col></Col>
                        </Row>
                        {
                            this.books.map((book) => (
                                <Book onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={book.id}
                                      book={book} profiles={this.profiles}/>
                            ))
                        }
                    </Container>
                </div>
            )
        else
            return (<div className='books' key='books'>
                <Container>
                    <Row className='books-header'>
                        <p>Книги не найдены</p>
                    </Row>
                </Container>
            </div>)
    }

}


export default Books;