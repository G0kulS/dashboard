import React, { useState }  from "react";

const UserContext = React.createContext();

export default UserContext;

export const UserProvider =   ({children}) => {
    let [userlist,uuserlist]= useState([]);
    let [id,uid] = useState(0);
    let [c,cc] = useState(0);
    return <UserContext.Provider value = {{userlist,uuserlist,id,uid,c,cc}}>{children}</UserContext.Provider>
}