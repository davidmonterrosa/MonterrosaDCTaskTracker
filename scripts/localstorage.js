
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

function removeFromLocalStorage(taskItem) {
    let localStorageData = getFromLocalStorage();

    let idToRemove = localStorageData.indexOf(taskItem);

    localStorageData.splice(idToRemove, 1);

    localStorage.setItem('Names', JSON.stringify(localStorageData));
}

export {getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage}