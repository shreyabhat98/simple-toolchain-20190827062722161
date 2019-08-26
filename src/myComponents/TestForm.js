import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


export class TestForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            // fullName: "Rashmi"
            // fullName: ''
            firstName : null,
            lastName: null,
            CIO: null
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is: ", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        // console.log(event)
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({ value: event.target.value })
    }

    // componentDidMount(){
    //     this.setState({
    //         fullName: "Rashmi"
    //     })
    // }

    render() {
        const {firstName} = this.state
        const {lastName} = this.state
        const {CIO} = this.state
        return (
            <div>
                <h1> Forms and Input </h1>
                <p>Full name is: {firstName}  {lastName}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' value={firstName} placeholder='Your First Name' name='firstName' onChange={this.handleInputChange}/></p>
                    <p><input type='text' value={lastName} placeholder='Your Last Name' name='lastName' onChange={this.handleInputChange}/></p>
                    <p>
                    <label htmlFor="CIO" id="CIO">CIO Approvals:</label>
                                        <select id="CIO" name="CIO" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                    </p>
                    <p><button>Send Message</button></p>
                </form>
            </div>
        );
    }
}

export default TestForm;