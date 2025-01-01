// Triangle 
function calTriangleArea() {
    // base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);
    // height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue);

    const area = 0.5 * base * height;
    console.log('Area of triangle is:', area);
    // display triangle area
    document.getElementById('triangle-area').innerText = area;


}
// Rectangle
function calRecArea() {
    // width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidthInput.value);
    // length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLengthInput.value);

    const recArea = width * length;
    console.log('Area of rectangle is:', recArea);
    // display rectangle area
    document.getElementById('rectangle-area').innerText = recArea;
}

//Parallelogram
function calParelelArea() {
    // base
    const paraBaseInput = document.getElementById('parallelogram-base');
    const base = parseFloat(paraBaseInput.value);
    // height
    const paraHeightInput = document.getElementById('parallelogram-height');
    const height = parseFloat(paraHeightInput.value);

    const paraArea = base * height;
    console.log('Area of rectangle is:', paraArea);
    // display parallelogram area
    document.getElementById('parallelogram-area').innerText = paraArea;
}

// Rhombus
function calRhombusArea() {
    // d1
    const rhombusD1Input = document.getElementById('rhomb-d1');
    const d1 = parseFloat(rhombusD1Input.value);
    // d2
    const rhombusD2Input = document.getElementById('rhomb-d2');
    const d2 = parseFloat(rhombusD2Input.value);

    const roArea = 0.5 * d1 * d2;
    console.log('Area of rectangle is:', roArea);
    // display rhombus area
    document.getElementById('rhombus-area').innerText = roArea;
}

// Pentagon
function calPentagonArea() {
    // p
    const penPInput = document.getElementById('pen-p');
    const p = parseFloat(penPInput.value);
    // b
    const penBInput = document.getElementById('pen-b');
    const b = parseFloat(penBInput.value);

    const penArea = 0.5 * p * b;
    console.log('Area of rectangle is:', penArea);
    // display pentagon area
    document.getElementById('pentagon-area').innerText = penArea;
}

// Ellipse
function calEllipseArea() {
    const a = getInputById('ellips-a');
    const b = getInputById('ellips-b');

    const eArea = Math.PI * a * b;
    console.log('Area of rectangle is:', eArea);
    document.getElementById('ellipse-area').innerText = eArea;
    setInnerTextById('ellipse-area', eArea);
}

// common function
function getInputById(inputId) {
    const input = document.getElementById(inputId).value;
    const inputR = parseFloat(input);
    return inputR;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Area-calculation 
function areaCalarea(){
    
}
