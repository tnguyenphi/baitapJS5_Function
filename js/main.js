/**
 * Bài Tập 1: Tính điểm chuẩn 
 */


function ketQuaDaiHoc() {
    var diemChuan = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var KV = document.getElementById("KhuVuc").value;
    var doiTuong = document.getElementById("DoiTuong").value;
    var diemThiSinh = Number(num2) + Number(num3) + Number(num4);
    if (KV == "A" && doiTuong == "1") {
        diemThiSinh = Number(diemThiSinh) + 2 + 2.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "A" && doiTuong == "2") {
        diemThiSinh = Number(diemThiSinh) + 2 + 1.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "A" && doiTuong == "3") {
        diemThiSinh = Number(diemThiSinh) + 2 + 1;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "B" && doiTuong == "1") {
        diemThiSinh = Number(diemThiSinh) + 1 + 2.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "B" && doiTuong == "2") {
        diemThiSinh = Number(diemThiSinh) + 1 + 1.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "B" && doiTuong == "3") {
        diemThiSinh = Number(diemThiSinh) + 1 + 1;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "C" && doiTuong == "1") {
        diemThiSinh = Number(diemThiSinh) + 0.5 + 2.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "C" && doiTuong == "2") {
        diemThiSinh = Number(diemThiSinh) + 0.5 + 1.5;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    } else if (KV == "C" && doiTuong == "3") {
        diemThiSinh = Number(diemThiSinh) + 0.5 + 1;
        if (diemThiSinh > diemChuan) {
            document.getElementById("txtBai1").innerHTML = "Bạn đã đậu , Tổng Điểm : " + diemThiSinh;
        } else {
            document.getElementById("txtBai1").innerHTML = "Bạn đã Rớt , Tổng Điểm : " + diemThiSinh;
        }
    }
}

document.getElementById("btnBai1").onclick = ketQuaDaiHoc;


/**
 * Bài Tập 2: Tính tiền điện
 */


const First50Kw = 500;
const Next50Kw = 650;
const Next100Kw = 850;
const Next150Kw = 1100;
const Conlai = 1300;

function tinhTienDien() {
    var tongTien = 0;
    var SoKw = document.getElementById("soKw").value;
    if (SoKw > 0 && SoKw <= 50) {
        tongTien = SoKw * First50Kw;
        document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện : " + tongTien;
    } else if (SoKw > 50 && SoKw <= 100) {
        tongTien = (SoKw - 50) * Next50Kw + 50 * First50Kw;
        document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện : " + tongTien;
    } else if (SoKw > 100 && SoKw <= 200) {
        tongTien = (SoKw - 100) * Next100Kw + 50 * First50Kw + 50 * Next50Kw;
        document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện : " + tongTien;
    } else if (SoKw > 200 && SoKw <= 350) {
        tongTien = (SoKw - 200) * Next150Kw + 100 * Next100Kw + 50 * First50Kw + 50 * Next50Kw;
        document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện : " + tongTien;
    } else if (SoKw > 350) {
        tongTien = (SoKw - 350) * Conlai + 150 * Next150Kw + 100 * Next100Kw + 50 * First50Kw + 50 * Next50Kw;
        document.getElementById("txtTienDien").innerHTML = "Tổng tiền điện : " + tongTien;
    } else {
        document.getElementById("txtTienDien").innerHTML = "Số KW không hợp lệ"
    }
}

document.getElementById("btnTienDien").onclick = tinhTienDien;


/**
 * Bài 3: Tính tiền thuế
 * Khối 1:
 * _NHập họ và tên
 * _Nhập tổng thu nhập năm
 * _NHập số người phụ thuộc
 * Khối 2:
 * Công thức tính thuế theo mức thu nhập
 * Khối 3: Số tiền Thuế phải chi trả
 */


function tinhTienThue() {
    var hoVaTen = document.getElementById("nameThue").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value;
    var nguoiThue = document.getElementById("nguoiThue").value;
    var thuNhapThue = 0;
    var tienThue = 0;
    thuNhapThue = thuNhapNam - (4e+6) - nguoiThue * (1.6e+6);
    console.log(thuNhapThue);
    if (thuNhapThue >= 0 && thuNhapThue < (60e+6)) {
        tienThue = thuNhapThue * 0.05;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (60e+6) && thuNhapThue < (120e+6)) {
        tienThue = (60e+6) * 0.05 + (thuNhapThue - 60e+6) * 0.1;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (120e+6) && thuNhapThue < (210e+6)) {
        tienThue = (60e+6) * 0.05 + (60e+6) * 0.1 + (thuNhapThue - 120e+6) * 0.15;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (210e+6) && thuNhapThue < (384e+6)) {
        tienThue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (thuNhapThue - 210e+6) * 0.2;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (384e+6) && thuNhapThue < (624e+6)) {
        tienThue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (thuNhapThue - 384e+6) * 0.25;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (624e+6) && thuNhapThue < (960e+6)) {
        tienThue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (thuNhapThue - 624e+6) * 0.3;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    } else if (thuNhapThue >= (960e+6)) {
        tienThue = (60e+6) * 0.05 + (60e+6) * 0.1 + (90e+6) * 0.15 + (174e+6) * 0.2 + (240e+6) * 0.25 + (336e+6) + (thuNhapThue - 960e+6) * 0.35;
        document.getElementById("txtThue").innerHTML = "Họ Và Tên : " + hoVaTen + "; Tiền thuế thu nhập cá nhân : " + (new Intl.NumberFormat('de-DE').format(tienThue)) + "VNĐ";
    }

}

document.getElementById("btnThue").onclick = tinhTienThue;

/**
 * Bài 4: Tính Tiền Thuê bao
 */
function Anhien() {
    var x = document.getElementById("loaiKH").value;
    if (x == "CN" || x == "KH") {
        document.getElementById("ketNoi").style.display = "none";
    } else {
        document.getElementById("ketNoi").style.display = "block";
    }
    return x;
}
Anhien();

function tinhtienCap(){
    var maKH = document.getElementById("maKH").value;
    var kenhCaoCap = document.getElementById("kenhCaoCap").value;
    var x = document.getElementById("loaiKH").value;
    var moneyCap = 0;
    if (x =="CN"){
        moneyCap = 4.5 + 20.5 + 7.5*kenhCaoCap;
        document.getElementById("txtCap").innerHTML = "Mã Khách hàng: " + maKH + "; Tiền Cáp : $" + moneyCap;
    }else if (x == "DN") {
        var y = document.getElementById("soKetNoi").value;
        if (y>=0 && y<=10){
            moneyCap = 15 + 75 + 50*kenhCaoCap;
            document.getElementById("txtCap").innerHTML = "Mã Khách hàng: " + maKH + "; Tiền Cáp : $" + moneyCap;
        }else if( y>10){
            moneyCap = 15 + 75+ (y-10)*5 + 50*kenhCaoCap;
            document.getElementById("txtCap").innerHTML = "Mã Khách hàng: " + maKH + "; Tiền Cáp : $" + moneyCap;
        }
    }
}
document.getElementById("btnCap").onclick = tinhtienCap;
