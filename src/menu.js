import clamChowder from "./images/clam_chowder.png"
import simFruit from "./images/copious_simmered_fruit.png"
import meatCurry from "./images/gourmet_meat_curry.png"
import heartSoup from "./images/heart_soup.png"
import honeyFruits from "./images/honeyed_fruits.png"
import meatRice from "./images/prime_meat_and_rice_bowl.png"
import paella from "./images/seafood_pealla.png"
import vegeCurry from "./images/vegetable_curry.png"

const foodArr = [[clamChowder, "Clam Chowder", "20", "Milk, Rice, Butter, and a fresh hearty blueshell snail"], 
[simFruit, "Copious Simmered Fruit", "10", "A variety of fresh fruit picked daily"],
[meatCurry, "Gourmet Meat Curry", "70", "Gourmet Meat, Hylian Rice, and a touch of Goron spice"], 
[heartSoup, "Creamy Heart Soup", "40", "Fresh Milk, Hearty Radishes, one Hydromelon, and one Voltfruit"],
[honeyFruits, "Honeyed Fruit", "5", "Courser bee honey drizzled lightly over an assortment of delicious fruit"], 
[meatRice, "Prime Meat and Rice Bowl", "50", "Prime Meat and Hylian Rice, seasoned with aged rock salt"],
[paella, "Seafood Pealla", "50", "Fresh seafood cooked with Hylian Rice, butter, and rock salt"], 
[vegeCurry, "Vegetable Curry", "30", "Hylian Rice and an assortment of fresh vegetables, layered with Goron spice"]]

function menu() {
    const div = document.createElement("div");
    div.classList.add("menu-grid", "invisible")

    for (let meal of foodArr){
        const card = document.createElement("div")
        card.classList.add("grid-card")

        const cardImg = document.createElement("img")
        cardImg.classList.add("card-img")
        cardImg.src = meal[0]
        cardImg.alt = meal[1]

        const foodName = document.createElement("span")
        foodName.textContent = meal[1]
        foodName.classList.add("food-name")

        const foodDesc = document.createElement("span")
        foodDesc.classList.add("food-desc")
        foodDesc.textContent = meal[3]

        const foodPrice = document.createElement("span")
        foodPrice.classList.add("food-price")
        foodPrice.textContent = `\$${meal[2]}`
        card.append(cardImg, foodName, foodDesc, foodPrice)
        
        div.append(card)
    }
    return div
}

export default menu