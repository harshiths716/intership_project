


export const All_api = async load => {
  try {
    const response = await fetch(ip +load.endpoint, {
      method: load.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + load.token
      },
      body: load.body!=undefined?JSON.stringify(body):null,
    });

    const data = await response.json();
  
    return data;
  } catch (e) {
  }
};

export const Upcoming_api = async body => {
 let date = body.date;
 let token = body.token;
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
  
  }
};

export const acceptEvents_API = async body => {
  try {
 
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
 
    return data;
  } catch (e) {

  }
};

export const rejectEvents_API = async body => {
  try {
 
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

    return data;
  } catch (e) {

  }
};

export const sendUserDetails_api = async body => {
  try {


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

    return data;
  } catch (e) {

  }
};

export const myeventsOrganized_API = async body => {
  try {


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

    return data;
  } catch (e) {
  }
};

export const myeventsparticipated_API = async body => {
  try {
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
    return data;
  } catch (e) {
  }
};

export const createEvent_Api = async bod => {


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
    return data;
  } catch (e) {
  }
};

export const accepted_task_events_Api = async bod => {
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
    return data;
  } catch (e) {

  }
};


export const add_task_api_hit = async body => {
console.warn(body)
  try {
    const response = await fetch(ip + body.taskEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + body.token
      },
      body:JSON.stringify({
        eventId:body.eventId,
        tName:body.tName,
        description:body.description,
        ownership:body.ownership.id,
        budget:parseInt(body.Budget),
        deadline:body.deadline,
        createdBy:body.createdBy
      }),
    });

    const data = await response.json();

    return data;
  } catch (e) {

  }
};


export const get_task_api_hit = async body => {
  try {

    const response = await fetch(ip + '/eventTasks/showAll/'+body._id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + body.token,
      },

      // body:JSON.stringify(body)
    });

    const data = await response.json();
  
    return data;
  } catch (e) {
  }
};


export const button_api_hit = async body => {
  console.warn(body.data)
  try {
    const response = await fetch(ip + body.endpoint, {
      method: body.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + body.token
      },
      body: JSON.stringify(body.data),
    });

    const data = await response.json();

    return data;
  } catch (e) {
console.warn('error')

  }
};


export const send_invites_api_hit = async body => {
  console.warn(body.data)
  try {
    const response = await fetch(ip + body.endpoint, {
      method: body.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         Authorization: "Bearer " + body.token
      },
      body: JSON.stringify(body.data),
    });

    const data = await response.json();

    return data;
  } catch (e) {
console.warn('error')

  }
};