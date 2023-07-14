import { Avatar, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Task3 = () => {
  const { users, selectedIndex } = useSelector((state) => state.usersList);

  const [showPassword, setShowPassword] = useState(false);
  const [showUid, setshowUid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleUIDVisibility = () => {
    setshowUid(!showUid);
  };
  return (
    <div className="user-profile ">
      <h1>User Profile</h1>
      <div>
        <div className="firstRow">
          <div className="row">
            <h2>Details</h2>

            <div className="basicDetails ">
              <img
                className="Avatar2"
                src={users[selectedIndex].avatar}
                alt="Avatar2"
              />
              <div>
                <div className=" sub_row">
                  <div className="label">Name</div>
                  <div className="value">
                    : {users[selectedIndex].first_name}{" "}
                    {users[selectedIndex].last_name}
                  </div>
                </div>
                <div className=" sub_row">
                  <div className="label">Username</div>
                  <div className="value">: {users[selectedIndex].username}</div>
                </div>
                <div className=" sub_row">
                  <div className="label">Email</div>
                  <div className="value">: {users[selectedIndex].email}</div>
                </div>
                <div className=" sub_row">
                  <div className="label">Gender</div>
                  <div className="value">: {users[selectedIndex].gender}</div>
                </div>
                <div className=" sub_row">
                  <div className="label">Phone Number</div>
                  <div className="value">
                    : {users[selectedIndex].phone_number}
                  </div>
                </div>
                <div className=" sub_row">
                  <div className="label">Social Insurance Number</div>
                  <div className="value">
                    : {users[selectedIndex].social_insurance_number}
                  </div>
                </div>
                <div className=" sub_row">
                  <div className="label">Date of Birth</div>
                  <div className="value">
                    : {users[selectedIndex].date_of_birth}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="crid_N_emp">
            <div className="row" style={{ marginBottom: "10px " }}>
              <h2>Credentials</h2>

              <div className="cridental  ">
                <div className=" sub_row_cred">
                  <div className="cred_label">ID</div>
                  <div className="value">: {users[selectedIndex].id}</div>
                </div>

                <div className=" sub_row_cred">
                  <div className="cred_label">UID</div>
                  <div className="value" style={{ width: "200px" }}>
                    :
                    {showUid ? (
                      users[selectedIndex].uid
                    ) : (
                      <span className="password-placeholder"> ******</span>
                    )}
                    <span
                      className="password-toggle btn"
                      onClick={toggleUIDVisibility}
                    >
                      {showUid ? (
                        <VisibilityOffIcon style={{background:"transparent"}} ></VisibilityOffIcon>
                      ) : (
                        <VisibilityIcon></VisibilityIcon>
                      )}
                    </span>
                  </div>
                </div>
                <div className=" sub_row_cred">
                  <div className="cred_label">Password</div>
                  <div className="value">
                    :
                    {showPassword ? (
                      users[selectedIndex].password
                    ) : (
                      <span className="password-placeholder"> ******</span>
                    )}
                    <span
                      className="password-toggle btn"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon></VisibilityOffIcon>
                      ) : (
                        <VisibilityIcon></VisibilityIcon>
                      )}
                    </span>
                  </div>
                </div>

                <div className=" sub_row_cred">
                  <div className="cred_label">CC Number</div>
                  <div className="value">
                    {" "}
                    :{users[selectedIndex].credit_card.cc_number}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <h2>Employment details</h2>

              <div className="empolument  ">
                <div className="subcrip_row">
                  <div className="cred_label">Job Title</div>
                  <div className="value">
                    : {users[selectedIndex].employment.title}
                  </div>
                </div>
                <div className="subcrip_row">
                  <div className="cred_label">Skills</div>
                  <div className="value">
                    : {users[selectedIndex].employment.key_skill}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="second_row">
          <div className="row">
            <h2>Address</h2>

            <div className="adders    ">
              <div className=" sub_row">
                <div className="label_add">City</div>
                <div className="value">
                  : {users[selectedIndex].address.city}
                </div>
              </div>
              <div className=" sub_row">
                <div className="label_add">Loacalisation</div>
                <div className="value">
                  : {users[selectedIndex].address.street_name}{" "}
                  {users[selectedIndex].address.street_address}
                </div>
              </div>

              <div className=" sub_row">
                <div className="label_add">Zip Code</div>
                <div className="value">
                  : {users[selectedIndex].address.zip_code}
                </div>
              </div>
              <div className=" sub_row">
                <div className="label_add">State</div>
                <div className="value">
                  {" "}
                  : {users[selectedIndex].address.state}
                </div>{" "}
                <div className=" sub_row"></div>
              </div>
              <div className=" sub_row">
                <div className="label_add">Country</div>
                <div className="value">
                  : {users[selectedIndex].address.country}
                </div>
              </div>
              <div className=" sub_row">
                <div className="label_add">location</div>

                <div className="value">
                  {" "}
                  :
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${users[selectedIndex].address.coordinates.lat},${users[selectedIndex].address.coordinates.lng}`}
                  >
                    view on google map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h2>Subcription</h2>

            <div className="subcription  ">
              <div className="subcrip_row">
                <div className="label">Subscription Plan</div>
                <div className="value">
                  : {users[selectedIndex].subscription.plan}
                </div>
              </div>
              <div className="subcrip_row">
                <div className="label">Subscription Status</div>
                <div className="value">
                  : {users[selectedIndex].subscription.status}
                </div>
              </div>
              <div className="subcrip_row">
                <div className="label">Payment Method</div>
                <div className="value">
                  : {users[selectedIndex].subscription.payment_method}
                </div>
              </div>
              <div className="subcrip_row">
                <div className="label">Subscription Term</div>
                <div className="value">
                  : {users[selectedIndex].subscription.term}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;
