            const galleryItems = document.querySelectorAll(".img-box");
            const popup = document.getElementById("popup");
            const popupImg = document.getElementById("popupImg");
            const popupTitle = document.getElementById("popupTitle");
            const popupDesc = document.getElementById("popupDesc");

            const nextBtn = document.getElementById("nextBtn");
            const prevBtn = document.getElementById("prevBtn");
            const closeBtn = document.getElementById("closeBtn");

            let currentIndex = 0;

            // Open popup
            galleryItems.forEach((item, index) => {
                item.addEventListener("click", () => {
                    const img = item.querySelector("img");
                    const title = item.querySelector("h3").innerText;
                    const desc = item.querySelector("p").innerText;

                    popup.style.display = "block";
                    popupImg.src = img.src;
                    popupTitle.innerText = title;
                    popupDesc.innerText = desc;

                    currentIndex = index;
                });
            });

            // Update function
            function updatePopup(index) {
                const item = galleryItems[index];
                const img = item.querySelector("img");

                popupImg.src = img.src;
                popupTitle.innerText = item.querySelector("h3").innerText;
                popupDesc.innerText = item.querySelector("p").innerText;
            }

            // Next
            nextBtn.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % galleryItems.length;
                updatePopup(currentIndex);
            });

            // Prev
            prevBtn.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                updatePopup(currentIndex);
            });

            // Close
            closeBtn.addEventListener("click", () => {
                popup.style.display = "none";
            });

            // Click outside to close
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.style.display = "none";
                }
            });

            // Keyboard control
            document.addEventListener("keydown", (e) => {
                if (popup.style.display === "block") {
                    if (e.key === "ArrowRight") nextBtn.click();
                    if (e.key === "ArrowLeft") prevBtn.click();
                    if (e.key === "Escape") popup.style.display = "none";
                }
            });