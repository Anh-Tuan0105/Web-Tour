// Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if (buttonMenuMobile) {
    const menu = document.querySelector(".header .inner-menu");
    buttonMenuMobile.addEventListener("click", () => {
        menu.classList.add("active");
    })
    const overlay = document.querySelector(".header .inner-menu .inner-overlay");
    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
    })
    const listButtonSubMenu = menu.querySelectorAll("ul > li > i");
    listButtonSubMenu.forEach(button => {
        button.addEventListener("click", () => {
            const li = button.closest("li");
            li.classList.toggle("active");
        })
    })
}
// End Menu Mobile

// Box Address Section 1
const boxAddressSection1 = document.querySelector(".section-1 .inner-form .inner-address");
if (boxAddressSection1) {
    const input = boxAddressSection1.querySelector(".inner-input");
    const listItem = boxAddressSection1.querySelectorAll(".inner-suggest-list .inner-item");

    input.addEventListener("focus", () => {
        boxAddressSection1.classList.add("active");
    })

    input.addEventListener("blur", () => {
        boxAddressSection1.classList.remove("active");
    })

    listItem.forEach(item => {
        item.addEventListener("mousedown", () => {
            const title = item.querySelector(".inner-item-title").innerHTML.trim();
            input.value = title;
        })
    })

    input.addEventListener("keyup", () => {
        const keyWord = input.value.toLowerCase();
        listItem.forEach(item => {
            const title = item.querySelector(".inner-item-title").innerHTML.trim().toLowerCase();
            if (title.includes(keyWord)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    })
}
// End Box Address Section 1

// Box User Section 1
const boxUserSection1 = document.querySelector(".section-1 .inner-form .inner-user");
if (boxAddressSection1) {
    const input = boxUserSection1.querySelector(".inner-input");

    input.addEventListener("focus", () => {
        boxUserSection1.classList.add("active");
    })

    document.addEventListener("click", (event) => {
        if (!boxUserSection1.contains(event.target)) {
            boxUserSection1.classList.remove("active");
        }
    })

    const updateQuantityInput = () => {
        const listBoxNumber = boxUserSection1.querySelectorAll(".inner-number");
        const listNumber = [];
        listBoxNumber.forEach(item => {
            const number = item.innerHTML.trim();
            listNumber.push(number);
        })
        const value = `NL: ${listNumber[0]}, TE: ${listNumber[1]}, EB: ${listNumber[2]}`;
        input.value = value;
    }


    const listButtonUp = boxUserSection1.querySelectorAll(".inner-up");
    listButtonUp.forEach(button => {
        button.addEventListener("click", () => {
            const parent = button.closest(".inner-count");
            const boxNumber = parent.querySelector(".inner-number");
            const number = parseInt(boxNumber.innerHTML.trim());
            const numberUpdate = number + 1;
            boxNumber.innerHTML = numberUpdate;
            updateQuantityInput();
        })
    })

    const listButtonDown = boxUserSection1.querySelectorAll(".inner-down");
    listButtonDown.forEach(button => {
        button.addEventListener("click", () => {
            const parent = button.closest(".inner-count");
            const boxNumber = parent.querySelector(".inner-number");
            const number = parseInt(boxNumber.innerHTML.trim());
            if (number > 0) {
                const numberUpdate = number - 1;
                boxNumber.innerHTML = numberUpdate;
                updateQuantityInput();
            }
        })
    })
}
// End Box User Section 1