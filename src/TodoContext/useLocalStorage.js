
import React from 'react';
// Custom Huck
function useLocalStorage(itemName, initialValue){

    // Estado
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // Se ejecuta en cada llamado al final ---------------------
    // React.useEffect(() => {
    //   console.log('Looog 2')
    // });
    // ---------------------------------------------------------

    // Se ejecuta solo en el primer llamado al final -----------
    // React.useEffect(() => {
    //   console.log('Looog 2')
    // }, []);
    // ---------------------------------------------------------

    // Se ejecuta cada que cambie el estado 'totalTodos' -------
    // React.useEffect(() => {
    //   console.log('Looog 2')
    // }, [totalTodos]);
    // ---------------------------------------------------------
    React.useEffect(() => {
      setTimeout(() => {
        try{
          let parsedItem;
          const localStorageItem = localStorage.getItem(itemName);
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          }
          else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        }
        catch(error){
          setError(true);
          setLoading(false);
        }
      }, 2000)
    }, []);
    
  
    // Funcion
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    // return [item, saveItem]
    return {
      item, 
      saveItem,
      loading,
      error
    }
}

export { useLocalStorage }