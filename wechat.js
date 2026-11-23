const filterButtons = document.querySelectorAll(".filter-chip");
const storyCards = document.querySelectorAll(".story-card");
const emptyState = document.querySelector(".empty-state");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("selected", item === button));

        let visibleCount = 0;
        storyCards.forEach((card) => {
            const visible = filter === "all" || card.dataset.category === filter;
            card.hidden = !visible;
            if (visible) visibleCount += 1;
        });
        emptyState.hidden = visibleCount > 0;
    });
});

document.querySelectorAll(".like-button").forEach((button) => {
    button.addEventListener("click", () => {
        const liked = button.getAttribute("aria-pressed") !== "true";
        const count = button.querySelector("b");
        button.setAttribute("aria-pressed", String(liked));
        button.classList.toggle("liked", liked);
        button.querySelector("span").textContent = liked ? "♥" : "♡";
        count.textContent = String(Number(count.textContent) + (liked ? 1 : -1));
    });
});

document.querySelector(".search-button").addEventListener("click", () => {
    document.querySelector("#stories").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".filters").querySelector("button").focus({ preventScroll: true });
});
