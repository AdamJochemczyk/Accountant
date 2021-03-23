export const getCompanyData=async ()=>{
    const response=await fetch(`${process.env.REACT_APP_URL}/sth`)
    return await response.json();
};

export const setCompanyData=async(data)=>{
    const response = await fetch(
      `${process.env.REACT_APP_URL}/sth/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
}