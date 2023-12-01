const itemTitles = document.querySelectorAll('.left-body-item-title');
const itemDescs = document.querySelectorAll('.left-body-item-desc');

let activeIndex = 0;

// Hiển thị mặc định item có index là 0
itemDescs[activeIndex].classList.add('active');

itemTitles.forEach((itemTitle, index) => {
    itemTitle.addEventListener('click', () => {
        if (activeIndex !== index) {
            // Ẩn item đang hiển thị
            itemDescs[activeIndex].classList.remove('active');
      
            // Hiển thị item mới
            itemDescs[index].classList.add('active');
            activeIndex = index;
          }
    });
  });