import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let TemplateContextAPI = createContext(null);
const TemplateContext = ({ children }) => {

  let [all_Templates, setAll_templates] = useState(null);
    // ? getting all the templates from DB
    
  let getAllTemplatesFromDb = async () => {
    let { data } = await axios.get("http://localhost:5000/ALL_Templates");

    setAll_templates(data);
  };

  useEffect(() => {
    getAllTemplatesFromDb();
  }, []);
  return (
    <TemplateContextAPI.Provider value={{ all_Templates }}>
      {children}
    </TemplateContextAPI.Provider>
  );
};

export default TemplateContext;
