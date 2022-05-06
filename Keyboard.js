const keyLayoutEng = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "Backspace1",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "Delete",
    "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter1",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", ".", ",", "/", "↑", "Shift1",
    "Ctrl1", "Win", "Alt", "space", "Alt", "Ctrl", "←", "↓", "→"
];

let body = document.querySelector("body");
let textarea = document.createElement("textarea");
textarea.classList.add("text");

body.appendChild(textarea);

let ul = document.createElement("ul");
body.appendChild(ul);


for (let key of keyLayoutEng) {
    if (key === "Ctrl1") {
        let button = document.createElement("button");
        button.classList.add("btn_keyboard");
        button.style.marginLeft = "7px";
        button.innerHTML = key;
        button.innerHTML = button.innerHTML.slice(0, button.innerHTML.length - 1);
        ul.appendChild(button);
        continue;
    }
    if (key !== "Backspace1" && key !== "Delete1" && key !== "Enter1" && key !== "Shift1" && key !== "space") {
        let button = document.createElement("button");
        button.classList.add("btn_keyboard");
        button.innerHTML = key;
        ul.appendChild(button);
    } else if (key !== "space") {
        let button = document.createElement("button");
        button.classList.add("btn_keyboard");
        button.innerHTML = key;
        button.innerHTML = button.innerHTML.slice(0, button.innerHTML.length - 1);
        ul.appendChild(button);
    } else if (key === "space") {
        let button = document.createElement("button");
        button.id = "space";
        button.classList.add("btn_space");
        ul.appendChild(button);
    }

}

let keys = document.querySelectorAll("button");
let space = document.querySelector(".btn_space");
let count_CL = 1;

for (let button of keys) {
    button.addEventListener("click", function () {
        var posCursor = this.selectionEnd;

        if (this.innerHTML !== "Tab" && this.innerHTML !== "CapsLock" && this.innerHTML !== "Shift" &&
            this.innerHTML !== "Ctrl" && this.innerHTML !== "Alt" && this.innerHTML !== "Enter" &&
            this.innerHTML !== "Backspace" && this.innerHTML !== "Win" && this.innerHTML !== "Delete" && this !== space) {
            if (count_CL % 2) {
                textarea.value += this.innerHTML.toLowerCase();
            } else {
                textarea.value += this.innerHTML.toUpperCase();
            }
        } else if (this.innerHTML === "Backspace") {
            if (textarea.selectionStart > 0) {
                textarea.value = textarea.value.slice(0, textarea.selectionStart - 1) + textarea.value.slice(textarea.selectionStart, textarea.value.length);
            } else {
                textarea.value = textarea.value.slice(0, textarea.value.length - 1);
                console.log(textarea.selectionStart);
            }
        } else if (this.innerHTML === "Enter") {
            textarea.value = textarea.value + "\n";
        } else if (this.innerHTML.length === 0) {
            textarea.value = textarea.value + " ";
        } else if (this === space) {
            textarea.value = textarea.value.slice(0, posCursor) + " " + textarea.value;
        } else if (this.innerHTML === "Tab") {
            textarea.value = textarea.value + " " + " " + " " + " ";
        } else if (this.innerHTML === "Delete") {
            textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionStart + 1, textarea.value.length);
        } else if (this.innerHTML === "CapsLock") {
            count_CL++;
        }
    });
}


textarea.addEventListener("keydown", function (event) {
    let str = event.key;

    if (str !== "Tab" && str !== "Control" && str !== "CapsLock" &&
        str !== "Shift" && str !== "Enter" && str !== "Backspace" &&
        str !== "Win" && str !== "Delete" && str !== "Alt" &&
        str !== "ArrowRight" && str !== "ArrowLeft" &&
        str !== "ArrowUp" && str !== "ArrowDown" && str !== "Meta") {
        str = str.slice(str.length - 1);

    } else {
        str = event.key;
    }

    for (let elem of keys) {

        if (elem.innerHTML.toUpperCase() === str.toUpperCase()) {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (elem.innerHTML === "Ctrl" && str === "Control") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (str === "ArrowRight" && elem.innerHTML === "→") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (str === "ArrowLeft" && elem.innerHTML === "←") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (str === "ArrowDown" && elem.innerHTML === "↓") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (str === "ArrowUp" && elem.innerHTML === "↑") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (str === "Meta" && elem.innerHTML === "Win") {
            elem.classList.remove("btn_keyboard_inactive");
            elem.classList.add("btn_keyboard_active");
        }

        if (elem.classList.contains("btn_space") && str === " ") {
            elem.classList.remove("btn_space");
            elem.classList.add("btn_space_active");
        }

        if (str === "Tab" && elem.innerHTML === "Tab") {
            textarea.value = textarea.value + " " + " " + " " + " ";
        }
    }
});

textarea.addEventListener("keyup", function (event) {
    let str = event.key;

    for (let elem of keys) {
        if (elem.classList.contains("btn_keyboard_active") &&
            str.toUpperCase() === elem.innerHTML.toUpperCase()) {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }
        if (str === "ArrowRight" && elem.innerHTML === "→" && elem.classList.contains("btn_keyboard_active")) {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (str === "ArrowLeft" && elem.innerHTML === "←" && elem.classList.contains("btn_keyboard_active")) {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (str === "ArrowDown" && elem.innerHTML === "↓" && elem.classList.contains("btn_keyboard_active")) {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (str === "ArrowUp" && elem.innerHTML === "↑" && elem.classList.contains("btn_keyboard_active")) {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (elem.innerHTML === "Ctrl" && str === "Control") {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (elem.innerHTML === "Tab" && str === "Tab") {
            elem.classList.remove("btn_keyboard_active");
            elem.classList.add("btn_keyboard_inactive");
        }

        if (elem.classList.contains("btn_space_active")) {
            elem.classList.remove("btn_space_active");
            elem.classList.add("btn_space");
        }

        if (str === "Tab") {
            event.preventDefault()
        }
    }
});