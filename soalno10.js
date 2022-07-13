let year = 2021;
let year1 = 2024;
function tahunKabisat() {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' adalah tahun kabisat');
    } else {
        console.log(year + ' bukan tahun kabisat');
    }
}
tahunKabisat();
function tahunKabisat1() {

    if ((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)) {
        console.log(year1 + ' adalah tahun kabisat');
    } else {
        console.log(year1 + ' bukan tahun kabisat');
    }
}

tahunKabisat1();

