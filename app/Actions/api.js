var ip = 'http://803fd43e.ngrok.io';

export const fetchData = async () => {
  // console.warn('iam in fetchData');
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const Login_api = async body => {
  // console.warn('inside login_api');
  try {
    const response = await fetch(ip + '/users/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: "Bearer " + token
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const Upcoming_api = async body => {
  //  const test ="https://12797f78.ngrok.io/upcoming/"+body.date

  // console.warn('inside Upcoming_api');
  date = body.date;
  token = body.token;

  try {
    //console.warn('api-token',body.token)

    const response = await fetch(ip + '/events/upcoming/' + date, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },

      // body:JSON.stringify(body)
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

//  assignedEvents_api

export const assignedEvents_api = async body => {
  try {
    //console.warn('api-token',body.token)

    const response = await fetch(ip + '/events/eventAssignment', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      // body:JSON.stringify(body)
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const acceptEvents_API = async body => {
  try {
    console.warn('Event accepted', body.eventID);
    // return 'message'
    const response = await fetch(ip + '/events/acceptEventAssignment', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },
      body: JSON.stringify({eventId:body.eventID}),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(' jai error');
  }
};

export const rejectEvents_API = async body => {
  try {
    //     console.warn('Event accepted',body.token)
    // return 'message'
    const response = await fetch(ip + '/events/rejectEventAssignment', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      body: JSON.stringify({eventId:body.eventID,message:body.comment}),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const sendUserDetails_api = async body => {
  try {
    console.warn('inside userdetails', body.token);

    const response = await fetch(ip + '/users/usersDetails', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      // body:JSON.stringify(body)
    });

    const data = await response.json();
    console.warn(' userdetails api-data', data);
    return data;
  } catch (e) {
    console.warn('erron in api hit');
  }
};

export const myeventsOrganized_API = async body => {
  try {
    console.warn('inside myeventsOrganized_API');

    const response = await fetch(ip + '/events/eventAssigned', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      // body:JSON.stringify(body)
    });

    const data = await response.json();
   // console.warn(' userdetails api-data', data);
    return data;
  } catch (e) {
    console.warn('organized error');
  }
};

export const myeventsparticipated_API = async body => {
  try {
    console.warn('Event accepted', body.token);
    return 'message';
    // const response = await fetch(ip + '/events/eventAssignment', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + body.token,
    //   },

    //  body:JSON.stringify(body)
    // });

    // const data = await response.json();
    // // console.warn('api-data', data);
    // return data;
  } catch (e) {
    console.warn(e);
  }
};

export const createEvent_Api = async body => {
  try {
    //     console.warn('Event accepted',body.token)
    // return 'message'
    const response = await fetch(ip + '/events/eventAssignment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      body: JSON.stringify(body),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

// export const apicall = async (userdata, endpoint, method, databody) => {
//   console.warn('apicall');
//   try {
//     const response = await fetch(ip + endpoint, {
//       method: method,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer ' + userdata.token,
//       },
//       body: JSON.stringify(databody),
//     });

//     const resdata = await response.json();
//     console.warn('api-data', resdata);
//     return resdata;
//   } catch (e) {
//     console.warn('api error');
//   }
//   body;
// };
