const botao = document.querySelector("#botao")
const msg = document.querySelector("#msg")

botao.addEventListener("click", texto)

function texto() {
  msg.innerHTML = "Seja bem-vindo(a) ao meu site!"
}
