export const BASE_URL = 'http://localhost:3000';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUsers = (email, number) => fetch(BASE_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    number,
  }),
})
  .then(checkResponse)
  .then((res) => res)
  .catch((err) => console.log(err));
