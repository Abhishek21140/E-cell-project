// ================================
// GET FORM
// ================================

const uploadForm = document.getElementById("uploadForm");


// ================================
// FORM SUBMIT
// ================================

uploadForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from form

    const title =
        document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    const tags =
        document.getElementById("tags")
            .value
            .split(",");

    const image =
        document.getElementById("image").value;

    const pdf =
        document.getElementById("pdf").value;


    // Create new slide object

    const newSlide = {

        title: title,

        description: description,

        tags: tags,

        image: image,

        pdf: pdf,

        date:
            new Date().toISOString().split("T")[0]

    };


    // Get old slides

    let slides =
        JSON.parse(
            localStorage.getItem("slides")
        ) || [];


    // Add new slide

    slides.push(newSlide);


    // Save again

    localStorage.setItem(
        "slides",
        JSON.stringify(slides)
    );


    // Success Message

    alert("Case Study Uploaded Successfully!");


    // Go back to Home Page

    window.location.href = "index.html";

});
