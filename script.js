const dateElement = document.getElementById("date");
const yearElement = document.getElementById("year");
const button = document.getElementById("understood");
const toast = document.getElementById("toast");

const now = new Date();

dateElement.textContent = now.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

yearElement.textContent = now.getFullYear();

button.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);

});