import React, { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
const Task1 = () => {
  const [Circles_List, set_Circles_List] = useState([
    { status: "unlocked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
    { status: "locked", count: 0, bg: "yellow" },
  ]);

  const [maxIndex, setmaxIndex] = useState(0);
  const [currentIndex, setcurrentIndex] = useState(0);

  const Incrementer = (index, count) => {
    let buffer_data = Circles_List;
    buffer_data[index].count = ++count;
    buffer_data[index].bg = get_bg_color();
    set_Circles_List([...buffer_data]);
  };


 

  const Duplicater = (index) => {
    setcurrentIndex(index);

    if (maxIndex === Circles_List.length - 1) {
      window.alert("You exiced the limit");
    } else {
      console.log(maxIndex);
      console.log(index);
      setmaxIndex(maxIndex + 1);
    }
  };
  const get_color_code = () => {
    return (Math.random() * 255).toFixed(0);
  };

  const get_bg_color = () => {
    return `rgb(${get_color_code()},${get_color_code()},${get_color_code()})`;
  };
  useEffect(() => {
     
    if (maxIndex != 0) {
       
      let buffer_data = Circles_List;
      buffer_data[maxIndex].status = "unlocked";
      buffer_data[maxIndex].bg = buffer_data[currentIndex].bg;
      

        set_Circles_List([...buffer_data]);
       
    }
  }, [maxIndex]);

  return (
    <div className="flex-center-center " style={{ height: "100vh" }}>
      <div className="Circle-container flex-center-center">
        {Circles_List.map((Circle_data, index) => {
          let { bg, status, count } = Circle_data;
          if (status === "unlocked") {
            console.log(bg);
            return (
              <div
                className="Circle flex-center-center"
                style={{ background: bg }}
              >
                <h2>{count}</h2>
                <span>
                  <AddIcon
                    className="btn "
                    size="large"
                    onClick={() => Incrementer(index, count)}
                  ></AddIcon>

                  <ControlPointDuplicateIcon
                    className="btn "
                    size="large"
                    onClick={() => Duplicater(index, bg)}
                  >
                    Duplicate
                  </ControlPointDuplicateIcon>
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Task1;
