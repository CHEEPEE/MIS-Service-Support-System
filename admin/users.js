var main = $("#main")[0];

class Users extends React.Component {
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
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Account ID" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                      </div>
                      {/* firstname */}
                      <div className="input-group mb-3">
                       <input type="text" className="form-control" placeholder="First Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* Middlename */}
                     <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Middle Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>
                    {/* lastname */}
                    <div className="input-group mb-3">
                     <input type="text" className="form-control" placeholder="Last Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect04" required>
                        <option value="">Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect04" required>
                        <option value="">Designation</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                      </select>
                    </div>
                    <div className="input-group mb-3">
                      <select className="custom-select" id="inputGroupSelect04" required>
                        <option value="">Position</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                      </select>
                    </div>
                    {/* contact Number */}
                    <div className="input-group mb-3">
                     <input type="contact" className="form-control" placeholder="Contact Number" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                    </div>

                  </div>

                   <div className = "col-sm-6">
                     {/* username */}
                     <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* password */}
                     <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     <div className="input-group mb-3">
                      <input type="date" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* status */}
                     <div className="input-group mb-3">
                       <select className="custom-select" id="inputGroupSelect04" required>
                         <option value="">Status</option>
                         <option value="1">Single</option>
                         <option value="2">Double</option>
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
