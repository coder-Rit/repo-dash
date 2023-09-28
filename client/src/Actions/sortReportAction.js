 
export const DoSorting = (data,options) => (dispatch) => {
  const { dispatchString, focus } = options;
  let frequencyMap = [];
  function calculateFrequency() {
    // Count the frequency of each element in the array
    for (let index = 0; index < data.length; index++) {
      const Name =
        data[index][focus] === "" ? "no records" : data[index][focus];
      const likelihood =
        data[index].likelihood === "" ? 0 : data[index].likelihood;
      const intensity =
        data[index].intensity === "" ? 0 : data[index].intensity;
      const relevance =
        data[index].relevance === "" ? 0 : data[index].relevance;

      let dataIndex = frequencyMap.findIndex((setData) => {
        return setData.Name === Name;
      });

      if (dataIndex !== -1) {
        let newSet = {
          Name: Name,
          articles: frequencyMap[dataIndex].articles + 1,
          likelihood: frequencyMap[dataIndex].likelihood + likelihood,
          intensity: frequencyMap[dataIndex].intensity + intensity,
          relevance: frequencyMap[dataIndex].relevance + relevance,
          null_intensityCount:
            intensity === 0
              ? frequencyMap[dataIndex].null_intensityCount + 1
              : frequencyMap[dataIndex].null_intensityCount,
          null_likelihoodCount:
            likelihood === 0
              ? frequencyMap[dataIndex].null_likelihoodCount + 1
              : frequencyMap[dataIndex].null_likelihoodCount,
          null_relevanceCount:
            relevance === 0
              ? frequencyMap[dataIndex].null_relevanceCount + 1
              : frequencyMap[dataIndex].null_relevanceCount,
        };
        frequencyMap[dataIndex] = newSet;
      } else {
        frequencyMap.push({
          Name: Name,
          articles: 1, //number of same topic
          likelihood: likelihood, // likelihood addition
          intensity: intensity, // likelihood addition
          relevance: relevance, // relevance addition
          null_intensityCount: intensity === 0 ? 1 : 0, // manegging intensity-->"" error. it should not affect the calculation
          null_likelihoodCount: likelihood === 0 ? 1 : 0, // manegging likelihood--> "" error. it should not affect the calculation
          null_relevanceCount: relevance === 0 ? 1 : 0, // manegging relevance--> "" error. it should not affect the calculation
        });

        //calculating freq of region
      }
    }
  }

  
  dispatch({ type: dispatchString.start });
  calculateFrequency();
  
  dispatch({ type: dispatchString.end, payload: frequencyMap });
};

const a = [];

export const upDownSort = (data, options) => (dispatch) => {
  const { dispatchString, type, focus, include } = options;
  //how options look like
  // options ={
  //   dispatchString:{
  //     start:dispatch type
  //     end:dispatch type
  //   },
  //   type:up or down,
  //   focus:ex "intensity",
  //   include:"with_others"||"withOut_others",

  // }

  let sortedArray = data;

  sortedArray.sort((a, b) => b[focus] - a[focus]);

  // combining multi records to others
  const Take_x = (count, direction, list) => {
    let newList = [];
    const newEntry = {
      Name: "",
      articles: 0,
      likelihood: 0,
      intensity: 0,
      null_intensityCount: 0,
      null_likelihoodCount: 0,
    };

    if (direction === "with_others") {
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (index < count) {
          newList.push(element);
        } else {
          newEntry.Name =
            newEntry.Name + ", " + element.Name + "(" + element[focus] + ")";
          newEntry.articles = newEntry.articles + element.articles;
          newEntry.likelihood = newEntry.likelihood + element.likelihood;
          newEntry.intensity = newEntry.intensity + element.intensity;
          newEntry.null_intensityCount =
            newEntry.null_intensityCount + element.null_intensityCount;
          newEntry.null_likelihoodCount =
            newEntry.null_likelihoodCount + element.null_likelihoodCount;
        }
      }
      newList.push(newEntry);
    } else {
      newList = list.slice(0, count);
    }

    return newList;
  };

  // used of up down sorting
  const soerIt = () => {
    if (type === "UP") {
      sortedArray.sort((a, b) => b[focus] - a[focus]);
      sortedArray = Take_x(6, include, sortedArray);
    }
    if (type === "DOWN") {
      sortedArray.reverse();
      sortedArray = Take_x(6, include, sortedArray);
    }
  };

  dispatch({ type: dispatchString.start, payload: [] });

  soerIt();

  dispatch({ type: dispatchString.end, payload: sortedArray });
};
