import "./style.css"
import testBg from "./test-bg.jpg"

function init(){
    const container = document.createElement("div")
    container.id = "content"

    const title = document.createElement("h1")
    title.textContent = "Taste of the Wild"
    container.appendChild(title)

    return container;
}

document.body.appendChild(init())