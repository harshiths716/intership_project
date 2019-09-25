Apicall2 = (endpoint) => {

  console.log('inside')
  return fetch("http://192.168.1.96:3000/" + endpoint, {
    method: "GET",
    
   // body:body
  })
    .then(response => response.json())

    .catch(error => {
      console.error(error);
    });
};
export default Apicall2;
