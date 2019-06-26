import React from 'react';
import './FriendForm.scss';
import { Modal, ModalHeader, ModalBody, Form, Button, Input, FormGroup } from 'reactstrap';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addFriend: {
                // id: Date.now(),
                name: '',
                age: '',
                email: ''
            },
        }
    }

    toggle = e => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    handleChange = event => {
        this.setState({
            addFriend: {
                ...this.state.addFriend,
                [event.target.name]: event.target.value 
            }
        })
    }

    addFriend = event => {
        event.preventDefault();
        this.props.postFriend(this.state.addFriend)

        this.setState({
            addFriend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return(
            <div className='friend-form'>
                <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.props.toggle}>Add A Friend!</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.addFriend}>
                            <FormGroup>
                                <Input required type='text' name='name' placeholder='Name' onChange={this.handleChange} value={this.state.addFriend.name} />
                            </FormGroup>
                            <FormGroup>
                                <Input required type='text' name='age' placeholder='Age' onChange={this.handleChange} value={this.state.addFriend.age} />
                            </FormGroup>
                            <FormGroup>
                                <Input required type='text' name='email' placeholder='Email' onChange={this.handleChange} value={this.state.addFriend.email} />
                            </FormGroup>
                            <FormGroup>
                                <Button block>Add Friend!</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default FriendForm;