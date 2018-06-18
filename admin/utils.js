var main = $("#main")[0];

class PositionsList extends React.Component{
  componentDidMount(){
    console.log(this.props.position_id);

  }
  updatePositionName(){
    var updatedPostionName = $("#update-position-name"+this.props.position_id).val();
    var posID = this.props.position_id;
    $.ajax({
      url:'utils/utils_position_update.php',
      method:"POST",
      data:{position_id:this.props.position_id,position_name:updatedPostionName},
      success:function(data){
        console.log(data);
        if (data=="success") {
          fetchPositionList();
          $("#positionModal"+posID).modal('hide');
        }
      }
    });

    console.log(updatedPostionName);
  }
  removePosition(){
    console.log(this.props.position_id);
    $.ajax({
      url:'utils/utils_position_remove.php',
      method:"POST",
      data:{position_id:this.props.position_id},
      success:function(data){
        console.log(data);
        if (data=="success") {
          fetchPositionList();
        }
      }
    });
  }
  render(){
    return(
      <li className="list-group-item rounded border-white bg-light m-1 d-flex justify-content-between align-items-center">
        {this.props.position_name}
        <div class="btn-group btn-group-sm" role="group" aria-label="...">
          <button type="button" class="btn btn-secondary border-primary text-primary bg-light pl-3 pr-3" data-toggle="modal" data-target={"#positionModal"+this.props.position_id}>Update</button>
          <button type="button" onClick={this.removePosition.bind(this)} class="btn btn-secondary border-danger text-danger bg-light">Remove</button>
        </div>
        <div class="modal fade" id={"positionModal"+this.props.position_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Position</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" id={"update-position-name"+this.props.position_id}  className="form-control w-100" aria-describedby="emailHelp" placeholder="Enter Designation" defaultValue = {this.props.position_name}/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick ={this.updatePositionName.bind(this)} class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

class Designation extends React.Component{
  removeDesignation(){
    console.log(this.props.designation_id);
    $.ajax({
      url:'utils/utils_designation_remove.php',
      method:"POST",
      data:{designation_id:this.props.designation_id},
      success:function(data){
        console.log(data);
        if (data=="success") {
          fetchDesignationList();
        }
      }
    });
  }
  updateDesignationName(){
    var updatedDesignationName = $("#update-designation-name"+this.props.designation_id).val();
    var designationID = this.props.designation_id;
    $.ajax({
      url:'utils/utils_designation_update.php',
      method:"POST",
      data:{designation_id:this.props.designation_id,designation_name:updatedDesignationName},
      success:function(data){
        console.log(data);
        if (data=="success") {
          fetchDesignationList();
          $("#designationModal"+designationID).modal('hide');
        }
      }
    });
  }
  render(){
    return(
      <li className="list-group-item rounded border-white bg-light m-1 d-flex justify-content-between align-items-center">
        {this.props.designation_name}
        <div class="btn-group btn-group-sm" role="group" aria-label="...">
          <button type="button" class="btn btn-secondary border-primary text-primary bg-light pl-3 pr-3" data-toggle="modal" data-target={"#designationModal"+this.props.designation_id}>Update</button>
          <button type="button" onClick = {this.removeDesignation.bind(this)} class="btn btn-secondary border-danger text-danger bg-light">Remove</button>
        </div>
        <div class="modal fade" id={"designationModal"+this.props.designation_id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Position</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" id={"update-designation-name"+this.props.designation_id}  className="form-control w-100" aria-describedby="emailHelp" placeholder="Enter Designation" defaultValue = {this.props.designation_name}/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick ={this.updateDesignationName.bind(this)} class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
function fetchPositionList(){
  var postionListContainer = $("#postionListContainer")[0];
  $.ajax({
        type: "Post",
        url: "utils/fetch_position_list.php",
        success: function(data) {
               var obj = JSON.parse(data);

               console.log(obj);
               var listItem = obj.map((eventObject) =>
                 <PositionsList key = {eventObject.position_id} position_id = {eventObject.position_id} position_name={eventObject.position_name}/>
               );
               ReactDOM.render(
                 <div className = "list-group w-100 m-3">
                 {listItem}</div>,postionListContainer
               );
        }
      });
}
function fetchDesignationList(){
  var postionListContainer = $("#designationListContainer")[0];
  $.ajax({
        type: "Post",
        url: "utils/fetch_designation_list.php",
        success: function(data) {
               var obj = JSON.parse(data);

               console.log(obj);
               var listItem = obj.map((eventObject) =>
                 <Designation key = {eventObject.designation_id} designation_id={eventObject.designation_id} designation_name={eventObject.designation_name}/>
               );
               ReactDOM.render(
                 <div className = "list-group w-100 m-3">
                 {listItem}</div>,postionListContainer
               );
        }
      });
}

class Utils extends React.Component {
  componentDidMount(){
    fetchPositionList();
    fetchDesignationList();
  }
  removePosition(){

  }
  addPosition(){
    var pos_name = $("#postion-name").val();
    if (pos_name!="") {
      $.ajax({
        url:'utils/utils_position_insert.php',
        method:"POST",
        data:{pos_name:pos_name},
        success:function(data){
          console.log(data);
          if (data=="success") {
            $("#postion-name").val("");
            fetchPositionList();
          }
        }
      });
    }
  }
  addDesignation(){
    var designation_name = $("#designation-name").val();
    if (designation_name!="") {
      $.ajax({
        url:'utils/utils_designation_insert.php',
        method:"POST",
        data:{designation_name:designation_name},
        success:function(data){
          console.log(data);
          if (data=="success") {
            $("#designation-name").val("");
            fetchDesignationList();
          }
        }
      });
    }
  }
  render(){
    return(
      <div className = "row">
        <div className = "col-sm-12 mb-3">
          <h3 className="text-dark font-weight-bold">Utils</h3>
        </div>
            <div className ="col">
              <div class="card border-white">
                <div class="card-body">
                  <div className = "row">
                    <div className ="col-sm-12">
                      <h5 className ="font-weight-bold text-dark">Designation</h5>
                    </div>
                    <div className="col-sm-9">
                      <input type="text" id="designation-name"  className="form-control w-100" aria-describedby="emailHelp" placeholder="Enter Designation"/>
                    </div>
                    <div class="col-sm-3">
                      <button type="button" onClick={this.addDesignation.bind(this)} className="btn btn-success w-100">Add</button>
                    </div>
                  </div>
                  <div id="designationListContainer" className="row">
                  </div>
                </div>
              </div>
            </div>
            <div className ="col">
              <div class="card border-white">
                <div class="card-body">
                  <div className = "row">
                    <div className ="col-sm-12">
                      <h5 className ="font-weight-bold text-dark">Positions</h5>
                    </div>
                    <div className="col-sm-9">
                      <input type="text" id="postion-name"  className="form-control w-100" aria-describedby="emailHelp" placeholder="Enter Position"/>
                    </div>
                    <div class="col-sm-3">
                      <button type="button" className="btn btn-success w-100" onClick={this.addPosition.bind(this)}>Add</button>
                    </div>
                  </div>
                  <div id="postionListContainer" className="row">

                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

function navToUtils(){
  ReactDOM.render(<Utils/>,main);
}
