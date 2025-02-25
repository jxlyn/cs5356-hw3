document.addEventListener("DOMContentLoaded", async function () {
    const apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/100";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update the webpage with the fetched data
        document.getElementById("artwork-title").innerText = data.title;
        document.getElementById("artist").innerText = `Artist: ${data.artistDisplayName || "Unknown"}`;
        document.getElementById("art-image").src = data.primaryImage || "hello_kitty.jpg"; // backup image is the hello kitty
        document.getElementById("art-image").alt = data.title;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

//extra credit 1
document.addEventListener('DOMContentLoaded', function() {
    const bioSection = document.querySelector('.bio');

    bioSection.addEventListener('mousemove', function(event) {
        const rect = bioSection.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const bgX = (x / rect.width) * 100;
        const bgY = (y / rect.height) * 100;

        bioSection.style.backgroundPosition = `${bgX}% ${bgY}%`;

        bioSection.classList.add('interactive-bg');
    });

    bioSection.addEventListener('mouseleave', function() {
        bioSection.classList.remove('interactive-bg');
    });
});
