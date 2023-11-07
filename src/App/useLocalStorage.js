
import React from 'react';
// Custom Huck
function useLocalStorage(itemName, initialValue){

    let parsedItem;
    const localStorageItem = localStorage.getItem(itemName);
    
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue;
    }
    else{
      parsedItem = JSON.parse(localStorageItem);
    }
    
    // Estado
    const [item, setItem] = React.useState(parsedItem);
  
    // Funcion
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return [item, saveItem]
}

export { useLocalStorage }