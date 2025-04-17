function getCelius(f) {
    return (f - 32) * 5 / 9;
}

console.log(getCelius(32));


function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
};

console.log(minMax([1, 2, 3, 4, 5]));


(function (length, width, area) {
    console.log(`the area of a rectangle with a length of ${length} and a width of ${width} is = ${length * width}`);
})(10, 4);

