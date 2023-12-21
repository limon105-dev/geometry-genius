/**
 * calculate triangle function
 * @returns 
 */
function calculateTriangleArea() {
    // get base value from input
    const inputBase = document.getElementById('base');
    const inputBaseText = inputBase.value;
    inputBase.value = '';
    const base = parseFloat(inputBaseText);

    // get height value from input
    const inputHeight = document.getElementById('height');
    const inputHeighttext = inputHeight.value;
    inputHeight.value = '';
    const height = parseFloat(inputHeighttext);

    // input validation--
    if (isNaN(base) || isNaN(height)) {
        alert('Please Insart A number');
        return;
    }

    // calculate area result
    const area = 0.5 * base * height;

    // // set area result
    setElementInnerText('Triangle', area);
};

/**
 * calculate rectriangle function
 * @returns 
 */
function calculateRectriangleArea() {
    // get width value from input
    const inputWidth = document.getElementById('width');
    const inputWidthText = inputWidth.value;
    inputWidth.value = '';
    const width = parseFloat(inputWidthText);

    // get height value from input
    const inputLength = document.getElementById('length');
    const inputLengthtext = inputLength.value;
    inputLength.value = '';
    const length = parseFloat(inputLengthtext);

    // input validation--
    if (isNaN(width) || isNaN(length)) {
        alert('Please Insart A number');
        return;
    }

    // calculate area result
    const area = width * length;

    // // set area result
    setElementInnerText('Rectriangle', area);
};

/**
 * calculate Parallelogram function
 * using reusebale function for rediuce code
 * @returns 
 */
function calculateParallelogramArea() {
    // get base value from input
    const base = getInputValue('parallelogram-base');

    // get height value from input
    const height = getInputValue('parallelogram-height');

    // input validation--
    if (isNaN(base) || isNaN(height)) {
        alert('Please Insart A number');
        return;
    }

    // calculate area result
    const area = base * height;

    // set area result
    setElementInnerText('Parallelogram', area);
};

/**
 * calculate Ellipse function
 * using reusebale function for rediuce code
 * @returns 
 */
function calculateEllipseArea() {
    // get majorRadius value from input
    const majorRadius = getInputValue('ellipse-major-radius');
    // get minorRadius value from input
    const minorRadius = getInputValue('ellipse-minor-radius');

    // input validation--
    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Please Insart A number');
        return;
    }

    // calculate area result
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    // set area result
    setElementInnerText('Ellipse', areaTwoDecimal);
}