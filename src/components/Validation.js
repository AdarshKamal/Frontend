import React from "react";
import Layout from "./Layout/Layout";
import { useAuth } from "../context/auth";
import UserMenu from "./Layout/UserMenu";
const HomePage= () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <UserMenu/>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
       
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage