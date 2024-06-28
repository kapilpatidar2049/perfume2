import React, { useState, useEffect } from "react";
import {fetchUserDataServe} from '../../Service/usersService'
import { useNavigate } from 'react-router-dom';
const Dashboard = ( ) => {
  const navigate = useNavigate();
  const [userDataFetch, setUserDataFetch] = useState({
  f_name: "",
    l_name: "",
    email: "",
    gender: ""
});
useEffect(() => {
  // Ensure navigate is defined before accessing its properties
  if (navigate && navigate.location && navigate.location.pathname) {
    const isDashboard = navigate.location.pathname === '/loginDashboard';
    if (isDashboard) {
      
      window.location.reload();
    }
  }
}, [navigate]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDataServe();
        console.log(response.data, 'serv..res');
      //  var arrLength = response.data.result.length;
      //   var lastArr = (arrLength-1);
      //  console.log( lastArr);
        if (!response.data.result || response.data.result.length === 0) {
          throw new Error("No user data found");
        }
        const signedUpUser = response.data.result["0"];
        if (!signedUpUser) {
          throw new Error("Signed-up user data not found");
        }
        console.log("Signed-up User:", signedUpUser);
        setUserDataFetch({
        f_name: signedUpUser.f_name,
        l_name: signedUpUser.l_name,
        email: signedUpUser.email,
        gender: signedUpUser.gender
       });
       console.log("State Data:", userDataFetch);
      } catch (error) {
        console.error("There was a problem fetching the user data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log("State Data:", userDataFetch);
  }, [userDataFetch]);


  return (
    <>
      <div className="container mt-0">
     
        <div className="text-center mt-5 fw-bold">
          <h4>Welcome {userDataFetch.f_name} {userDataFetch.l_name}</h4>
          <h5>user Dashboard</h5>
        </div>
        <div className="container table w-20">
          <ol>  
            <li className="container table w-20">
              <h4>Overview</h4>
              <table>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Your Perfume Personality</td>
                </tr>
                <tr>
                  <td>{userDataFetch.f_name} {userDataFetch.l_name}</td>
                  <td>{userDataFetch.email}</td>
                  <td>
                    <tr>
                      <td>THERE IS NO QUIZ RESULT FOR YOU YET</td>{" "}
                    </tr>
                    <tr>
                      <td>Discover your scent page</td>
                    </tr>
                    <tr>
                      <td>REORDER YOUR FAVORITE PRODUCTS</td>
                    </tr>
                    <tr>
                      <td> RATE YOUR PURCHASE</td>
                    </tr>
                  </td>
                </tr>
              </table>
            </li>

            <li className="container table w-20">
              <h4>My order</h4>
              <table>
                <tr>
                  <td>Ongoing Online Order</td>
                  <td>Online Order history</td>
                  <td>Purchase history</td>
                </tr>
              </table>
            </li>
              <li>
              <h4>Rewards</h4>
            </li>
            <li>
              <h4>My Referrals</h4>
            </li>
            <li>
              <h4>continue shopping</h4>
            </li>
            <li>
              <h4>Win a free perfume </h4>
            </li>
          </ol>
        </div>    
      </div>
    </>
  );
};
export default Dashboard;
