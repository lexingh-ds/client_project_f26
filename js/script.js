document.getElementById("year").textContent = new Date().getFullYear();


const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterItems = document.querySelectorAll(".filter-item");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach(function(button) {
    button.setAttribute("aria-pressed", button.dataset.filter === "all");

    button.addEventListener("click", function() {
        const selectedStage = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(function(otherButton) {
            otherButton.setAttribute(
                "aria-pressed",
                otherButton === button
            );
        });

        filterItems.forEach(function(item) {
            const shouldShow =
                selectedStage === "all" ||
                item.dataset.stage === selectedStage;

            item.hidden = !shouldShow;

            if (shouldShow) {
                visibleCount++;
            }
        });

        filterStatus.textContent =
            visibleCount + " resources displayed.";
    });
});

if (filterStatus) {
    filterStatus.textContent = filterItems.length + " resources displayed.";
}