import http from "../commonhttp";
export  function getUser() {
  /* en este caso voy a forzar a usar un solo usuario, 
  se que esta no es la implementacion correcta pero es con fines de hacer funcionar el frontend */
  return http.get(`/user/${0}`);
}

export async function userBuyAsset(payload) {
  const baseUrl = `http://localhost:3003/user/${0}/buy`
  const response = await fetch(baseUrl, {
    method: 'PUT',
    body: payload
  }).then(response => response.json())
  return response
}

export async function userSellAsset(payload) {
  const baseUrl = `http://localhost:3003/user/${0}/sell`
  const response = await fetch(baseUrl, {
    method: 'PUT',
    body: payload
  }).then(response => response.json())
  return response
}

export async function userDepositCash(payload) {
  const baseUrl = `http://localhost:3003/user/${0}/deposit`
  const response = await fetch(baseUrl, {
    method: 'PUT',
    body: payload
  }).then(response => response.json())
  return response
}