import React from "react";

class Attendance extends React.Component{
    render(){
        return(
            <div className="container">
              <div >
              <h5 className="center"><i className="fa fa-check-square-o"></i>
              Select Status</h5>
            <select >
              <option value="">Please select your status</option>
              <option value="1">Present</option>
              <option value="2">Out of Office</option>
              <option value="3">Work From Home</option>
              <option value="4">Sick Leave</option>
              <option value="5">Earned Leave</option>
              <option value="6">Maternity Leave</option>
              <option value="7">Sabbatical Leave</option>
              <option value="8">Optional Holiday</option>
            </select> 
            </div>

            <div >
            <h5 className="center"><i className="fa fa-pencil-square"></i>
              Remark</h5>
              <textarea id="textarea" name="textarea" placeholder="Enter remarks if any"></textarea>           
             </div>

             <div className="center">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                          <i class="material-icons right">send</i>
                        </button>
              </div>
            
          </div>

        );
    }
}
export default Attendance;