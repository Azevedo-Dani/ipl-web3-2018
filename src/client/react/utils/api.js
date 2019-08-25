function sendApiRequest({
    url,
    method = 'GET',
    params = null,
}){
    const jwt = localStorage.getItem('JWT');
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', JSON.parse(jwt));

    return fetch(
        url,
        {
            method: method,
            headers: headers,
            body: params && JSON.stringify(params),
        }
    )

}

 function handleResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
 }






exports.handleResponse = handleResponse
exports.sendApiRequest = sendApiRequest