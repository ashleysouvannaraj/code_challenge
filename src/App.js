import React from 'react';
import './App.css';
import  Nine  from './components/nine'
import Table from 'react-bootstrap/Table'
import Ten from './components/ten';
import Eleven from './components/eleven';
import Twelve from './components/twelve';
import One from './components/one';
import Two from './components/two';
import Three from './components/three';
import Four from './components/four';
import Five from './components/five';

function App() {
  
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <th>TIME</th>
          <th>AVAILABILITY</th>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td><Nine /></td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td><Ten /></td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td><Eleven /></td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td><Twelve /></td>
          </tr>
          <tr>
            <td>1:00 PM</td>
            <td><One /></td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td><Two /></td>
          </tr>
          <tr>
            <td>3:00 PM</td>
            <td><Three /></td>
          </tr>
          <tr>
            <td>4:00 PM</td>
            <td><Four /></td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td><Five /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
