const form = document.querySelector("form")
const input_sub = document.querySelector("#add_item")
const ul = document.querySelector("#lista_compras")
const footer = document.querySelector("footer")

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    // Criando a condição
    if (input_sub.value === ""){
        return
    }

    // Vamos criar os elementos do HTML
    const div = document.createElement("div")
    
    // criando e aributos do input
    const input_ch = document.createElement("input")
    input_ch.setAttribute("type", "checkbox")
    input_ch.setAttribute("hidden", true)
    input_ch.setAttribute("id", input_sub.value)

    // criando e atributos do label
    const label = document.createElement("label")
    label.setAttribute("for", input_sub.value)

    // Criando e colocando conteúdo no li
    const li = document.createElement("li")
    li.textContent = input_sub.value

    // Criando e adicionando atribubos ao button 
    const button = document.createElement("button")
    button.textContent = "Remover item"
    button.classList.add("remove")

    // Adiciona os elementos no HTML
    div.append(input_ch, label, li, button)
    ul.appendChild(div)

    // Reset no input após fazer o submit
    input_sub.value = ""
})


// Maneira que eu encontrei para remover o item
ul.addEventListener("click", (event)=> {
    if (event.target.tagName === "BUTTON"){
        const div = event.target.closest("div")
        div.remove()

        footer.classList.remove("hide")
    }
})

footer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        footer.classList.add("hide")
    }
})