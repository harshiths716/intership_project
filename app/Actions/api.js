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


  export const Login_api = async (body) => {
   console.warn('inside login_api')
   try{
    const response= await fetch("http://c607ea32.ngrok.io/users/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token
      },
      body:JSON.stringify(body)
    })
    
    const data = await response.json();
    console.warn('api-data',data)
    return data;
  }catch(e){
    console.warn(e)
  }
    
    };

    export const Upcoming_api = async (body) => {

    //  const test ="https://12797f78.ngrok.io/upcoming/"+body.date

      console.warn('inside Upcoming_api')
      date = body.date
      token = body.token

      try{
        //console.warn('api-token',body.token)

       const response= await fetch("http://12797f78.ngrok.io/events/upcoming/"+date, {
         method: "GET",
         headers: {
          Accept: "application/json",
           "Content-Type": "application/json",
            Authorization: "Bearer "+token
         },
         
        // body:JSON.stringify(body)
       })
       
       const data = await response.json();
       console.warn('api-data',data)
       return data;
     }catch(e){
       console.warn(e)
     }
       
       };