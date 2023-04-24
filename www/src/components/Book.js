import React from "react";
import {IoTrashOutline, IoPencil} from 'react-icons/io5'
import {Row, Col} from 'react-bootstrap';
import AddBook from "./AddBook";

class Book extends React.Component {
    book = this.props.book
    profiles = this.props.profiles

    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }

    render() {
        return (
            <Row>
                {this.profiles.map((profile) => {
                        if (profile.columnName === 'name' && profile.isVisible) {
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.book.name}</Col>
                        }
                        if (profile.columnName === 'title') {
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.book.title}</Col>
                        }
                        if (profile.columnName === 'author') {
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.book.author}</Col>
                        }
                        if (profile.columnName === 'description') {
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.book.description}</Col>
                        }
                        if (profile.columnName === 'price') {
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} :
                                            {visibility: 'visible'}}>{this.book.price}</Col>
                        }
                    }
                )}

                <Col>
                    <IoPencil onClick={() => {
                        this.setState({editForm: !this.state.editForm})
                    }} className='editForm'/>
                    &nbsp;&nbsp;&nbsp;
                    <IoTrashOutline onClick={() => this.props.onDelete(this.book.id)} className='deleteForm'/>
                </Col>
                <p>{this.state.editForm && <AddBook book={this.book} onEdit={this.props.onEdit}/>}</p>
            </Row>

        )
    }


}


export default Book;