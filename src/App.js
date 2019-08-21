import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      textBox: "",
      gender: "",
      favoriteColor: "none",
      isFriendly: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked})  : this.setState({[name]: value});
    console.log(this.state)
  }

  render() {
    const nameArr = ["firstName", "lastName", "address", "phoneNumber"];
    const placeholderNames = ["First Name", "Last Name", "Address", "Phone Number"]
    const inputs = nameArr.map((name, index) => {
      return (
        <label key={index}> {placeholderNames[index]}: 
          <input type="text" name={name} value={this.state.value} onChange={this.handleChange} placeholder={placeholderNames[index]}></input>
        </label>
      );
    });

    return (
      <div className="App">
        <h3>Name: {this.state.firstName} {this.state.lastName}</h3> 
        <h3>Address: {this.state.address}</h3>
        <h3>Phone Number: {this.state.phoneNumber}</h3>
        <h3>About Me: {this.state.textBox}</h3>
        <h3>Are you friendly? {this.state.isFriendly ? "Yes" : "No"}</h3>
        <h3>Gender: {this.state.gender}</h3>
        <h3>Favorite Color: {this.state.favoriteColor}</h3>
        <form>
          {inputs}
          <textarea name="textBox" value={this.state.textBox} onChange={this.handleChange}></textarea>
          <label>
            <input 
              type="checkbox" 
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            /> Are you friendly?
          </label>
          <label>
            <input 
              type="radio" 
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> Male
          </label>
          <label>
            <input 
              type="radio" 
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> Female
          </label>
          <select name="favoriteColor" value={this.state.favoriteColor} onChange={this.handleChange}>
            <option value="none">None</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          <button>Submit</button>
        </form>

      </div>
    );
  }
}

export default App;
