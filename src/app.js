let itemList = [];
let timeoutStop = false;

function AddElement() {
    const newItem = (Math.random() * 100)
    itemList.push(newItem);
    console.log(itemList);
}

function StartSort() {
    Sort(itemList, 0, itemList.length - 1);
    console.log(itemList);
}

function Sort(array, start, end) {
    setTimeout(() => {
        timeoutStop = true;
    }, 5000)
    if (timeoutStop === true) {
        timeoutStop = false;
        return;
    }

    if (start >= end) {
        return;
    }
    let partitionIndex = GetPartitionIndex(array, start, end);
    Sort(array, start, partitionIndex - 1);
    Sort(array, partitionIndex + 1, end);
}

function GetPartitionIndex(array, start, end) {
    let pivotIndex = start;
    let pivotValue = array[end];

    for (var i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            Swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    Swap(array, pivotIndex, end);
    return pivotIndex;
}

function Swap(array, indexFrom, indexTo) {
    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
}