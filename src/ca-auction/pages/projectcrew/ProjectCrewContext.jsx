import React, {createContext, useState} from "react";

export const DataContext = createContext();

const ProjectCrewContext = (props) => {
  let [parentStartDate, setParentStartDate] = useState(new Date());
  let [parentEndDate, setParentEndDate] = useState(new Date());

  return (
    <DataContext.Provider value={{
      parentStartDate, setParentStartDate,
      parentEndDate, setParentEndDate
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default ProjectCrewContext;
