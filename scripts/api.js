/* eslint-disable strict */
const api = (function () {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/aldibatyr";
  function getItems() {
    return fetch(`${BASE_URL}/items`) 
      
      
  }

  function createItem(name) {
    let newItem = {
      name,
    };

    newItem = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
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

  return { 
    getItems,
    createItem,
    updateItem,
    BASE_URL
  }
}());

