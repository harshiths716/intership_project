var ip = 'http://cad658e7.ngrok.io';

export const fetchData = async () => {
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
  date = body.date;
  token = body.token;
  try {
    const response = await fetch(ip + '/events/upcoming/' + date, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.warn(e);
  }
};
export const assignedEvents_api = async body => {
  try {
    const response = await fetch(ip + '/events/eventAssignment', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },
    });
    const data = await response.json();
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
   console.warn('participated events', body.token);
   // return 'message';
    const response = await fetch(ip + '/eventParticipant/myEvent', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

   //  body:JSON.stringify(body)
    });

    const data = await response.json();
    console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn('error enrolled');
  }
};

export const createEvent_Api = async bod => {

  console.warn('bod------------------->', bod);

  try {
    const response = await fetch(ip + '/events/addEvents', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + bod.token,
      },

      body:JSON.stringify({
        createdBy: bod.createdBy,
        eName:bod.eName,
        venue: bod.venue,
        description: bod.description,
        isOpen: bod.isOpen,
        capacity: bod.capacity,
        startTime: bod.startTime,
        endTime: bod.endTime,
        organisers: bod.organisers,
      }),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn(e);
  }
};

export const accepted_task_events_Api = async bod => {
//console.warn('inside accept')
  try {
    const response = await fetch(ip + '/eventTasks/viewEventAssign', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + bod.token,
      },
    });

    const data = await response.json();
    console.warn('/eventTasks/viewEventAssign',data)
    return data;
  } catch (e) {
    console.warn('organized error');
  }
};


export const add_task_api_hit = async body => {
  // console.warn('inside login_api');
  try {
    const response = await fetch(ip + '/eventTasks/createTask', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + body.token
      },
      body: JSON.stringify({
        eventId:body.eventId,
        tName:body.tName,
        description:body.description,
        ownership:body.ownership,
        budget:body.Budget,
        deadline:body.deadline,
        createdBy:body.createdBy
      }),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn('add task error');
  }
};


export const get_task_api_hit = async body => {
  try {
    console.warn('inside get_task_api_hit', body.token);

    const response = await fetch(ip + '/eventTasks/viewEventPlan/'+body._id, {
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


export const add_subtask_api_hit = async body => {
  // console.warn('inside login_api');
  try {
    const response = await fetch(ip + '/eventSubTasks/createSubTask', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + body.token
      },
      body: JSON.stringify({
        eventId:body.eventId,
        tId:body.id,
        subTname:body.tName,
        description:body.description,
        ownership:body.ownership,
        deadline:body.deadline,
        createdBy:body.createdBy
      }),
    });

    const data = await response.json();
    // console.warn('api-data', data);
    return data;
  } catch (e) {
    console.warn('add task error');
  }
};
