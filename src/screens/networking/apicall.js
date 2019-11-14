Apicall = (endpoint, body, token) => {

  return fetch("http://192.168.1.117:8000" + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body:JSON.stringify(body)
  }).then(response => response.json())

   
};

export  default Apicall;
