let inputBankinh;
let inputDuongkinh;
const PI = 3.14159 ;
inputBankinh = prompt("Nhập bán kính");
inputDuongkinh = prompt("Nhập đường kính");
let Bankinh = parseInt(inputBankinh);
let Duongkinh = parseInt(inputDuongkinh);
let area1 = Bankinh * Bankinh * PI ;
let area2 = (Duongkinh * Duongkinh)/4 * PI ;
document.write("Cách 1 cho ra diện tích bằng: " +area1);
document.write('<br/>')
document.write("Cách 2 cho ra diện tích bằng: " +area2);