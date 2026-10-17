const dropdownButton = document.getElementById("dropdownButton");
const positionOptions = document.querySelectorAll(".position-option");
const players = document.querySelectorAll(".player-row");

positionOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        const selectedPosition = option.dataset.position;

        dropdownButton.textContent = option.textContent.trim() + " ▼";

        players.forEach(function (player) {

            const position = player.cells[1].textContent.trim();

            if (
                selectedPosition === "all" ||
                position.split("/").includes(selectedPosition)
            ) {
                player.style.display = "";
            } else {
                player.style.display = "none";
            }

        });

    });

});