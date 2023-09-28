import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoSorting } from "../../Actions/sortReportAction";

const SingleRow = ({ data, filterdTopics, setfilterdTopics, Alltopics }) => {
  const dispatch = useDispatch();

  const [btnArray, setbtnArray] = useState([]);
  const [entryIndices, setentryIndices] = useState([0, 10]);
  const [pageIndices, setpageIndices] = useState([0, 3]);

  const getLikehood = (likedata) => {
    const res =
      (likedata.likelihood /
        ((likedata.articles - likedata.null_likelihoodCount) * 5)) *
      100;
    return {
      res: res.toFixed(1),
      class: res <= 20 ? "okay" : res > 20 && res < 60 ? "good" : "veryGood",
    };
  };

  const getIntensity = (intensityData) => {
    const res =
      intensityData.intensity /
      (intensityData.articles - intensityData.null_intensityCount);
    return {
      res:
        res <= 10
          ? "LOW"
          : res > 10 && res < 20
          ? "MEDIUM"
          : res > 20 && res < 50
          ? "HIGH"
          : "VERY HIGH",
      class:
        res <= 10
          ? "okay"
          : res > 10 && res < 20
          ? "good"
          : res > 20 && res < 50
          ? "avgGood"
          : "veryGood",
    };
  };

  useEffect(() => {
    if (data) {
      const len = data.length % 10;
      let arr = [];

      for (let index = 1; index <= 1 + data.length / 10; index++) {
        arr.push(
          <button
            className="pagesBtn conerRedius pointer dd-button"
            style={{
              backgroundColor:
                pageIndices[0] + 2 === index
                  ? "white"
                  : "rgba(255, 255, 255, 0.4)",
            }}
            onClick={() => {
              setentryIndices([(index - 1) * 10, index * 10]);
              if (index > 1) {
                setpageIndices([index - 2, index + 1]);
              }
            }}
          >
            {index}
          </button>
        );
      }
      setbtnArray(arr);
    }
  }, [data]);

  const CheckChange = (e) => {
     
     if (filterdTopics.includes(e.target.value)) {
        if (filterdTopics.length>1) {
          const index = filterdTopics.indexOf(e.target.value);
          let newList = filterdTopics;
          newList.splice(index, 1);
          setfilterdTopics([...newList]);
        }
    } else {
      setfilterdTopics([...filterdTopics, e.target.value]);
    }
  };


  const checkAll =(e)=>{
    if (e.target.checked) {
      setfilterdTopics([...Alltopics])
    }else{
      setfilterdTopics([Alltopics[0]])
    }

  }

  return (
    <>
      <div className="listelem listHeader blur">
        <img
          className="avtarImg"
          src="https://ui-avatars.com/api/?name=av"
          alt=""
        />
        
        <span className="overFlow-y-hide">Topic </span>
        <span>Likelihood</span>
        <span>Intensity</span>
        <span>Articales</span>
      </div>
      <div className="itemsCenter listContainer">
        {data
          .sort((a, b) => b.articles - a.articles)
          .slice(entryIndices[0], entryIndices[1])
          .map((data, index) => {
            return (
              <div key={index} className="listelem">
                <img
                  className="avtarImg"
                  src={"https://ui-avatars.com/api/?name=" + data.Name}
                  alt=""
                />

                 
                <span style={{ textTransform: "capitalize" }}>
                  {data.Name}{" "}
                </span>

                <span className={getLikehood(data).class}>
                  {" "}
                  {getLikehood(data).res}%
                </span>
                <span className={getIntensity(data).class}>
                  {getIntensity(data).res}
                </span>
                <span> {data.articles}</span>
              </div>
            );
          })}
      </div>
      <div className="  listelem_bottom blur ">
        <span>Pages</span>
        {0 === pageIndices[0] ? "" : "..."}
        {btnArray.slice(pageIndices[0], pageIndices[1]).map((data) => {
          return data;
        })}
        {btnArray.length <= pageIndices[1] ? "" : "..."}

        <button
          className="pagesBtn conerRedius pointer  dd-button"
          onClick={() => setentryIndices([0, 100])}
        >
          All
        </button>
      </div>
    </>
  );
};

export default SingleRow;
