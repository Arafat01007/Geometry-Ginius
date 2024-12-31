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
    // display rectangle area
    document.getElementById('parallelogram-area').innerText = paraArea;
}