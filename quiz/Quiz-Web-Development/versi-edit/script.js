let filter = "all";

const input = document.getElementById("myInput");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("myUL");
const counter = document.getElementById("counter");
const notFound = document.getElementById("notFound");

// ===================== ADD TASK =====================
function newElement() {
    const value = input.value.trim();

    if (value === "") return alert("Task tidak boleh kosong!");

    const li = createItem(value, false);
    list.appendChild(li);

    input.value = "";
    updateCounter();
}

// ===================== CREATE ITEM =====================
function createItem(text, checked) {
    const li = document.createElement("li");

    if (checked) li.classList.add("checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    checkbox.addEventListener("change", () => {
        li.classList.toggle("checked");

        if (checkbox.checked) {
            list.appendChild(li); // pindah ke bawah
        } else {
            list.prepend(li);
        }

        updateCounter();
    });

    // TEXT
    const span = document.createElement("span");
    span.textContent = text;

    // EDIT
    span.addEventListener("dblclick", () => {
        const edit = document.createElement("input");
        edit.value = span.textContent;
        edit.className = "editInput";

        edit.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                span.textContent = edit.value;
                li.replaceChild(span, edit);
            }
        });

        li.replaceChild(edit, span);
    });

    // DELETE
    const del = document.createElement("span");
    del.textContent = "×";
    del.className = "close";

    del.onclick = () => {
        li.remove();
        updateCounter();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    return li;
}

// ===================== SEARCH (ANTI XSS) =====================
searchInput.addEventListener("input", function () {
    const val = this.value.toLowerCase();

    // XSS DETECTION
    const xssPattern = /<|>|script|\(|\)|onerror|onload|javascript:|<img|<svg/gi;

    if (xssPattern.test(val)) {
        alert("Hayoo, mau ngehack yaa. Nanti watashi laporkan polici LOOOOh");
        this.value = "";
        showAll();
        return;
    }

    let found = false;

    document.querySelectorAll("#myUL li").forEach(li => {
        const text = li.innerText.toLowerCase();

        if (text.includes(val)) {
            li.style.display = "flex";
            found = true;
        } else {
            li.style.display = "none";
        }
    });

    notFound.style.display = found ? "none" : "block";
});

// ===================== FILTER =====================
document.querySelectorAll(".filterBtn").forEach(btn => {
    btn.onclick = function () {
        document.querySelectorAll(".filterBtn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        filter = this.dataset.filter;
        applyFilter();
    };
});

function applyFilter() {
    document.querySelectorAll("#myUL li").forEach(li => {
        const isChecked = li.classList.contains("checked");

        if (filter === "all") li.style.display = "flex";
        if (filter === "active") li.style.display = isChecked ? "none" : "flex";
        if (filter === "completed") li.style.display = isChecked ? "flex" : "none";
    });
}

// ===================== CHECK ALL =====================
document.getElementById("checkAll").onclick = () => {
    document.querySelectorAll("#myUL li").forEach(li => {
        li.classList.add("checked");
    });
    updateCounter();
};

// ===================== UNCHECK ALL =====================
document.getElementById("uncheckAll").onclick = () => {
    document.querySelectorAll("#myUL li").forEach(li => {
        li.classList.remove("checked");
    });
    updateCounter();
};

// ===================== DELETE CHECKED =====================
document.getElementById("deleteChecked").onclick = () => {
    document.querySelectorAll("#myUL li.checked").forEach(li => li.remove());
    updateCounter();
};

// ===================== SHOW ALL =====================
function showAll() {
    document.querySelectorAll("#myUL li").forEach(li => {
        li.style.display = "flex";
    });
    notFound.style.display = "none";
}

// ===================== COUNTER =====================
function updateCounter() {
    const all = document.querySelectorAll("#myUL li").length;
    const done = document.querySelectorAll("#myUL li.checked").length;

    counter.textContent = `Selesai: ${done} / ${all}`;
}

// INIT
updateCounter();