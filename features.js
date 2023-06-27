const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");


btn.addEventListener("click", () => {
    btn.classList.toggle('active')
    menu.classList.toggle('show');
    // dimmed კლასი მენიუს გახსნისას ამუქებს ბადის
    document.body.classList.toggle('dimmed')
})