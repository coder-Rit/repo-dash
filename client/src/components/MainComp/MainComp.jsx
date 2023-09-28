import { useEffect, useReducer, useState } from "react";
import React from "react";
import "./mainComp.css";
import SingleRow from "../DataRows/SingleRow";
import RegionPie from "../pies/RegionPie";
import CountyPie from "../pies/CountyPie";
import Filters from "../FilterComp/Filters";
import PestalBars from "../BarComp/PestalBars";
import { useDispatch, useSelector } from "react-redux";
import { getAllreports } from "../../Actions/reportActions";
import DatesLine from "../DatesLine";
import PresentSection from "../PersentSection/PresentSection";
import {
  TOPIC_MAP_MAKING_END,
  TOPIC_MAP_MAKING_START,
} from "../../Constants/sortConstant";
import { DoSorting } from "../../Actions/sortReportAction";

const MainComp = () => {
  const dispatch = useDispatch();

  const { is_topic_maping_done, TopicMap } = useSelector(
    (state) => state.topicMap
  );

  const { reports, is_report_loaded } = useSelector((state) => state.reports);

  // for table
  const [MainResults, setMainResults] = useState({
    ready: false,
    data: [],
  });
  //for all other elements
  const [modifiedResults, setmodifiedResults] = useState([]);
  const [filterdTopics, setfilterdTopics] = useState([]);
  const [Alltopics, setAlltopics] = useState([]);

  useEffect(() => {
    const options = {
      dispatchString: {
        start: TOPIC_MAP_MAKING_START,
        end: TOPIC_MAP_MAKING_END,
      },
      focus: "topic",
    };
    if (is_report_loaded) {
      dispatch(DoSorting(reports, options));
    }
  }, [is_report_loaded]);

  useEffect(() => {
    if (is_topic_maping_done) {
      setMainResults({
        ready: true,
        data: TopicMap,
      });

      let list = [];
      TopicMap.map((data) => list.push(data.Name));
      setAlltopics([...list]);
      setfilterdTopics([...list]);
    }
  }, [TopicMap, is_topic_maping_done]);

  useEffect(() => {
    if (is_report_loaded) {
      setmodifiedResults(reports);
    }
  }, [is_report_loaded]);

  useEffect(() => {
    dispatch(getAllreports());
  }, []);

  return (
    <div>
      <div class="angry-grid primaryTextColor">
        <div id="item-0" className="borderBox primaryBg ">
          <Filters></Filters>
        </div>
        {MainResults.ready ? (
          <div
            id="item-1"
            className="borderBox primaryBg "
            style={{ padding: "0" }}
          >
            <SingleRow
              data={MainResults.data}
              filterdTopics={filterdTopics}
              setfilterdTopics={setfilterdTopics}
              Alltopics={Alltopics}
            ></SingleRow>
          </div>
        ) : (
          <div
            id="item-1"
            className="borderBox primaryBg skeleton"
            style={{ padding: "0" }}
          ></div>
        )}
        {MainResults.ready ? (
          <div id="item-2" className="borderBox primaryBg ">
            <RegionPie data={modifiedResults}></RegionPie>
          </div>
        ) : (
          <div
            id="item-2"
            className="borderBox primaryBg skeleton"
          ></div>
        )}
        {MainResults.ready ? (
          <div id="item-3" className="borderBox primaryBg ">
            <CountyPie data={modifiedResults}></CountyPie>
          </div>
        ) : (
          <div
            id="item-3"
            className="borderBox primaryBg skeleton"
          ></div>
        )}
        {MainResults.ready ? (
          <div id="item-4" className="borderBox primaryBg ">
            <PestalBars data={modifiedResults}></PestalBars>
          </div>
        ) : (
          <div
            id="item-4"
            className="borderBox primaryBg skeleton"
          ></div>
        )}
        {MainResults.ready ? (
          <div id="item-5" className="borderBox primaryBg ">
            <PresentSection data={MainResults.data}></PresentSection>
          </div>
        ) : (
          <div
            id="item-5"
            className="borderBox primaryBg skeleton"
          ></div>
        )}
        {MainResults.ready ? (
          <div id="item-6" className="borderBox primaryBg ">
            <DatesLine data={modifiedResults}></DatesLine>
          </div>
        ) : (
          <div
            id="item-6"
            className="borderBox primaryBg skeleton"
          ></div>
        )}
      </div>
    </div>
  );
};

export default MainComp;
