Dò luồng & Sửa lỗi Tính Cước Lũy tiến Chuyến xe GrabRide
1. Phân tích lỗi

Trong mã nguồn ban đầu, đoạn code tính cước khi quãng đường lớn hơn 2 km là:

if (distanceInKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + distanceInKm * extraFarePerKm;
}

Lỗi nằm ở công thức:

totalFare = baseFare + distanceInKm * extraFarePerKm;
Nguyên nhân lỗi

baseFare = 12.000 VNĐ đã bao gồm 2 km đầu tiên.

Vì vậy, khi quãng đường lớn hơn 2 km, chỉ phần quãng đường vượt quá 2 km mới được tính thêm 4.500 VNĐ/km.

Mã nguồn cũ lại lấy toàn bộ quãng đường để tính thêm:

baseFare + distanceInKm × extraFarePerKm

Do đó, 2 km đầu tiên bị tính tiền hai lần.

Công thức đúng

Khi distanceInKm > 2:

totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
2. Bảng Test Cases
Trường hợp kiểm thử	Dữ liệu đầu vào	Kết quả sai thực tế	Kết quả đúng mong đợi
TC01 - Chuyến đi 2 km, không mưa	distanceInKm = 2, isHeavyRain = false	12.000 VNĐ	12.000 VNĐ
TC02 - Chuyến đi 4 km, mưa lớn	distanceInKm = 4, isHeavyRain = true	36.000 VNĐ	25.200 VNĐ
3. Phân tích Test Case 01

Dữ liệu:

distanceInKm = 2
isHeavyRain = false

Vì quãng đường không vượt quá 2 km nên chỉ tính cước cơ bản:

totalFare = 12.000 VNĐ

Không có phụ phí mưa lớn.

Kết quả đúng:

12.000 VNĐ

Mã nguồn cũ cũng cho kết quả đúng trong trường hợp này.

4. Phân tích Test Case 02

Dữ liệu:

distanceInKm = 4
isHeavyRain = true
Kết quả sai của mã nguồn cũ

Mã nguồn cũ tính:

12.000 + 4 × 4.500
= 12.000 + 18.000
= 30.000 VNĐ

Sau đó cộng phụ phí mưa lớn 20%:

30.000 × 1.2
= 36.000 VNĐ

Kết quả sai:

36.000 VNĐ
Kết quả đúng

2 km đầu tiên:

12.000 VNĐ

2 km còn lại:

(4 - 2) × 4.500
= 9.000 VNĐ

Cước trước phụ phí:

12.000 + 9.000
= 21.000 VNĐ

Phụ phí mưa lớn 20%:

21.000 × 1.2
= 25.200 VNĐ

Kết quả đúng:

25.200 VNĐ
5. Defensive Programming

Chương trình cần kiểm tra dữ liệu quãng đường trước khi tính cước.

Nếu quãng đường nhỏ hơn 0 thì dữ liệu không hợp lệ:

if (distanceInKm < 0) {
  console.log("Quãng đường không hợp lệ.");
}

Việc kiểm tra này giúp chương trình không thực hiện phép tính cước với dữ liệu không hợp lệ.