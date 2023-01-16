//ax^2 + bx + c = 0
function giaiPhuongTrinh(a, b, c) {
    if (a == 0) {
        console.log('a phải khác không');
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            console.log('Phương trình vô nghiệm')
        };
        if (delta == 0) {
            let x = -b / (2 * a);
            console.log(`Phương trình có 1 nghiệm x=${x}`);
        };
        if (delta > 0) {
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);
            console.log(`Phương trình có nghiệm x1= ${x1}; x2= ${x2}`);
        }
    }
}

giaiPhuongTrinh(8, 12, -20)
//Phương trình có nghiệm x1= -2.5; x2= 1
