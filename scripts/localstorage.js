
function getFromLocalStorage() {
    let localStorageData = localStorage.getItem('TaskList');
    if(localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);
}

function saveToLocalStorage(taskItem) {
    let localStorageData = getFromLocalStorage();
    console.log(localStorageData);
    if(!localStorageData.includes(taskItem)) {
        localStorageData.push(taskItem);
    }
    localStorage.setItem('TaskList', JSON.stringify(localStorageData));
}

function removeFromLocalStorage(id) {
    let localStorageData = getFromLocalStorage();
    const indexToDelete = localStorageData.findIndex(task => task.Id == id);
    localStorageData.splice(indexToDelete, 1);

    localStorage.setItem('TaskList', JSON.stringify(localStorageData));
}

export {getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage}