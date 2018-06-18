var main = $("#main")[0];

class EquipmentInventory extends React.Component{
  equipmentInsert(){
    var equipmentId = $("#equipmentId").val();
    var equipmentName = $('#equipmentName').val();
    console.log(equipmentId+" "+equipmentName);
    $.ajax({
      url:'equipment/equipment_insert.php',
      method:"POST",
      data:{equipment_id:equipmentId,
      equipment_name:equipmentName},
      success:function(data){
        console.log("success");
      }
    });
  }
  render(){
    return(
      <div className = "row">
        <div className = "col-sm-10">
          <h3>Equipment Management</h3>
        </div>
        <div className = "col">
          <div className = "btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Add Equipment</div>
        </div>
        {/* add equipment modal */}
        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
              <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title" id="exampleModalLongTitle">Add Equipment</h5>
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div className="modal-body m-3">
                 <div className = "row ml-1 mb-3">
                   <h5 className = "text-default">Equipment Information</h5>
                 </div>
                 <div className = "row">
                   <div className = "col-sm-6">
                      {/* Equipment id */}
                      <form action="equipment/equipment_insert.php" method="post">
                        <div className="input-group mb-3">
                          <input name="equipment_id" id="equipmentId" value ="Test" type="text" className="form-control" placeholder="Equipment ID" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                        </div>
                        {/* Name */}
                        <div className="input-group mb-3">
                          <input name ="equipment_name" id = "equipmentName" value="test" type="text" className="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                        </div>
                       <button type="submit" className="btn btn-success">Save changes</button>
                      </form>
                      {/* Office Name */}
                      <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect04" required>
                          <option value="">Office Name</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                        </select>
                      </div>

                      {/* Equipment Description */}
                      <div class="input-group mb-3">
                        <textarea class="form-control" placeholder ="Equipment Description" aria-label="With textarea"></textarea>
                      </div>
                  </div>

                   <div className = "col-sm-6">
                     {/* Equipment Status */}
                     <div className="input-group mb-3">
                       <select className="custom-select" id="inputGroupSelect04" required>
                         <option value="">Equipment Status</option>
                         <option value="1">Available</option>
                         <option value="2">Taken</option>
                       </select>
                     </div>
                     {/* Borrow Status */}
                     <div className="input-group mb-3">
                       <select className="custom-select" id="inputGroupSelect04" required>
                         <option value="">Borrow Status</option>
                         <option value="1">Available</option>
                         <option value="2">Taken</option>
                       </select>
                     </div>
                     {/* Scheduled Maintenace */}
                     <div className="input-group mb-3">
                      <input type="date" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                     </div>
                     {/* Assigned ICT Staff */}
                     <div className="input-group mb-3">
                       <select className="custom-select" id="inputGroupSelect04" required>
                         <option value="">Assigned ICT Staff</option>
                         <option value="1">Available</option>
                         <option value="2">Taken</option>
                       </select>
                     </div>

                   </div>
                 </div>
               </div>
               <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                 <button type="button" onClick={this.equipmentInsert.bind(this)} className="btn btn-success">Save changes</button>
               </div>
             </div>
          </div>
        </div>
        {/* end add user modal */}
      </div>
    );
  }
}

function navToEquipments(){
  ReactDOM.render(<EquipmentInventory/>,main);
}
