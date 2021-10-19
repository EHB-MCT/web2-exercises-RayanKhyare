import Cleave from 'cleave.js';

var cleave = new Cleave('.nameInput', {
    prefix: 'STUDENT',
    delimiter: '-',
    blocks: [7, 5, 6],
    uppercase: true
});

var cleave = new Cleave('.dateInput', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('.rrnInput', {
    delimiter: '-',
    blocks: [2, 2, 2, 3, 2],

});

new Cleave('.ageInput', {
    numeral: true,
    numeralPositiveOnly: true
});