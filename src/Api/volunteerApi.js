export const volunteerCreatedByPromised = (email, accessToken) => {
  return fetch(`http://localhost:5000/volunteers/myPost?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
