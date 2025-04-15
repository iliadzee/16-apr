// const inputSearch = document.getElementById("input-search")
// const addBtn = document.getElementById("add-btn")
// const list = document.getElementById("search-list")


// addBtn.addEventListener("click", typeInput)

// function typeInput() {
//     const searchText = inputSearch.value.trim()
//     const listItem = document.createElement("div");
    
    
//     const textSpan = document.createElement("div");
//     textSpan.classList.add("flex-1", "text-gray-700");
//     textSpan.textContent = searchText;



//     const onGoing = document.createElement("div")
//     onGoing.classList.add("flex", "gap-2")


//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = "<i class=\"fa-solid fa-trash\"></i>"
//     deleteBtn.classList.add("text-red-500", "hover:text-red-600", "focus:outline:none")
//     deleteBtn.addEventListener("click", () => {
//         todoList.removeChild(listItem);
//     })

//     onGoing.appendChild(deleteBtn);
//     listItem.appendChild(onGoing);
//     listItem.appendChild(textSpan);
    
//     inputSearch.value = ""
//     inputSearch.focus();
// }


var currentIndex = 0;
    const wrapper = document.getElementById('swiperWrapper');
    const total = wrapper.children.length - 2;

    function updateSlide() {
      wrapper.style.transform = `translateX(-${currentIndex * 60}%)`;
    }

    function slideNext() {
      if (currentIndex < total) {
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
      updateSlide();
    }

    function slidePrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1; 
      }
      updateSlide();
    }