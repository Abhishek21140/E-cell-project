// ================================
// SAMPLE DATA
// ================================

let slides = [
    {
        title: "Marketing Strategy 2024",
        description: "A detailed marketing strategy for a startup.",
        tags: ["Marketing", "Strategy"],
        date: "2026-06-15",
        image: "https://picsum.photos/300/180?random=1"
    },
    {
        title: "Consulting Growth Plan",
        description: "Business expansion roadmap.",
        tags: ["Consulting", "Business"],
        date: "2026-06-10",
        image: "https://picsum.photos/300/180?random=2"
    },
    {
        title: "Product Launch Case",
        description: "Launch strategy for a new product.",
        tags: ["Product", "Launch"],
        date: "2026-06-05",
        image: "https://picsum.photos/300/180?random=3"
    },
    {
        title: "FinTech Innovation",
        description: "Digital banking solutions.",
        tags: ["Finance", "Technology"],
        date: "2026-06-02",
        image: "https://picsum.photos/300/180?random=4"
    }
];


// ================================
// LOCAL STORAGE
// ================================

// Get uploaded slides if they exist

let storedSlides = JSON.parse(localStorage.getItem("slides"));

if (storedSlides) {
    slides = [...slides, ...storedSlides];
}


// ================================
// DOM ELEMENTS
// ================================

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const emptyState = document.getElementById("emptyState");


// ================================
// DISPLAY CARDS
// ================================

function displaySlides(slidesArray) {

    cardsContainer.innerHTML = "";

    if (slidesArray.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    slidesArray.forEach(slide => {

        const card = document.createElement("div");

        card.classList.add("case-card");

        card.innerHTML = `
            <img src="${slide.image}" alt="Thumbnail">

            <div class="card-content">

                <h3>${slide.title}</h3>

                <p>${slide.description}</p>

                <div class="tags">
                    ${slide.tags.map(tag =>
            `<span>${tag}</span>`
        ).join("")}
                </div>

                <small>
                    Uploaded: ${slide.date}
                </small>

            </div>
        `;

        cardsContainer.appendChild(card);

    });
}


// ================================
// SEARCH FUNCTION
// ================================

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase();

    const filteredSlides = slides.filter(slide =>
        slide.title
            .toLowerCase()
            .includes(searchText)
    );

    displaySlides(filteredSlides);

});


// ================================
// SORT FUNCTION
// ================================

sortSelect.addEventListener("change", () => {

    let sortedSlides = [...slides];

    const sortValue = sortSelect.value;

    if (sortValue === "az") {

        sortedSlides.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    else if (sortValue === "za") {

        sortedSlides.sort((a, b) =>
            b.title.localeCompare(a.title)
        );

    }

    else if (sortValue === "newest") {

        sortedSlides.sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );

    }

    else if (sortValue === "oldest") {

        sortedSlides.sort((a, b) =>
            new Date(a.date) - new Date(b.date)
        );

    }

    displaySlides(sortedSlides);

});


// ================================
// INITIAL DISPLAY
// ================================

displaySlides(slides);
