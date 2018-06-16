/**
 * Convert hex to RGB value
 *
 * return [array] (r,g,b)
 */
function hexToRgb(hex) {
    var bigint = parseInt(hex, 16),
        r = (bigint >> 16) & 255,
        g = (bigint >> 8) & 255,
        b = bigint & 255;
    return [r,g,b];
}

/**
 * Create Duotone Matrix Values
 *
 * return [string] (matrix values)
 */
function duotone (hexes) {
    // After many failed attempts at the Matrix voodoo I found the right path here:
    // https://ines.io/blog/dynamic-duotone-svg-jade
    var hex = hexes.split(',');
    var matrix = document.querySelector('.color-matrix');
    var color1 = hexToRgb(hex[0]);
    var color2 = hexToRgb(hex[1]);

    var c1   = {};
    c1.red   = color1[0] / 256;
    c1.green = color1[1] / 256;
    c1.blue  = color1[2] / 256;

    var c2   = {};
    c2.red   = color2[0] / 256;
    c2.green = color2[1] / 256;
    c2.blue  = color2[2] / 256;

    var value = [];
    value = value.concat([c1.red - c2.red, 0, 0, 0, c2.red]);
    value = value.concat([c1.green - c2.green, 0, 0, 0, c2.green]);
    value = value.concat([c1.blue - c2.blue, 0, 0, 0, c2.blue]);
    value = value.concat([0, 0, 0, 1, 0]);

    return value.join(' ');
}


/**
 * Create Additional Color Filters
 *
 * return [bool]
 */
function createSvgFilters (hex,i) {
    var filterNum = 'duotone_' + i,
        ns = 'http://www.w3.org/2000/svg',
        svg = document.createElementNS(ns,'svg'),
        filterEl = document.createElementNS(ns,"filter"),
        matrix = document.createElementNS(ns,"feColorMatrix");

        svg.setAttribute('style','color-interpolation-filters: sRGB');
        svg.classList.add('svg-filter');
        filterEl.setAttribute('id','duotone_' + i);
        matrix.setAttribute('type', 'matrix');
        matrix.setAttribute('values', duotone(hex));

    document.body.appendChild(svg).appendChild(filterEl).appendChild(matrix);
    return;
}

/**
 * Fire it up!
 *
 * Runs through the DOM and looks for data-hex
 * attributes. Takes the values and applies a
 * gradient map.
 */

(function(){
   var gradientImages = document.querySelectorAll('[data-hex]');
    gradientImages.forEach(function(img, i) {
        hex = img.dataset.hex;
        createSvgFilters(hex,i);
        filterName = '#duotone_' + i;
        img.setAttribute('style','filter: url('+ filterName +')');
    });
})();
