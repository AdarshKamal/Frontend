import React from "react";
import Layout from "./Layout/Layout";
import { useAuth } from '../context/auth';
import UserMenu from "./Layout/UserMenu";
const Val = ()=>{
    const [auth,setAuth] =useAuth();
    return(
        <Layout>
            
            <div style={{backgroundColor: "red"}}>
            <h1 style={{color: "red"}}>HomePage</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
            </div>
        </Layout>
    )
};
export default Val;