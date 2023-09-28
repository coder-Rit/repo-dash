import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../coreCharts/PieChart";
import data from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { DoSorting, upDownSort } from "../../Actions/sortReportAction";
import {
  REGIONAL_MAP_MAKING_END,
  REGIONAL_MAP_MAKING_START,
  REGIONAL_SORT_END,
  REGIONAL_SORT_START,
} from "../../Constants/sortConstant";
import SortingCom from "../SortingComp/SortingCom";
import "./pies.css";
Chart.register(CategoryScale);


const RegionPie = (props) => {
  const dispatch = useDispatch();

  const { is_regional_maping_done, RegionMap } = useSelector(
    (state) => state.regionalMap
  );
  const { is_sorting_done,SortedRegion } = useSelector(
    (state) => state.sortedRegion
  );


  const [SortValues, set_SortValues] = useState({
    sortBy:"intensity",
    noRecords:false
  })


  const [chartData, setChartData] = useState(
    {
      labels: SortedRegion.map((data, index) =>
        SortedRegion.length - 1 > index ? data.Name : "Others"
      ),
      datasets: [
        {
          label: SortValues.sortBy,
          data: SortedRegion.map((data) =>  data[SortValues.sortBy]),
          backgroundColor: [
            "#00809E",
            "#009ABE", 
            "#00B5DE",
            "#00D0FF",
            "#00D0FF",
            "#46D5FF",
            "#65DAFF",
            "#7DDFFF",
            "#93E4FF",
            "#A7E9FF",
          ],
          borderColor: "rgb(225,225,225,0.4)",
          borderWidth: 1,
        },
      ],
    }
  );
 
   

  useEffect(() => { 
      const options = {
        dispatchString: { start: REGIONAL_SORT_START, end: REGIONAL_SORT_END },
        focus: SortValues.sortBy,
        type: "UP",
        include: "with_others",
        noRecords:false

      };
      dispatch(upDownSort(RegionMap, options));
    
  }, [RegionMap,is_regional_maping_done,SortValues]); 

  useEffect(() => {
    if (is_sorting_done) {
    setChartData({
      labels: SortedRegion.map((data, index) =>
        SortedRegion.length - 1 > index ? data.Name : "Others"
      ),
      datasets: [
        {
          label: SortValues.sortBy,
          data: SortedRegion.map((data) =>  data[SortValues.sortBy]),
          backgroundColor: [
            "#00809E",
            "#009ABE", 
            "#00B5DE",
            "#00D0FF",
            "#00D0FF",
            "#46D5FF",
            "#65DAFF",
            "#7DDFFF",
            "#93E4FF",
            "#A7E9FF",
          ],
          borderColor: "rgb(225,225,225,0.4)",
          borderWidth: 1,
        },
      ],
    });
  }

  }, [SortedRegion,SortValues])
  
  useEffect(() => {
    const options = {
      dispatchString: { start: REGIONAL_MAP_MAKING_START, end:  REGIONAL_MAP_MAKING_END },
      focus: "region",
    };
     
       dispatch(DoSorting(props.data ,options));
     
  }, [props.data]);

   

  
  return (  
    <div className="flex_col">
      {is_sorting_done && SortedRegion.length !== 0 ? (
        <>
          <div>
            <PieChart
              chartData={chartData}
              chartName="Regional Chart"
              chartText={"Regions sorted by "+ SortValues.sortBy }
              position="right"
            ></PieChart>
          </div>
          <div class="marquee">
            <p>{SortedRegion[SortedRegion.length - 1].Name.slice(2)}</p>
          </div>
        </>
      ) : null}
      <SortingCom set_SortValues={set_SortValues} map={RegionMap} sortBy={SortValues.sortBy}

      dispatchString={{ start: REGIONAL_SORT_START, end: REGIONAL_SORT_END }}
      focus="region"></SortingCom>

    </div>
  );
};

export default RegionPie;
