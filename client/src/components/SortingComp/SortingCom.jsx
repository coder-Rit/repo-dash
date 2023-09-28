import React, { useEffect, useState } from "react";
import "./SortingCom.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from "react-redux";
import { upDownSort } from "../../Actions/sortReportAction";
import { COUNTRY_SORT_END, COUNTRY_SORT_START } from "../../Constants/sortConstant";


const SortingCom = ({ set_SortValues ,focus ,map,dispatchString,sortBy }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(sortBy);
  const [btnState, setbtnState] = useState(false);


  const sortUp =()=>{
    const options = {
      dispatchString: dispatchString,
      focus: focus,
      type: "UP",
      include: "with_others",
      noRecords: false,
    };
    dispatch(upDownSort(map, options));
  }

  const sortDown =()=>{
    const options = {
      dispatchString:dispatchString,
      focus: focus,
      type: "DOWN",
      include: "withOut_others",
      noRecords: false,
    };
    dispatch(upDownSort(map, options));
  } 

  useEffect(() => {
    setbtnState(true)
  }, [inputValue])
  
  
  

  return (
    <div className="boxInputs " style={{textTransform:"capitalize"}}>
     <div>
      <button className="dd-button updownBTN pointer" onClick={()=>{sortDown();setbtnState(!btnState)}}>{btnState?<ArrowDropDownIcon></ArrowDropDownIcon>:<ArrowDropUpIcon></ArrowDropUpIcon>}</button>
     </div>

      <label className="dropdown" style={{position:"relative",zIndex:"1"}}>
        <div id="dropdown" className="dd-button selectBTN_width pointer">{inputValue}</div>
        <input type="checkbox" className="dd-input" id="test" />
        <ul className="dd-menu">
          <li
            onClick={() => {
              set_SortValues({ noRecords:false, sortBy: "articles" });
              setInputValue("Articles");
            }}
          >   
            Articles
          </li>
          <li
            onClick={() => {
              set_SortValues({ noRecords:false, sortBy: "relevance" });
              setInputValue("Relevance");
            }}
          >
            Relevance
          </li>
          <li
            onClick={() => {
              set_SortValues({ noRecords:false, sortBy: "intensity" });
              setInputValue("Intensity");
            }}
          >
            Intensity
          </li>
          <li
            onClick={() => {
              set_SortValues({ noRecords:false, sortBy: "likelihood" });
              setInputValue("Likelihood");
            }}
          >
            Likelihood
          </li>
        </ul>
      </label>
    </div>
  );
};

export default SortingCom;
