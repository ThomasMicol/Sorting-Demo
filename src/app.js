let itemList = [];

function AddElement() {
    const newItem = (Math.random() * 100)
    itemList.push(newItem);
    console.log(itemList);
}

function Sort() {
    let array = itemList;
    let start = 0;
    let end = array.length - 1;
    if (start >= end) {
        return;
    }

    let partitionIndex = GetPartitionIndex(array, start, end);
    Sort(array, start, partitionIndex - 1);
    Sort(array, index + 1, end);
}

function GetPartitionIndex(array, start, end) {
    let pivotIndex = 0;
    let pivotValue = array[end];

    for (var i = 0; i < end; i++) {
        if (array[i] < pivotValue) {
            Swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    Swap(array, pivotIndex, end);
    console.log(array);
}

function Swap(array, indexFrom, indexTo) {
    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
}