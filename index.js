
document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            cards.forEach(c => {
                c.classList.remove("active")

                const radio = c.querySelector(".radio");
                if (radio) radio.checked = false;
            })

            if (!card.classList.contains("active")) {
                card.classList.toggle("active")
                const radio = card.querySelector(".radio");
                if (radio) radio.checked = true;

            }
            
        })
    })
})