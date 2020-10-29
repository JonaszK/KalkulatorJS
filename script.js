'use strict';
let i = document.querySelector('#calculator__input');
let memory = [];
function insertData(d) {
    const symbols = ['-', '+', '*', '/', '.'];
    const char = i.value.charAt(i.value.length - 1);
    let hasSymbol = false;
    let isAddingSymbol = false;
    symbols.forEach(el => {
        if(el === char) {
            hasSymbol = true;
        }
        if(el === d) {
            isAddingSymbol = true;
        }
    });
    if(!hasSymbol || !isAddingSymbol) {
        i.value += d;
    }
}

function deleteData() {
    if(i.value != '') {
        i.value = i.value.slice(0, -1);
    }
}

function calculateData() {
    i.value = eval(i.value);
}

function clearAll() {
    i.value = '';
}

function addToMemory() {
    memory.push(i.value);
    i.value = '';
}

function clearLastMemory() {
    memory.pop();
}

function getMemory() {
    memory.forEach(el => {
        i.value += el;
    });
}

function clearAllMemory() {
    memory.splice(0, arr.length);
}