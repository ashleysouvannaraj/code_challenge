import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import ModalNine from './modalnine'


class TimeSlots extends Component {
    constructor(...args) {
      super(...args);
  
      this.state = { modalShow: false };
    }
  
    render() {
      let modalClose = () => this.setState({ modalShow: false });
  
      return (
        <Table responsive bordered hover>
            <thead>
                <tr>
                    <th>TIME</th>
                    <th>AVAILABILITY</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9:00 AM</td>
                    <td id="nine" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>10:00 AM</td>
                    <td id="ten" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>11:00 AM</td>
                    <td id="eleven" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>12:00 PM</td>
                    <td id="twelve" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>1:00 PM</td>
                    <td id="one" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>2:00 PM</td>
                    <td id="two" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>3:00 PM</td>
                    <td id="three" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>4:00 PM</td>
                    <td id="four" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
                <tr>
                    <td>5:00 PM</td>
                    <td id="five" onClick={() => this.setState({ modalShow: true })}>OPEN</td>
                </tr>
            </tbody>
            
            <ModalNine
            show={this.state.modalShow}
            onHide={modalClose}
        />
        </Table>
      );
    }
  }

export default TimeSlots; 