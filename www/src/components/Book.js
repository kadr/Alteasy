import React from "react";
import {IoTrashOutline, IoPencil} from 'react-icons/io5'
import {Row, Col} from 'react-bootstrap';
import AddBook from "./AddBook";

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }

    render() {
        return (
            <Row>
                {this.props.profiles.map((profile) => {
                        if (profile.columnName === 'name')
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.props.book.name}</Col>

                        if (profile.columnName === 'title')
                            return (<Col id={`book-item-${profile.columnName}`}
                                         key={profile.columnName}
                                         style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.props.book.title}</Col>)
                        if (profile.columnName === 'author')
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.props.book.author}</Col>
                        if (profile.columnName === 'description')
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                                {this.props.book.description}</Col>
                        if (profile.columnName === 'price')
                            return <Col id={`book-item-${profile.columnName}`}
                                        key={profile.columnName}
                                        style={!profile.isVisible ? {visibility: 'hidden'} :
                                            {visibility: 'visible'}}>{this.props.book.price}</Col>
                        return ''
                    }
                )}

                <Col>
                    <IoPencil onClick={() => {
                        this.setState({editForm: !this.state.editForm})
                    }} className='editForm'/>
                    &nbsp;&nbsp;&nbsp;
                    <IoTrashOutline onClick={() => this.props.onDelete(this.props.book.id)} className='deleteForm'/>
                </Col>
                <div>{this.state.editForm &&
                    <AddBook book={this.props.book} onEdit={this.props.onEdit} errors={this.props.errors}/>}</div>
            </Row>

        )
    }


}


export default Book;