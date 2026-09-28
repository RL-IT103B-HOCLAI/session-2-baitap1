const bookingId = "GRB-84920";
const customerName = "Trần Thị Mai";
const distanceInKm = 4;
const isHeavyRain = true;
const baseFare = 12000;
const extraFarePerKm = 4500;
let totalFare = 0;
if (distanceInKm < 0) {
  console.log("Quãng đường không hợp lệ.");
} else {
  if (distanceInKm <= 2) {
    totalFare = baseFare;
  } else {
    totalFare = baseFare + (distanceInKm - 2) * extraFarePerKm;
  }
  if (isHeavyRain) {
    totalFare = totalFare * 1.2;
  }
  console.log("Mã chuyến đi:", bookingId);
  console.log("Khách hàng:", customerName);
  console.log("Quãng đường:", distanceInKm, "km");
  console.log("Tổng cước chuyến đi:", totalFare, "VNĐ");
}
