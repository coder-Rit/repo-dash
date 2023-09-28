import React, { useEffect, useReducer, useState } from "react";
import BarChart from "../coreCharts/BarChart";
import SortingCom from "../SortingComp/SortingCom";
import {
  PESTAL_MAP_MAKING_END,
  PESTAL_MAP_MAKING_START,
  PESTAL_SORT_END,
  PESTAL_SORT_START,
} from "../../Constants/sortConstant";
import { useDispatch, useSelector } from "react-redux";
import { DoSorting, upDownSort } from "../../Actions/sortReportAction";

const PestalBars = (props) => {
  const dispatch = useDispatch();
 
  const { is_pestal_maping_done, PestalMap } = useSelector(
    (state) => state.pestalMap
  );
  const { is_sorting_done, SortedPestal } = useSelector(
    (state) => state.sortedPestal
  );

  const [SortValues, set_SortValues] = useState({
    sortBy: "likelihood",
    noRecords: false,
  });

  const [chartData, setChartData] = useState({
    labels: SortedPestal.map((data, index) =>
      SortedPestal.length - 1 > index ? data.Name.slice(0,5) : "Others"
    ),
    datasets: [
      {
        label: SortValues.sortBy, 
        data: SortedPestal.map((data) => data[SortValues.sortBy]),
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
        borderColor: "none",
        barThickness: 25,
        borderRadius: 3,
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    const options = {
      dispatchString: { start: PESTAL_SORT_START, end: PESTAL_SORT_END },
      focus: SortValues.sortBy,
      type: "UP",
      include: "with_others",
      noRecords: false,
    };
        dispatch(upDownSort(PestalMap, options));

  }, [PestalMap,is_pestal_maping_done, SortValues]); 

  useEffect(() => {
    if (is_sorting_done) {
      setChartData({
        labels: SortedPestal.map((data, index) =>
          SortedPestal.length - 1 > index ? data.Name.slice(0,5) : "Others"
        ),
        datasets: [
          {
            label: SortValues.sortBy,
            data: SortedPestal.map((data) => data[SortValues.sortBy]),
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
            borderColor: "none",
            barThickness: 25,
            borderRadius: 3,
            borderWidth: 0,
          },
        ],
      });
    }
  }, [SortedPestal, SortValues]);

  useEffect(() => {
    const options = {
      dispatchString: {
        start: PESTAL_MAP_MAKING_START,
        end: PESTAL_MAP_MAKING_END,
      },
      focus: "pestle",
    };
   dispatch(DoSorting(props.data,options));
    
  }, [props.data]);

  return (
    <div className="flex_col">
      {is_sorting_done && SortedPestal.length !== 0 ? (
        <div>
          <BarChart
            chartData={chartData}
            chartName="Pest Chart"
            chartText={"Sorted by "+ SortValues.sortBy }
            position="right"
          ></BarChart>
        </div>
      ) : null}
      <div>

      </div>
      <SortingCom
        set_SortValues={set_SortValues}
        sortBy={SortValues.sortBy}
        map={PestalMap}
        dispatchString={{ start: PESTAL_SORT_START, end: PESTAL_SORT_END }}
        focus="pestle"
      ></SortingCom>
    </div>
  );
};

export default PestalBars;
