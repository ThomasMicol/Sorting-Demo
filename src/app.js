let itemList = [];
let timeoutStop = false;
const canvas = document.querySelector("canvas").getContext("2d");

const initalColumnGap = canvas.canvas.width * 0.002;


canvas.fillStyle = "black";
canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

function DrawRectangle(height, width, index) {
    canvas.fillStyle = "white";
    canvas.fillRect(initalColumnGap + (width * index) + (initalColumnGap * index), canvas.canvas.height, width, height * -1);
}

function CalculateColumnWidth(array) {
    let canvasWidth = canvas.canvas.width;
    let result = (canvasWidth - (initalColumnGap + (initalColumnGap * array.length))) / array.length;
    return result;
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

    await Promise.all([Sort(array, start, partitionIndex - 1), Sort(array, partitionIndex + 1, end)])

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
    await Sleep(50);

    const temp = array[indexTo];
    array[indexTo] = array[indexFrom];
    array[indexFrom] = temp;
    RedrawGraph(array);

}

function Sleep(sleepTime) {
    return new Promise(resolve => setTimeout(resolve, sleepTime));
}