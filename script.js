function converter() {
    let num = document.querySelector('#numIn').value;
    let measureType = document.getElementsByTagName('option');

    if(measureType[0].selected) {
        return document.querySelector('#numOut').value = Number(num) * 1000;
    } else if(measureType[1].selected) {
        return document.querySelector('#numOut').value = Number(num) * 100;
    } else if(measureType[2].selected) {
        return document.querySelector('#numOut').value = Number(num) * 10;
    } else if(measureType[3].selected) {
        return document.querySelector('#numOut').value = Number(num) / 1000;
    } else if(measureType[4].selected) {
        return document.querySelector('#numOut').value = Number(num) / 100;
    } else {
        return document.querySelector('#numOut').value = Number(num) / 10;
    };
};
