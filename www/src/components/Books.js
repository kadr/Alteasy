import React from "react";
import Book from "./Book";
import {Container, Row, Col} from 'react-bootstrap';

class Books extends React.Component {
    render() {
        if (this.props.books.length > 0)
            return (
                <div className='books' key='books'>
                    <Container>
                        <Row className='books-header'>
                            {this.props.profiles.map((profile) => {
                                    if (profile.columnName === 'name')
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Название</Col>
                                    if (profile.columnName === 'title')
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Заголовок</Col>
                                    if (profile.columnName === 'author')
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Автор</Col>
                                    if (profile.columnName === 'description')
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Описание</Col>
                                    if (profile.columnName === 'price')
                                        return <Col id={`book-header-${profile.columnName}`}
                                                    key={profile.columnName}
                                                    style={!profile.isVisible ? {visibility: 'hidden'} :
                                                        {visibility: 'visible'}}>Цена</Col>
                                    return ''
                                }
                            )}
                            <Col></Col>
                        </Row>
                        {
                            this.props.books.map((book) => (
                                <Book onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={book.id}
                                      book={book} profiles={this.props.profiles} errors={this.props.errors}/>
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