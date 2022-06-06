import "./style.css"
import homePage from "./homepage"
import menu from "./menu"
import contactPage from "./contact"

function transitionPatch(){
    setTimeout(() => {
        document.querySelector("#content div").classList.remove("invisible")
    }, 100)
}

function createHeader(){
    const header = document.createElement("header")
    const title = document.createElement("h1")
    title.classList.add("title")
    title.textContent = "Taste of the Wild"

    const btnList = document.createElement("ul")
    btnList.classList.add("btn-list")
    const buttonInfo = [
        {text: "Menu", eventFn: menu, eventFNStr: "menu", classN: "power",},
        {text: "Home", eventFn: homePage, eventFNStr: "homePage", classN: "courage",},
        {text: "Contact", eventFn: contactPage, eventFNStr: "contactPage", classN: "wisdom",}
    ]

    for (let button of buttonInfo){
        const item = document.createElement("li")
        const btn = document.createElement("button")
        btn.textContent = button.text 
        btn.classList.add(button.classN, "header-btn")
        btn.addEventListener("click", (e) => {
            const headerBtns = document.querySelectorAll(".header-btn")
            for (let btn of headerBtns){
                if (btn !== e.target) {
                    btn.classList.remove("clicked")
                    btn.disabled = false
                }
                else {
                    btn.classList.add("clicked")
                    btn.disabled = true
                }
            }
            resetContent().appendChild(button.eventFn())
            transitionPatch()
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
    footerText.textContent = "2022. Made by Darnell. View more projects "

    const ghLink = document.createElement("a")
    ghLink.classList.add("footer-link")
    ghLink.target = "blank"
    ghLink.href = "https://github.com/DrantDumani"
    footerText.append(ghLink)

    const artCredit = document.createElement("p")
    artCredit.textContent = "Background image created by "

    const creditLink = document.createElement("a")
    creditLink.textContent = "EvZone"
    creditLink.href = "https://alphacoders.com/users/profile/148956/EvZone"
    creditLink.target = "blank"

    const ghSVG = document.createElementNS("http://www.w3.org/2000/svg","svg")
    ghSVG.setAttribute("style", "width:24px;height:24px")
    ghSVG.setAttribute("viewBox", "0 0 24 24")
    
    const svgPath = document.createElementNS("http://www.w3.org/2000/svg","path")
    svgPath.setAttribute("fill", "currentColor")
    svgPath.setAttribute("d", "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z")
    ghSVG.append(svgPath)
    ghLink.appendChild(ghSVG)

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
    transitionPatch()
})