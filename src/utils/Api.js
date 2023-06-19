export const BASE_URL = 'http://localhost:3000';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject(`Ошибка: ${res.status}`);
}

let prevAbortController = null;

export const getUsers = (email, number) => {
  if (prevAbortController != null) {
    prevAbortController.abort();
    prevAbortController = null;
  }

  const abortController = new AbortController();
  prevAbortController = abortController;

  return fetch(BASE_URL, {
    signal: abortController.signal,
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
};
