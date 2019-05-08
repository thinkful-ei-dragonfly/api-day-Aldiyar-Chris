/* eslint-disable strict */
const api = (function () {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/aldibatyr";

  function getItems() {
    return listApiFetch(`${BASE_URL}/items`);
  }

  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status};
        }
        return res.json();
      })

      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error.message);
        }
        return data;
      })
  }

  function createItem(name) {
    let newItem = {
      name,
    };

    newItem = JSON.stringify(newItem);
    return listApiFetch(`${BASE_URL}/items`, 
    {method: 'POST', 
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: newItem
  })
  }

  function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });

  }

  function deleteItem(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }

  return { 
    getItems,
    createItem,
    updateItem,
    deleteItem,
    BASE_URL,
    listApiFetch
  }
}());

