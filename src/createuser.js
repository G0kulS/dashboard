import React, { useContext, useState } from "react";
import UserContext from "./usercontext";

function Createuser()
{  
   let user = useContext(UserContext);
   let [n,uname] = useState("");
   let [pos,upos] = useState("");
   let [loc,uloc] = useState("");
   let [a,uage] = useState("");
   let [sal,usalary] = useState("");
   
   return<div class="container"> 
   <form class="row g-3" onSubmit={(e)=>{
    e.preventDefault();
     user.uid(++user.id);  
     let usr = {
      name : n,
      position : pos,
      location : loc,
      age : a,
      salary :sal,
      id : user.id
    }
     user.uuserlist([...user.userlist,usr]);
     uname("");
     upos("");
     uloc("");
     usalary("");
     uage("");
   }}>
   <div class="col-md-6">
     <label for="fname" class="form-label">Name</label>
     <input type="fname" class="form-control" id="inputEmail4" value={n} onChange={(e)=>{
            uname(e.target.value);
     }}/>
   </div>
   <div class="col-md-6">
     <label for="sname" class="form-label">Position</label>
     <input type="text" class="form-control" id="sname" value={pos} onChange={(e)=>{
            upos(e.target.value);
     }}/>
   </div>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Office</label>
     <input type="text" class="form-control" id="inputEmail4" value={loc} onChange={(e)=>{
            uloc(e.target.value);
     }}/>
   </div>
   <div class="col-md-6">
     <label for="inputPosition" class="form-label">Age</label>
     <input type="text" class="form-control" id="inputPosition" value={a} onChange={(e)=>{
            uage(e.target.value);
     }}/>
   </div>
   <div class="col-6">
     <label for="inputAddress" class="form-label">Salary</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="₹" value={sal} onChange={(e)=>{
            usalary(e.target.value);
     }}/>
     <br/>
   </div>
         <div class="col-6"> 
         </div>
         <button type="submit" class="btn btn-primary">Create</button>
     
 </form>
 </div>
}
export default Createuser;
