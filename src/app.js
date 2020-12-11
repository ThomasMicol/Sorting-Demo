let itemList = [];
const initalColumnGap = 5;
let timeoutStop = false;
const canvas = document.querySelector("canvas").getContext("2d");

canvas.fillStyle = "black";
canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

function DrawRectangle(height, width, index) {
    canvas.fillStyle = "white";
    canvas.fillRect(initalColumnGap + (width * index) + (0.5 * index), canvas.canvas.height, width + 0.5, height * -1 + 0.5);
}

function CalculateColumnWidth(array) {
    let canvasWidth = canvas.canvas.width;
    return (canvasWidth - initalColumnGap) / array.length;
}

function RedrawGraph(array) {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    let width = CalculateColumnWidth(array);
    for (let i = 0; i <= array.length; i++) {
        DrawRectangle(array[i], width, i);
    }
}

function AddElement() {
    const newItem = (Math.random() * 100)
    itemList.push(newItem);
    console.log(itemList);
    RedrawGraph(itemList);
}

function StartSort() {
    Sort(itemList, 0, itemList.length - 1);
    console.log(itemList);
}

async function Sort(array, start, end) {
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
    let partitionIndex = await GetPartitionIndex(array, start, end);
    await Sort(array, start, partitionIndex - 1);
    await Sort(array, partitionIndex + 1, end);
}

async function GetPartitionIndex(array, start, end) {
    let pivotIndex = start;
    let pivotValue = array[end];

    for (var i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            await Swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    await Swap(array, pivotIndex, end);
    return pivotIndex;
}

async function Swap(array, indexFrom, indexTo) {
    //await Sleep(100);

    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
    RedrawGraph(array);

}

function Sleep(sleepTime) {
    return new Promise(resolve => setTimeout(resolve, sleepTime));
}