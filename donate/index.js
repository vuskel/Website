const box = document.querySelectorAll('.box');

function generateDefaultText(idx) {
    switch (idx) {
        case 0:
            return 'Account number';
        case 1:
            return 'IFSC code';
        case 2:
            return 'SWIFT code';
        case 3:
            return 'MICR code';
        case 4:
            return 'Branch code';
        case 5:
            return 'Pin';
        case 6:
            return 'Address';
        default:
            return '';
    }
}

function generateText(idx) {
    switch (idx) {
        case 0:
            return '1443127000809';
        case 1:
            return 'CNRB0001443';
        case 2:
            return 'CNRBINBB';
        case 3:
            return '678015008';
        case 4:
            return '001443';
        case 5:
            return '678025';
        case 6:
            return 'MAIN RD, OPP.GOVT. U.P.SCHOOL, KALLEKAD, PALAKKAD DIST-678 025M';
        default:
            return '';
    }
}

box.forEach((b, idx) => {
    b.addEventListener('mouseover', () => {
        let text = b.textContent;
        if (generateText(idx) !== '') {
            text = generateText(idx);
        }

        b.innerHTML = text;
    });

    b.addEventListener('mouseout', () => {
        let text = b.textContent;
        if (generateDefaultText(idx) !== '') {
            text = generateDefaultText(idx);
        }

        b.innerHTML = text;
    });
});
