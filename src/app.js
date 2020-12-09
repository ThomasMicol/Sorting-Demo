let itemList = [];

function AddElement() {
    const newItem = (Math.random() * 100)
    itemList.push(newItem);
    console.log(itemList);
}

function Sort() {

}

function Swap(array, indexFrom, indexTo) {
    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
}