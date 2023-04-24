import React from "react";
import {Form, Row, Col} from 'react-bootstrap';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: this.props.profiles
        }
    }

    render() {
        return (
            <div className='profiles'>
                <h2>Поля</h2>
                <Form>
                    {this.props.profiles.map((profile, index) => (
                        <Row className="mb-3" key={profile.id}>
                            <Form.Group as={Col} className="mb-3" controlId={profile.columnName}>
                                {profile.columnName === 'name' && <Form.Label>Название</Form.Label>}
                                {profile.columnName === 'title' && <Form.Label>Заголовок</Form.Label>}
                                {profile.columnName === 'author' && <Form.Label>Автор</Form.Label>}
                                {profile.columnName === 'description' && <Form.Label>Описание</Form.Label>}
                                {profile.columnName === 'price' && <Form.Label>Цена</Form.Label>}
                                <Form.Control type="hidden" value={profile.columnName}/>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId={profile.columnName}>
                                <Form.Check type="switch" label="Видимый" id={profile.id}
                                            onChange={(e) => {
                                                this.props.onUpdate({
                                                    id: profile.id,
                                                    columnName: profile.columnName,
                                                    isVisible: e.target.checked
                                                })
                                            }}
                                            defaultChecked={profile.isVisible}
                                />
                            </Form.Group>
                        </Row>)
                    )}

                </Form>
            </div>
        )
    }

}


export default Profile;