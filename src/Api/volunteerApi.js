export const volunteerCreatedByPromised=(email)=>{
  return fetch(
    `http://localhost:5000/volunteers?email=${email}`
  ).then(res=>res.json());
}
