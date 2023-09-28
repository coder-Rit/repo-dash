import React, { useEffect, useReducer, useState } from "react";
import Likeli_persent from "./Likeli_persent";
import Relev_present from "./Relev_present";
import SWOT from "./SWOT";

const PresentSection = ({ data }) => {
  const [likePersent, setlikePersent] = useState(0);
  const [likePoint, setlikePoint] = useState(0);
  const [relevPoints, setrelevPoints] = useState(0);
  const [releva, setreleva] = useState(0);

  useEffect(() => {
    let like = 0;
    let rev = 0;
    let likenull = 0;
    let revnull = 0;
    let art = 0;
    
    console.log(data);
    data.map((data) => {
      likenull += data.null_likelihoodCount
      revnull += data.null_relevanceCount
      like += data.likelihood;
      rev += data.relevance;
      art += data.articles
    });
    setlikePersent((((like)/((art-likenull)*5))*100).toFixed(1));
    setreleva((((rev)/((art-revnull)*7))*100).toFixed(1));
    setlikePoint(like);
    setrelevPoints(rev);
  }, [data]);

  return (
    <div>
      <Likeli_persent value={likePersent} points={likePoint}></Likeli_persent>
      <Relev_present value={releva} points={relevPoints}></Relev_present>
      <SWOT></SWOT>
    </div>
  );
};

export default PresentSection;
