import React, { useContext } from "react";
import UserContext from "./usercontext";

function Edituser()
{ 
    let user = useContext(UserContext);
  return <div class="container">
      <form class="row g-3"><div class="col-md-6">
        <label for="fname" class="form-label">Name</label>
        <input type="fname" class="form-control" id="inputEmail4" value={user.userlist[user.c].name}/>
        </div>
   <div class="col-md-6">
     <label for="sname" class="form-label">Position</label>
     <input type="text" class="form-control" id="sname" value={user.userlist[user.c].position} />
   </div>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Office</label>
     <input type="text" class="form-control" id="inputEmail4" value={user.userlist[user.c].location}/>
   </div>
   <div class="col-md-6">
     <label for="inputPosition" class="form-label">Age</label>
     <input type="text" class="form-control" id="inputPosition" value={user.userlist[user.c].age}/>
   </div>
   <div class="col-6">
     <label for="inputAddress" class="form-label">Salary</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="₹" value={user.userlist[user.c].salary}/>
     <br/>
   </div>
   </form>
     </div>
 }
 export default Edituser;