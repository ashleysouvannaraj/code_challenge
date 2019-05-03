import React, {Component} from 'react';
import Modal from 'react-modal';

class Five extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showModal: false,
        name: '',
        number: ''
      }
      this.handleModal = this.handleModal.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleNumberChange = this.handleNumberChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    
    handleModal = () => {
      this.setState({ showModal: true });

    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({showModal: false});
    }
  
    handleNameChange = (e) => {
      this.setState({name: e.target.value});
    }
  
    handleNumberChange = (e) => {
      this.setState({number: e.target.value});
    }

    closeModal = () => {
      this.setState({showModal: false});
    }
  
    render() {
      return(
        <div className="mb-1 align-content-center">
          <button onClick={this.handleModal} name="five" type="button" className={(this.state.name !=='' && this.state.number !== '') ?"btn btn-danger mr-1" : "btn btn-success mr-1"}></button>
          <Modal isOpen={this.state.showModal}>
            <form className="text-center"onSubmit={this.handleSubmit.bind(this)}>
              <label>Name:
                <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
              </label>
              <label>Phone Number:
                <input name="phone" type="tel" placeholder="1112224444" pattern="[0-9]{10}" value={this.state.number} onChange={this.handleNumberChange} />
              </label>
              <input type="submit" value="Submit"/>
            </form>
            <button className="close-button" onClick={this.closeModal}>Close</button>
          </Modal>
      </div>
      );
    }
  }
export default Five;