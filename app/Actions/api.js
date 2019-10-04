
var ip = 'http://26ed4235.ngrok.io'

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
    const response= await fetch(ip+"/users/authenticate", {
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

       const response= await fetch(ip+"/events/upcoming/"+date, {
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




     //  assignedEvents_api



       export const assignedEvents_api = async (body) => {
    
          try{
            //console.warn('api-token',body.token)
    
           const response= await fetch(ip+"/events/eventAssignment", {
             method: "GET",
             headers: {   
            Accept  : "application/json",
               "Content-Type": "application/json",
                Authorization: "Bearer "+ body.token
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
    