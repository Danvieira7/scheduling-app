const BASE_URL = "/api/appointments/";

function getAppointments() {
    return fetch( BASE_URL + "getAllAppointments", {
        method: "GET",
    }).then( res => res.json())
    .catch(err => console.log("ERROR", err))
}

function createAppointment(info) {
    return fetch(BASE_URL + 'makeAppointment', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'    
        }),
        body: JSON.stringify(info)
      })
      .then(res => {
        return res.json();
    });
}

function removeAppointment() {

}

export default {
    getAppointments,
    createAppointment,
    removeAppointment
}