import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';


export class Form extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            CIO: null,
            BU: null,
            team: null,
            requester: null

        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is: ", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value,
            value: event.target.value
        })
    }

    render() {
        const {team} = this.state
        const {requester} = this.state
        return (
            <div>
                <div className="row">
                   <div className="col"><Header/></div>
                </div>

                <div className="row">
                    <div className="col">
                        <Link to="/newRequest">
                            <button type="Submit" className="btn btn-sm btn-info">Back</button>
                        </Link> <br/> <br/>
                    </div>
                </div>

                <form className="needs-validation" novalidate onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="card-group">
                                <div className="card">                                    
                                    <div className="card-body">  

                                        <label htmlFor="CIO" id="CIO">CIO Approvals:</label>
                                        <select className="form-control" id="CIO" name="CIO" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    
                                        
                                        <br></br>
                                        <label htmlFor="BU">Business Area</label>
                                        <select className="form-control" id="BU" name="BU" onChange={this.handleInputChange}>
                                            <option value="" disabled selected>Select your option</option>
                                            <option value="Technology-Controls">Technology-Controls</option>
                                            <option value="Technology-CPB">Technology-CPB</option>
                                            <option value="Technology-CTO">Technology-CTO</option>
                                            <option value="Technology-DES">Technology-DES</option>
                                            <option value="Technology-ES">Technology-ES</option>
                                            <option value="Technology-PBB">Technology-PBB</option>
                                            <option value="Technology-Core Banking">Technology-Core Banking</option>
                                            <option value="Technology-Payments">Technology-Payments</option>
                                            <option value="Technology-PBM">Technology-PBM</option>
                                            <option value="Technology-NWM P2">Technology-NWM P2</option>
                                        </select>
                                        <br></br>
                                        
                                        <label htmlFor="team">Team</label>
                                        <input type="text" id="team" name="team" value={team} className="form-control"
                                         required></input>
                                        <br/>

                                        <label htmlFor="requester" required>Requester</label>
                                        <input type="text" id="requester" className="form-control" 
                                        required name="requester" value={requester}></input>
                                        <br></br>

                                        <label htmlFor="resourceType" >Resource Type</label>
                                        <select className="form-control" id="resourceType">
                                            <option value="" disabled selected>Select your option</option>
                                            <option>Managed Services</option>
                                            <option>Contractor</option>
                                        </select> 
                                        <br></br>

                                        <label htmlFor="requesType" >Resource Type</label>
                                        <select className="form-control" id="requestType">
                                            <option value="" disabled selected>Select your option</option>
                                            <option>New</option>
                                            <option>Extension</option>
                                            <option>Replacement</option>
                                        </select> 
                                        <br></br>

                                <label htmlFor="duration" >Duration of Engagement (in Months)</label>
                                <input type="number" id="duration" className="form-control"></input>
                                <br></br>

                                <label htmlFor="tenure" >Tenure of Resource (in Months)</label>
                                <input type="number" id="tenure" className="form-control"></input>
                                <br></br>

                                <label htmlFor="peopleID" >Extension/Rebalancing/Replacement (PeopleSoft ID)</label>
                                <input type="text" id="peopleID" className="form-control"></input>
                                <br></br>

                                <label htmlFor="exitDate" >Replacement Exit Date</label>
                                <input type="date" id="exitDate" className="form-control"></input>
                                <br></br>

                                <label htmlFor="roleTitle" >Role Title</label>
                                <input type="text" id="roleTitle" className="form-control" required></input>
                                <br></br>

                                <label htmlFor="location" >Location</label>
                                    <select className="form-control" id="location">
                                    <option value="" disabled selected>Select your option</option>
                                     <option>Gurugram</option>
                                     <option>Bengaluru</option>
                                     <option>Chennai</option>
                                     <option>New Delhi</option>
                                     <option>Off-Site</option>
                                    </select> 
                                <br></br>

                                <label htmlFor="justification" >What is the Role for? (Justification)</label>
                                <textarea className="form-control rounded-0" id="justification" required></textarea>
                                <br></br>
                            </div>
                    </div>
                </div>
                        </div>


                        <div class="col">
                        <div className="card-group">
                    <div className="card">
                        
                            <div className="card-body">
                                <form>
                                    <label htmlFor="costCentre" >Cost Centre</label>
                                    <input type="text" id="costCentre" 
                                    className="form-control" required></input>
                                    <br></br>

                                    <label htmlFor="runChange" id="runChange" >Run / Change</label>
                                    <select className="form-control" id="resourceType" >
                                     <option value="" disabled selected>Select your option</option>
                                     <option>Run</option>
                                     <option>Change</option>
                                    </select> 
                                    <br></br>

                                    <label htmlFor="runBudget" >Within Budget/Target? (if run)</label>
                                    <input type="text" id="runBudget" className="form-control" ></input>
                                    <br></br>

                                    <label htmlFor="documentCase" >Document Business case aligned to (if change)</label>
                                    <input type="text" id="documentCase" className="form-control" ></input>
                                    <br></br>

                                    <label htmlFor="lineID" >Line Manager ID</label>
                                    <input type="text" id="lineID" className="form-control" required></input>
                                    <br></br>

                                    <label htmlFor="supplier" >Supplier</label>
                                    <input type="text" id="supplier" className="form-control"></input>
                                    <br></br>

                                    <label htmlFor="project" >Programme/Project</label>
                                    <input type="text" id="project" className="form-control" required></input>
                                    <br></br>

                                    <label htmlFor="tecmis" >TechMis/Oracle</label>
                                    <input type="text" id="tecmis" className="form-control"></input>
                                    <br></br>

                                    <label htmlFor="projectCategory" >Project Categorization</label>
                                    <input type="text" id="projectCategory" className="form-control"></input>
                                    <br></br>

                                    <label htmlFor="SOW" id="SOW">Does this Request have a clearly defined SOW?</label>
                                    <select className="form-control" id="sow">
                                     <option value="" disabled selected>Select your option</option>
                                     <option>Yes</option>
                                     <option>No</option>
                                    </select>
                                    <br/>

                                    <label htmlFor="nonApproval" >Impact of non Approval</label>
                                    <input type="text" id="nonApproval" className="form-control" required></input>
                                    <br></br>

                                    <label htmlFor="criticalResource" >Critical Resource Selection</label>
                                    <input type="text" id="criticalResource" className="form-control"></input>
                                    <br/><br/>

                                   <div className="text-center">
                                       {/* <Link to="/home"> */}
                                       {/* <button type="reset" className="btn btn-dark">Reset</button> */}
                                        <button type="button" className="btn btn-success">
                                            Submit
                                        </button>
                                        {/* </Link> */}
                                   </div>
                                </form>
                            </div>

                    </div>
                   
                </div>
                        </div>
                    </div>
                </form>
                                  
            </div>
        );
    }
}

export default Form;