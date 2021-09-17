import http from "../commonhttp";
export  function getAssets() {
    /* en este caso voy a forzar a usar un solo usuario, 
    se que esta no es la implementacion correcta pero es con fines de hacer funcionar el frontend */
    return http.get(`/asset/`);
}

export  function getAsset(id) {
    /* en este caso voy a forzar a usar un solo usuario, 
    se que esta no es la implementacion correcta pero es con fines de hacer funcionar el frontend */
    return http.get(`/asset/${id}`);
}