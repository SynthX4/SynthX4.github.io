/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const MINECRAFT_KEY_ART_URL = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ef/Minecraft_vertical_key_art.jpg";
const SKYRIM_XBOX_ART_URL = "https://static.wikia.nocookie.net/skyrim_gamepedia/images/f/f9/SkyrimXbox.jpg";
const MEGA_MAN_6_BOX_ART_URL = "https://static.wikia.nocookie.net/megaman/images/d/d5/Mega_Man_6_box.jpg";

// Video game genres
let title1 = [
    "Role-Playing"
];

let title2 = [
    "Platformer"
];

let title3 = [
    "Sandbox"
];

// This function adds cards to the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < title1.length; i++) {
        let titleOne = title1[i];

        let image1URL = "";
        if (i == 0) {
            image1URL = SKYRIM_XBOX_ART_URL;
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, titleOne, image1URL);
        cardContainer.appendChild(nextCard);
    }

    for (let i = 0; i < title2.length; i++) {
        let titleTwo = title2[i];

        let image2URL = "";
        if (i == 0) {
            image2URL = MEGA_MAN_6_BOX_ART_URL;
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, titleTwo, image2URL);
        cardContainer.appendChild(nextCard);
    }
    
    for (let i = 0; i < title3.length; i++) {
        let titleThree = title3[i];

        let image3URL = "";
        if (i == 0) {
            image3URL = MINECRAFT_KEY_ART_URL;
        }
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, titleThree, image3URL);
        cardContainer.appendChild(nextCard);
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function suggestionTime() {
    console.log("Button Clicked!")
    alert("In my honest opinion, you should definitely check out one of the Persona games from Atlus! It is an amazing role-playing game series that I am sure you will grow to love!");
}

function removeLastCard() {
    title1.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
