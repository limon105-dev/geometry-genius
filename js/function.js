// reusebale function for get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    inputField.value = '';
    const inputValue = parseFloat(inputValueText);
    return inputValue;
};

// reusebale function for set area value
function setElementInnerText(areaType, area) {

    const colculateEntry = document.getElementById('result');
    const count = colculateEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area}cm<sup>2</sup> <button class='btn btn-info px-2.5 py-1'>Covert to m<sup>2</sup></button>`
    colculateEntry.appendChild(p);
};