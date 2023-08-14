// Lấy tất cả các phần tử có thuộc tính data-created
const createdTimeElements = document.querySelectorAll("[data-created]");

// Lặp qua từng phần tử để xử lý thời gian tạo
createdTimeElements.forEach(function (element) {
  const createdTime = new Date(element.getAttribute("data-created"));
  const currentTime = new Date();

  const timeDifference = currentTime - createdTime;
  const hours = Math.floor(timeDifference / 3600000);
  const days = Math.floor(hours / 24); // Số ngày

  let createdString;
  if (days > 0) {
    createdString = `created ${days} day(s) ago`;
  } else if (hours > 0) {
    createdString = `created ${hours} hour(s) ago`;
  } else {
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    createdString = `created ${minutes} minute(s) ago`;
  }

  // Thay đổi nội dung của phần tử để hiển thị chuỗi đã tạo
  element.textContent = createdString;
});
