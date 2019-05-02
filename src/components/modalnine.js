import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {connect} from 'react-redux'

class ModalNine extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            number: '',
        }
    }

    

    handleNameChange = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.value
        })
        localStorage.setItem("name", "")

    }

    handleNumberChange = (e) => {
        e.preventDefault()
        this.setState({
            number: e.target.value
        })
        localStorage.setItem("number", "")

    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    


    render() {

        return (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id="nine"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                USER INFO
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Control type="text" 
                                  placeholder="NAME" 
                                  value={this.state.name}
                                  onChange={this.handleNameChange}
                                  /> <br />
                    <Form.Control type="text" 
                                  placeholder="PHONE NUMBER" 
                                  value={this.state.number}
                                  onChange={this.handleNumberChange}
                                  /> <br />
                    <Button type="submit" onClick={this.props.onHide}>Save</Button>
                </Form>
            </Modal.Body>
          </Modal>
        )
    }

}
        let mapDispatchToProps = (dispatch) => {
            return {
                name: (name) => dispatch({type: "ADD", name: name }),
                number: (number) => dispatch({type: "ADD", number: number})
            }
        }

export default connect(null,mapDispatchToProps)(ModalNine)