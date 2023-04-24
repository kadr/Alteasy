import React from "react";
import {Button, Form} from 'react-bootstrap';

class AddBook extends React.Component {
    myForm = ''

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            author: '',
            description: '',
            price: 0,
        }
    }

    render() {
        return (
            <div className='add-book'>
                {this.props.book ? <p className={'title'}>Сохранить книгу</p> :
                    <p className={'title'}>Добавить книгу</p>}
                <Form ref={(form) => {
                    this.myForm = form
                }}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Название"
                                      onChange={(e) => this.setState({name: e.target.value})}
                                      required isInvalid={!!(this.props.errors && this.props.errors.name)}
                                      defaultValue={this.props.book && this.props.book.name}
                        />
                        {this.props.errors && this.props.errors.name &&
                            <Form.Control.Feedback type="invalid">
                                {this.props.errors.name.map((err) => err)}
                            </Form.Control.Feedback>

                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Control type="text" placeholder="Заголовок" size='20'
                                      onChange={(e) => this.setState({title: e.target.value})} required
                                      isInvalid={!!(this.props.errors && this.props.errors.title)}
                                      defaultValue={this.props.book && this.props.book.title}/>
                        {this.props.errors && this.props.errors.title &&
                            <Form.Control.Feedback type="invalid">
                                {this.props.errors.title.map((err) => err)}
                            </Form.Control.Feedback>

                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="author">
                        <Form.Control type="text" placeholder="Автор" size='50'
                                      onChange={(e) => this.setState({author: e.target.value})} required
                                      isInvalid={!!(this.props.errors && this.props.errors.author)}
                                      defaultValue={this.props.book && this.props.book.author}/>
                        {this.props.errors && this.props.errors.author &&
                            <Form.Control.Feedback type="invalid">
                                {this.props.errors.author.map((err) => err)}
                            </Form.Control.Feedback>

                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={5} placeholder='Описание'
                                      onChange={(e) => this.setState({description: e.target.value})}
                                      defaultValue={this.props.book && this.props.book.description}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Control type="number" placeholder="Цена"
                                      onChange={(e) => this.setState({price: e.target.value})} required
                                      isInvalid={!!(this.props.errors && this.props.errors.price)}
                                      defaultValue={this.props.book && this.props.book.price}/>
                        {this.props.errors && this.props.errors.price &&
                            <Form.Control.Feedback type="invalid">
                                {this.props.errors.price.map((err) => err)}
                            </Form.Control.Feedback>

                        }
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={() => {
                        if (!this.props.errors)
                            this.myForm.reset()
                        else
                            this.myForm.reset()
                        this.book = {
                            name: this.state.name,
                            title: this.state.title,
                            author: this.state.author,
                            description: this.state.description,
                            price: this.state.price,
                        }
                        if (this.props.book) {
                            this.book.id = this.props.book.id
                            this.props.onEdit(this.book)
                        } else
                            this.props.onAdd(this.book)
                    }
                    }>{this.props.book ? 'Сохранить' : 'Добавить'}</Button>
                </Form>
            </div>
        )
    }

}


export default AddBook;