import React from "react";
import axios from "axios";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import Profile from "./components/Profiles";

const baseUrl = 'http://localhost:10000'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [],
            books: [],
            errors: {}
        }
        this.addBook = this.addBook.bind(this)
        this.deleteBook = this.deleteBook.bind(this)
        this.editBook = this.editBook.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
    }

    componentDidMount() {
        axios.get(`${baseUrl}/books`).then((resp) => {
            this.setState({books: resp.data})
            this.setState({errors: {}})
        })
        axios.get(`${baseUrl}/profiles`).then((profiles) => {
            let newProfiles = []
            profiles.data.forEach((profile) => {
                newProfiles.push({id: profile.id, columnName: profile.column_name, isVisible: profile.is_visible})
            })
            this.setState({profiles: newProfiles})
        })
    }

    render() {
        return (<div>
                <h1>Магазин книг</h1>
                <main>
                    <Books profiles={this.state.profiles} books={this.state.books} onDelete={this.deleteBook}
                           onEdit={this.editBook} errors={this.state.errors}/>
                </main>
                <aside>
                    <AddBook onAdd={this.addBook} errors={this.state.errors}/>
                    <Profile onUpdate={this.updateProfile} profiles={this.state.profiles}/>
                </aside>
            </div>
        )
    }

    addBook(book) {
        axios.post(`${baseUrl}/books`, book)
            .then((resp) => {
                this.setState({books: [...this.state.books, {...resp.data}], errors: {}})
            })
            .catch(err => {
                if (err.response.status >= 400) {
                    if (err.response.data) {
                        let errors = {}
                        Object.keys(err.response.data).forEach((key) => {
                                errors[key] = []
                                err.response.data[key].forEach((line) => {
                                    errors[key].push(line)
                                })
                            }
                        )
                        this.setState({errors: errors})

                    }
                }

            })
    }

    deleteBook(id) {
        axios.delete(`${baseUrl}/books/${id}`).then((resp) => {
            this.setState({books: this.state.books.filter((book) => book.id !== id)})
        })
    }

    editBook(book) {
        axios.patch(`${baseUrl}/books/${book.id}`, book)
            .then((resp) => {
                let allBooks = this.state.books
                let index = 0
                allBooks.forEach((el, _index) => {
                    if (el.id === book.id)
                        index = _index;
                })
                allBooks[index] = book
                this.setState({books: []}, () => {
                    this.setState({books: [...allBooks], errors: {}})
                })
            })
            .catch(err => {
                if (err.response.status >= 400) {
                    if (err.response.data) {
                        let errors = {}
                        Object.keys(err.response.data).forEach((key) => {
                                errors[key] = []
                                err.response.data[key].forEach((line) => {
                                    errors[key].push(line)
                                })
                            }
                        )
                        this.setState({errors: errors})
                    }
                }

            })

    }

    updateProfile(profile) {
        axios.patch(`${baseUrl}/profiles/${profile.id}`, {is_visible: profile.isVisible}).then(
            (resp) => {
                let _profile = resp.data
                let updatedProfiles = this.state.profiles
                updatedProfiles.forEach((el, index) => {
                    if (el.id === profile.id)
                        updatedProfiles[index].isVisible = _profile.is_visible
                })
                this.setState({profiles: updatedProfiles})
                let bookHeader = document.getElementById(`book-header-${_profile.column_name}`)
                let bookItem = document.getElementById(`book-item-${_profile.column_name}`)
                if (bookItem && bookHeader) {
                    if (!profile.is_visible) {
                        bookHeader.style.setProperty('visibility', 'hidden')
                        bookItem.style.setProperty('visibility', 'hidden')
                    } else {
                        bookHeader.style.setProperty('visibility', 'visible')
                        bookItem.style.setProperty('visibility', 'visible')
                    }
                }
            })
    }
}

export default App;
