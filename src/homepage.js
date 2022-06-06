import chefLink from "./images/ChefLink.jpg"

function homePage() {
    const container = document.createElement("div");
    container.classList.add("invisible", "homepage")
    const restuarantText = document.createElement("p")

    const homePageImg = document.createElement("img")
    homePageImg.src = chefLink
    homePage.alt = "Chef Link's culinary expertise"
    homePageImg.classList.add("homePage-img")
    container.append(homePageImg)

    restuarantText.textContent = "Over one hundred years worth of recipes created purely from naturally growing ingredients. Taste of the wild is certain to deliver to you a refreshing and delicious experience."
    container.append(restuarantText)
    return container
}

export default homePage