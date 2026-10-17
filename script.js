const dropdownButton = document.getElementById("dropdownButton");
const positionOptions = document.querySelectorAll(".position-option");
const players = document.querySelectorAll(".player-row");
const playerSearch = document.getElementById("playerSearch");

let selectedPosition = "all";
let searchText = "";

function filterPlayers() {

    players.forEach(function (player) {

        const name = player.cells[0].textContent.trim().toLowerCase();
        const position = player.cells[1].textContent.trim().toLowerCase();
        const country = player.cells[2].textContent.trim().toLowerCase();
        const club = player.cells[3].textContent.trim().toLowerCase();

        const matchesPosition =
            selectedPosition === "all" ||
            position.toUpperCase().split("/").includes(selectedPosition);

        const matchesSearch =
            name.includes(searchText) ||
            position.includes(searchText) ||
            country.includes(searchText) ||
            club.includes(searchText);

        if (matchesPosition && matchesSearch) {
            player.style.display = "";
        } else {
            player.style.display = "none";
        }

    });

}

// Dropdown filtering
positionOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        selectedPosition = option.dataset.position;

        dropdownButton.textContent =
            option.textContent.trim() + " ▼";

        filterPlayers();

    });

});

// Search filtering
playerSearch.addEventListener("input", function () {

    searchText = playerSearch.value.trim().toLowerCase();

    filterPlayers();

});