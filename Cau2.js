let integers = [1, 3, 4, 5, 6, 7, 45, 76];
function findInteger(number) {
    let found = false;
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] == number) {
            console.log(`Số ${number} có tồn tại tại vị trí thứ ${i} trong mảng`);
            found = true;
            //break;
        }
    }
    if (!found) {
        console.log(`Số ${number} không tồn tại trong mảng`);
    }
}

findInteger(5);




