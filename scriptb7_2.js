/*
1.Viết chương trình tính căn bậc 2 của các số ngẫu nhiên

 -Tạo 2 biến với prompt() cho phép người dùng nhập giá trị cần nhập
 -Tìm hiểu về variables và constant
 -Tìm hiểu thêm về Math.sqrt() trong JavaScript
*/
console.log("Bài 1:");
var a = prompt("Nhập Số Thứ Nhất (≥0): ");
var b = prompt("Nhập Số Thứ Hai (≥0): ");
const A = Math.sqrt(Number(a));
const B = Math.sqrt(Number(b));
if (A >= 0) {
    alert(`Căn Bậc Hai của ${Number(a)} là: ${A}`);
} else {
    alert("Giá Trị Số Thứ Nhất Không Thoả Mãn. Vui Lòng Nhập Lại");
}
if (B >= 0) {
    alert(`Căn Bậc Hai của ${Number(b)} là: ${B}`);
} else {
    alert("Giá Trị Số Thứ Hai Không Thoả Mãn. Vui Lòng Nhập Lại");
}
/*
2. Viết chương trình tính diện tích của một tam giác

 -Tạo 2 biến với prompt() cho phép người dùng nhập các giá trị chiều cao và độ dài cạnh đáy
 -Tìm hiểu về operators
 -Tìm hiểu thêm về Math.sqrt() trong JavaScript
*/

console.log("Bài 2:");
var h = prompt("Nhập Giá Trị Độ Dài Chiều Cao Tam Giác (>0): ");
var d = prompt("Nhập Giá Trị Chiều Dài Cạnh Đáy Tương Ứng (>0): ");
const s = a*h/2;
if (h < 0) {
    alert("Giá Trị Độ Dài Chiều Cao Không Thoả Mãn. Vui Lòng Nhập Lại.")
}
else if (d < 0) {
    alert("Giá Trị Chiều Dài Cạnh Đáy Tương Ứng Không Thoả Mãn. Vui Lòng Nhập Lại.");
}
else {
    alert(`Diện Tích Tam Giác Là: ${s}`);
}

/*
3.Viết chương trình chuyển từ độ F sang độ C

 -Tạo 2 biến với prompt() cho phép người dùng nhập giá trị F
 -Tìm hiểu về variables và constant
 -Tìm hiểu về operators
*/
console.log("Bài 3:");
var f1 = prompt("Nhập Giá Trị Độ F Thứ Nhất (≥ -459.4 °F): ");
var f2 = prompt("Nhập Giá Trị Độ F Thứ Hai (≥ -459.4 °F): ");
const c1 = (Number(f1) - 32)*5/9;
const c2 = (Number(f2) - 32)*5/9;
if (f1 > -459.4) {
    alert(`${f1} °F = ${c1} °C`);
}
else {
    alert("Giá Trị Độ F Thứ Nhất Không Thoả Mãn. Vui Lòng Nhập Lại.");
}
if (f2 > -459.4) {
    alert(`${f2} °F = ${c2} °C`);
}
else {
    alert("Giá Trị Độ F Thứ Hai Không Thoả Mãn. Vui Lòng Nhập Lại.");
}

/*
4.Viết chương trình chuyển từ km sang m

 -Tạo 2 biến với prompt() cho phép người dùng nhập quãng đường dài bằng km
 -Tìm hiểu về variables và constant
 -Tìm hiểu về operators
*/
console.log("Bài 4:");
var km1 = prompt("Nhập Độ Dài Quãng Đường Thứ Nhất (Km; ≥0): ");
var km2 = prompt("Nhập Độ Dài Quãng Đường Thứ Hai (Km; ≥0): ");
const m1 = km1*1000;
const m2 = km2*1000;
if (km1 >= 0) {
    alert(`${km1}km = ${m1}m`);
}
else {
    alert("Giá Trị Độ Dài Quãng Đường Thứ Nhất Không Thoả Mãn. Vui Lòng Nhập Lại.");
}
if (km2 >= 0) {
    alert(`${km2}km = ${m2}m`);
}
else {
    alert("Giá Trị Độ Dài Quãng Đường Thứ Hai Không Thoả Mãn. Vui Lòng Nhập Lại.");
}