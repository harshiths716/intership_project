Apicall2 = () => {

  console.warn('inside')
  return fetch("https://www.mocky.io/v2/5d8ddac0310000cd032b5122", {
    method: "GET",
    
   // body:body
  })
    .then(response => response.json())

    // .catch(error => {
    //   console.error(error);
    // });
};
export default Apicall2;
