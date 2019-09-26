export const fetchData = async () => {
  console.warn('iam in fetchData')
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };


  export const Login_api = async () => {
   // console.warn(token)
    const response= await fetch("http://615de67d.ngrok.io/users/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token
      },
      body:JSON.stringify(body)
    })
    
    };