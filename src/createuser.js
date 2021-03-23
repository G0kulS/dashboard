import React from "react";

function Createuser()
{
   return<div class="container"> 
   <form class="row g-3">
   <div class="col-md-6">
     <label for="fname" class="form-label">First Name</label>
     <input type="fname" class="form-control" id="inputEmail4"/>
   </div>
   <div class="col-md-6">
     <label for="sname" class="form-label">Second Name</label>
     <input type="text" class="form-control" id="sname"/>
   </div>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Email</label>
     <input type="email" class="form-control" id="inputEmail4"/>
   </div>
   <div class="col-md-6">
     <label for="inputPosition" class="form-label">Position</label>
     <input type="text" class="form-control" id="inputPosition"/>
   </div>
   <div class="col-12">
     <label for="inputAddress" class="form-label">Address</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
   </div>
   <div class="col-12">
     <label for="inputAddress2" class="form-label">Address 2</label>
     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
   </div>
   <div class="col-md-6">
     <label for="inputCity" class="form-label">City</label>
     <input type="text" class="form-control" id="inputCity"/>
   </div>
   <div class="col-md-4">
   <label for="inputstate" class="form-label">State</label>
     <input type="text" class="form-control" id="inputstate"/>
   </div>
   <div class="col-md-2">
     <label for="inputZip" class="form-label">Zip</label>
     <input type="text" class="form-control" id="inputZip"/>
   </div>
   <div class="col-12">
     <br/>
   </div>
   <div class="col-12">
     <button type="submit" class="btn btn-primary">Create</button>
   </div>
 </form>
 </div>
}
export default Createuser;
