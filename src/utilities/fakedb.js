// use local storage to manage cart data
const addToDb = id => {
  let selectedActivities = {};
  //get the shopping cart from local storage
  const storedActivities = localStorage.getItem('selected-activities');
  if (storedActivities) {
    selectedActivities = JSON.parse(storedActivities);
  }
  // add quantity
  const quantity = selectedActivities[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    selectedActivities[id] = newQuantity;
  }
  else {
    selectedActivities[id] = 1;
  }
  localStorage.setItem('selected-activities', JSON.stringify(selectedActivities));
}

const getStoredCart = () => {
  let selectedActivities = {};
  //get the shopping cart from local storage
  const storedActivities = localStorage.getItem('selected-activities');
  if (storedActivities) {
    selectedActivities = JSON.parse(storedActivities);
  }
  return selectedActivities;
}

const removeFromDb = id => {
  const storedActivities = localStorage.getItem('selected-activities');
  if (storedActivities) {
    const selectedActivities = JSON.parse(storedActivities);
    if (id in selectedActivities) {
      delete selectedActivities[id];
      localStorage.setItem('selected-activities', JSON.stringify(selectedActivities));
    }
  }
}

const deleteShoppingCart = () => {
  localStorage.removeItem('selected-activities');
}

export {
  addToDb,
  getStoredCart,
  removeFromDb,
  deleteShoppingCart
}