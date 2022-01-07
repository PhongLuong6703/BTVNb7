/*
Bài 1: Từ bàn phím nhập 3 cạnh của 1 tam giác vuông, 
tính diện tích đường tròn ngoại tiếp tam giác này? 
(lưu ý có sử dụng const pi)
*/
console.log("Bài 1:")
let a = prompt("Nhap Do Dai Canh Goc Vuong Thu Nhat");
let b = prompt("Nhap Do Dai Canh Goc Vuong Thu Hai");
let c = prompt("Nhap Do Dai Canh Huyen");
const pi = 3.1415;
let s = (Math.pow(c/2,2))*pi;
if (Math.pow(Number(a),2) + Math.pow(Number(b),2) == Math.pow(Number(c),2)) {
    alert(`Dien Tich Duong Tron Ngoai Tiep Tam Giac La: ${s.toFixed(3)}`);
} 
else {
    alert('Gia Tri Ban Vua Nhap Khong Phai 3 Canh Cua Tam Giac Vuong. Vui Long Nhap Lai');
}

/*
Bài 2:  Trích những câu hát trong bài Hãy Trao Cho Anh
Hãy trao cho anh hãy trao cho anh
Hãy trao cho anh thứ anh đang mong chờ (oh oh oh oh)
Hãy trao cho anh hãy trao cho anh
Hãy mau làm điều ta muốn vào khoảnh khắc này đê (oh oh oh oh)
1.	Cho biết đoạn này có bao nhiêu kí tự không tính khoảng trắng?
2.	Viết hoa toàn bộ đoạn bài hát trên
3.	Viết thường toàn bộ đoạn bài hát trên
4.	Thay thế toàn bộ chữ “anh”  thành chữ em

 */
console.log("")
console.log("Bài 2:")
let p = `Hãy trao cho anh hãy trao cho anh
Hãy trao cho anh thứ anh đang mong chờ (oh oh oh oh)
Hãy trao cho anh hãy trao cho anh
Hãy mau làm điều ta muốn vào khoảnh khắc này đê (oh oh oh oh)`
let _p = p.replace(/\s+/g,'');
console.log(_p.length);
console.log(p.toUpperCase());
console.log(p.toLowerCase());
console.log(p.replace(/anh/g,"em"));
/*
Bài 3: cho một biến let x = 10. Điền câu trả lời vào những câu giá trị
a.	x++ – --x + x--
b.	++x – x++ + x-- + x++
*/
console.log(" ");
console.log("Bai 3:");
let  x = 10;
console.log(`a) x++ - --x + x-- = ${x++ - --x + x--}`);
console.log(` x++ : 10
 --x : 10
 x-- : 10`);
console.log(" ");
console.log(`b) ++x - x++ + x-- + x++ = ${++x - x++ + x-- + x++}`);
console.log(` ++x : 11
 x++ : 11
 x-- : 12
 x++ : 11`);
