import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../coreCharts/PieChart";
import SortingCom from "../SortingComp/SortingCom";
import { useDispatch, useSelector } from "react-redux";
import { COUNTRY_MAP_MAKING_END, COUNTRY_MAP_MAKING_START, COUNTRY_SORT_END, COUNTRY_SORT_START } from "../../Constants/sortConstant";
import { DoSorting, upDownSort } from "../../Actions/sortReportAction";

Chart.register(CategoryScale);

const CountyPie = (props) => {
  const dispatch = useDispatch();

  const { is_country_maping_done, CountryMap } = useSelector(
    (state) => state.countryMap
  );
  const { is_sorting_done, SortedCountry } = useSelector(
    (state) => state.sortedCountry
  );

  const [SortValues, set_SortValues] = useState({
    sortBy: "relevance",
    noRecords: false,
  });

  const [chartData, setChartData] = useState({
    labels: SortedCountry.map((data, index) =>
      SortedCountry.length - 1 > index ? data.Name : "Others"
    ),
    datasets: [
      {
        label: SortValues.sortBy,
        data: SortedCountry.map((data) => data[SortValues.sortBy]),
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

  useEffect(() => {
    const options = {
      dispatchString: { start: COUNTRY_SORT_START, end: COUNTRY_SORT_END },
      focus: SortValues.sortBy,
      type: "UP",
      include: "with_others",
      noRecords: false,
    };
    dispatch(upDownSort(CountryMap, options));
  }, [CountryMap,is_country_maping_done, SortValues]);

  useEffect(() => {
    if (is_sorting_done) {
      setChartData({
        labels: SortedCountry.map((data, index) =>
          SortedCountry.length - 1 > index ? data.Name : "Others"
        ),
        datasets: [
          {
            label: SortValues.sortBy,
            data: SortedCountry.map((data) => data[SortValues.sortBy]),
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
  }, [SortedCountry, SortValues]);

  useEffect(() => {
    const options = {
      dispatchString: {
        start: COUNTRY_MAP_MAKING_START,
        end: COUNTRY_MAP_MAKING_END,
      },
      focus: "country",
    };
    dispatch(DoSorting(props.data, options));
  }, [props.data]);

  return (
    <div className="flex_col">
      {is_sorting_done && SortedCountry.length !== 0 ? (
        <>
          <div>
            <PieChart
              chartData={chartData}
              chartName="Country Chart"
              chartText={"Country sorted by "+ SortValues.sortBy }
              position="bottom"
            ></PieChart>
          </div>
          <div class="marquee">
            <p>{SortedCountry[SortedCountry.length - 1].Name.slice(2)}</p>
          </div>
        </>
      ) : null}
        <SortingCom set_SortValues={set_SortValues} map={CountryMap}  sortBy={SortValues.sortBy} dispatchString={{ start: COUNTRY_SORT_START, end: COUNTRY_SORT_END }} focus="country"></SortingCom>
    </div>
  );
};

export default CountyPie;
