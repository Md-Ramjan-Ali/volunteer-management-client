export const volunteerRequestByPromised = (email) => {
  return fetch(`http://localhost:5000/requests?email=${email}`).then((res) =>
    res.json()
  );
};
