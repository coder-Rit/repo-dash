import React, { useEffect, useState } from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { getSpecificReports } from "../../Actions/reportActions";
const Filters = () => {
  const dispatch = useDispatch();

  const [includeNullRecodes, setincludeNullRecodes] = useState(false);
  const [UserInfo, setUserInfo] = useState({
    end_year: 0,
    topic: [],
    sector: [],
    region: [],
    country: [],
    source: [],
  });

  const onchangHandler = (e) => {
    if (e.target.name === "end_year") {
      setUserInfo({ ...UserInfo, end_year: e.target.value.slice(0, 4) });
    } else {
      setUserInfo({ ...UserInfo, [e.target.name]: e.target.value.split(", ") });
    }
  };

  const callSubmit = (e) => {
    e.preventDefault()
    let perfectData = { ...UserInfo };

    const RepairFunc = (focus) => {
      if (perfectData[focus].length === 0 || perfectData[focus][0] === "") {
        perfectData[focus] = { $exists: true };
      } else {
        if (includeNullRecodes) {
          perfectData[focus].push("");
        }
      }
    };

    RepairFunc("topic")
    RepairFunc("sector")
    RepairFunc("region")
    RepairFunc("country")
    RepairFunc("source")

    if (perfectData.end_year===0||perfectData.end_year==='') {
      perfectData.end_year = 2100;
    }
    console.log(perfectData);
    dispatch(getSpecificReports(perfectData))
  };

  return (
    <div className="filtesDiv">
      <span>Database Filters</span>
      <form onSubmit={callSubmit}>
        <span className="getterBottom10 ">
          <label htmlFor="">End year</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. 2017"
            name="end_year"
            type="number"
            minLength="4"
            min={2000}
            max={2100}
          />
          {UserInfo.end_year !== 0 ? (
            <div className="valuesDiv">
              <span className="FormValue">{UserInfo.end_year}</span>
            </div>
          ) : null}
        </span>

        <span className="getterBottom10 ">
          <label htmlFor="">Topic</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. gas, energy..."
            name="topic"
            type="text"
          />
          {UserInfo.topic[0] !== "" && UserInfo.topic.length !== 0 ? (
            <div className="valuesDiv">
              {UserInfo.topic.map((value) =>
                value !== "" ? <span className="FormValue">{value}</span> : null
              )}
            </div>
          ) : null}
        </span>
        <span className="getterBottom10 ">
          <label htmlFor="">Sector</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. all..."
            name="sector"
            type="text"
          />
          {UserInfo.sector[0] !== "" && UserInfo.sector.length !== 0 ? (
            <div className="valuesDiv">
              {UserInfo.sector.map((value) =>
                value !== "" ? <span className="FormValue">{value}</span> : null
              )}
            </div>
          ) : null}
        </span>
        <span className="getterBottom10 ">
          <label htmlFor="">Region</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. all..."
            name="region"
            type="text"
          />
          {UserInfo.region[0] !== "" && UserInfo.region.length !== 0 ? (
            <div className="valuesDiv">
              {UserInfo.region.map((value) =>
                value !== "" ? <span className="FormValue">{value}</span> : null
              )}
            </div>
          ) : null}
        </span>
        <span className="getterBottom10 ">
          <label htmlFor="">Source</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. all..."
            name="source"
            type="text"
          />
          {UserInfo.source[0] !== "" && UserInfo.source.length !== 0 ? (
            <div className="valuesDiv">
              {UserInfo.source.map((value) =>
                value !== "" ? <span className="FormValue">{value}</span> : null
              )}
            </div>
          ) : null}
        </span>
        <span className="getterBottom10 ">
          <label htmlFor="">Country</label>
          <input
            onChange={onchangHandler}
            placeholder="ex. all..."
            name="country"
            type="text"
          />
          {UserInfo.country[0] !== "" && UserInfo.country.length !== 0 ? (
            <div className="valuesDiv">
              {UserInfo.country.map((value) =>
                value !== "" ? <span className="FormValue">{value}</span> : null
              )}
            </div>
          ) : null}
        </span>
       
        <span style={{display:"flex",gap:"10px"}}>
          <input type="checkbox" onChange={()=>setincludeNullRecodes(!includeNullRecodes)} style={{width:"20px"}}/>
          <label htmlFor="">Include Unkown recordes</label>
        </span>
        <br />
        <br />
        <span>
          <input type="submit" className="submit pointer"  placeholder="Get Reports" />
        </span>
      </form>
    </div>
  );
};

export default Filters;
