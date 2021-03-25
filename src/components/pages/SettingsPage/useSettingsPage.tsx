import {useState,useCallback,useEffect} from "react";

export const useSettingsPage = ({ updateCompanyData, fetchCompanyData,companyInitialData }) => {
  
    const [companyData, setCompanyData] = useState(companyInitialData);

  useEffect(() => {
    (async () => {
      const response = await fetchCompanyData();
      response.payload
        .then((responseData) => {
          return responseData;
        })
        .then((data) => setCompanyData(data));
    })();
  }, [fetchCompanyData]);

  const onSubmit = useCallback(
    (fields) => {
      updateCompanyData(fields);
      setCompanyData(fields);
    },
    [updateCompanyData]
  );

  return {
      onSubmit,
      companyData,
  }
};