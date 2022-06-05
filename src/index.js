import "./style.css"
import homePage from "./homepage"
import menu from "./menu"
import contactPage from "./contact"

function createHeader(){
    const header = document.createElement("header")
    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "Taste of the Wild"

    const btnList = document.createElement("ul")
    btnList.classList.add("btn-list")
    const buttonInfo = [
        {text: "Menu", eventFn: menu, classN: "power",},
        {text: "Home", eventFn: homePage, classN: "courage",},
        {text: "Contact", eventFn: contactPage, classN: "wisdom",}
    ]

    for (let button of buttonInfo){
        const item = document.createElement("li")
        const btn = document.createElement("button")
        btn.textContent = button.text 
        btn.classList.add(button.classN, "header-btn")
        btn.addEventListener("click", (e) => {
            const headerBtns = document.querySelectorAll(".header-btn")
            for (let btn of headerBtns){
                if (btn !== e.target) btn.classList.remove("clicked")
                else btn.classList.add("clicked")
            }
            resetContent().appendChild(button.eventFn())
        })
        item.append(btn)
        btnList.append(item)
    }

    header.append(title, btnList)
    return header
}

function createFooter(){
    const footer = document.createElement("footer")
    const footerText = document.createElement("p")

    footerText.textContent = "Place your github and social media links here. Fake phone num too."
    const artCredit = document.createElement("p")
    artCredit.textContent = "Background image created by "
    const creditLink = document.createElement("a")
    creditLink.textContent = "EvZone"
    creditLink.href = "https://alphacoders.com/users/profile/148956/EvZone"
    creditLink.target = "blank"

    artCredit.append(creditLink)
    footer.append(footerText, artCredit)
    return footer
}

function resetContent(){
    const contentDiv = document.querySelector("#content");
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild)
    }
    return contentDiv
}

document.body.insertBefore(createHeader(), document.querySelector("#content"))
document.body.append(createFooter())

window.addEventListener("load", () => {
    document.querySelector("#content").appendChild(homePage())
})