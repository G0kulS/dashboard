import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";


function User()
{     let user = useContext(UserContext);
      return  <> 
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 className="h3 mb-0 text-gray-800">User's List</h1>
        <Link to ="/createuser"><button className="btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-user"></i> Create user</button></Link>
        </div>  
                      <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div> 
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>User ID</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           user.userlist.map((i)=>{
                                               return <tr>
                                               <td>{i.name}</td>
                                               <td>{i.position}</td>
                                               <td>{i.location}</td>
                                               <td>{i.age}</td>
                                               <td>12/1/2020</td>
                                               <td>{i.salary}</td>
                                               <td>{i.id}</td>
                                               <td><Link to ={"/edit-user/"+i.id}><button class="btn btn-primary" onClick={()=>{
                                                   user.cc(i.id-1);
                                               }}>Edit</button></Link></td>
                                           </tr> 
                                              }
                                           )  
                                         } 
                                        
                                        </tbody>
                                        </table>
                                        </div>
                                        </div>
         </div>
         </> 
}

export default User;