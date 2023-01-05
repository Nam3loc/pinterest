import sendRequest from './send-request';

const BASE_URL = '/api/pins';

export async function indexPin() {
    console.log('i am in index api')
    return await sendRequest(BASE_URL, 'GET');
}

export async function createPin(formData) {
    console.log('this is the form data:', formData);
    return await sendRequest(BASE_URL, 'POST', formData);
}

export async function showPin(id) {
    return await sendRequest(`${BASE_URL}/${id}`);
}

export async function editPin(id) {
    return await sendRequest(`${BASE_URL}/${id}/edit`, 'PUT');
}

export async function deletePin(id) {
    return await sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}