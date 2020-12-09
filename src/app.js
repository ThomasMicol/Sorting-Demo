let itemList = [];

function AddElement() {
    const newItem = (Math.random() * 100)
    itemList.push(newItem);
    console.log(itemList);
}

function Sort(array, start, end) {
    if (start >= end) {
        return;
    }

    let partitionIndex = GetPartitionIndex(array, start, end);
    Sort(array, start, partitionIndex - 1);
    Sort(array, index + 1, end);
}

function GetPartitionIndex(array, start, end){
    
}

function Swap(array, indexFrom, indexTo) {
    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
}