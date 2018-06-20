var main = $("#main")[0];

class Option extends React.Component{
  render(){
    return(<option value={this.props.option_value}>{this.props.option_name}</option>);
  }
}


class Users extends React.Component {
  componentDidMount(){
    var designationOptionContainer = $("#select-designation")[0];
    $.ajax({
          type: "Post",
          url: "utils/fetch_designation_list.php",
          success: function(data) {
                 var obj = JSON.parse(data);

                 console.log(obj);
                 var listItem = obj.map((eventObject) =>
                   <Option key = {eventObject.designation_id} option_value={eventObject.designation_id} option_name={eventObject.designation_name}/>
                 );
                 ReactDOM.render(
                  <select className="custom-select" id="input-designation" required>
                   {listItem}</select>,designationOptionContainer
                 );
          }
        });
    var positionOptionContainer = $("#select-position")[0];
    $.ajax({
          type: "Post",
          url: "utils/fetch_position_list.php",
          success: function(data) {
                 var obj = JSON.parse(data);

                 console.log(obj);
                 var listItem = obj.map((eventObject) =>
                   <Option key = {eventObject.position_id} option_value={eventObject.position_id} option_name={eventObject.position_name}/>
                 );
                 ReactDOM.render(
                  <select className="custom-select" id="input-position" required>
                   {listItem}</select>,positionOptionContainer
                 );
          }
        });
  }

  addUser(){
    var fname = $("#fname").val();
    var mname = $("#mname").val();
    var lname = $("#lname").val();
    var gender = $("#select-gender").val();
    var designation = $("#select-designation").val();
    var position = $("#selec-position").val();
    var contactnumber = $("#contact-number").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var date = $("#date").val();
    var status = $("#status").val();

  }
  validateAddUser(){

  }
  fetchDesignationList(){

  }
  render(){
    return(
      <div className = "row">
        <div className = "col-sm-10">
          <h3>User Management</h3>
        </div>
        <div className = "col">
          <div className = "btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Add User</div>
        </div>
        {/* add user modal */}
        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <form>
              <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLongTitle">Add User</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div className="modal-body m-3">
                 <div className = "row ml-1 mb-3">
                   <h5 className = "text-default">User Information</h5>
                 </div>
                 <div className = "row">

                   <div className = "col-sm-6">
                     {/* account id */}
                       {/* <div className="input-group mb-3">
                         <input type="text" className="form-control" placeholder="Account ID" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                       </div> */}
                      {/* firstname */}
                      <div className="input-group mb-3">
                       <input type="text" id="fname" className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* Middlename */}
                     <div className="input-group mb-3">
                      <input type="text" id ="mname" className="form-control" placeholder="Middle Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>
                    {/* lastname */}
                    <div className="input-group mb-3">
                     <input type="text" id="lname" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>
                    {/* gender */}
                    <div className="input-group mb-3">
                      <select className="custom-select" id="select-gender" required>
                        <option value="">Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                    {/* designation */}
                    <div className="input-group mb-3" id="select-designation">

                    </div>
                    {/* position */}
                    <div className="input-group mb-3" id="select-position">

                    </div>
                    {/* contact Number */}
                    <div className="input-group mb-3">
                     <input type="contact" id="contactnumber" className="form-control" placeholder="Contact Number" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>

                  </div>

                   <div className = "col-sm-6">
                     {/* username */}
                     <div className="input-group mb-3">
                      <input type="text" id = "username" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* password */}
                     <div className="input-group mb-3">
                      <input type="password" id ="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* date */}
                     <div className="input-group mb-3">
                      <input type="date" id = "date" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* status */}
                     <div className="input-group mb-3" id="select-status">
                       <select className="custom-select" id="inputGroupSelect04" defaultValue="Status" required>
                         <option value="">Status</option>
                         <option value="singe">Single</option>
                         <option value="2">Married</option>
                       </select>
                     </div>

                   </div>
                 </div>
               </div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="submit" className="btn btn-success">Save changes</button>
               </div>
             </div>
           </form>
          </div>
        </div>
        {/* end add user modal */}
      </div>
    );
  }
}
function navToUsers(){
  ReactDOM.render(<Users/>,main);
}
