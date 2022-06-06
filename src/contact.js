import castleRestaurant from "./images/Hyrule_Castle.png"

function contactPage() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add('contact')
    
    let restuarantImg = document.createElement("img")
    restuarantImg.src = castleRestaurant
    restuarantImg.alt = "Original location"
    restuarantImg.classList.add("contact-img")

    const locationText = document.createElement("p")
    locationText.textContent = "Even one hundred years later, our original location of Hyrule Castle still stands strong. However, you may find us at any location with a cooking pot. We're open 24/7, rain, snow, shine, or blistering heat. Feel free to place an early reservation to obtain a live viewing of the chef's masterful technique."

    const slateContactText = document.createElement("p")
    slateContactText.textContent = "To make a reservation, feel free to contact us via Sheikah Slate. If you do so, please send a photo of your preferred location."
    contactDiv.append(restuarantImg, locationText, slateContactText)
    return contactDiv
}

export default contactPage