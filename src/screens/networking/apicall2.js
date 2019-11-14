Apicall2 = () => {

  return fetch("https://www.mocky.io/v2/5d8ddac0310000cd032b5122", {
    method: "GET",
    
   // body:body
  })
    .then(response => response.json())

};
export default Apicall2;
