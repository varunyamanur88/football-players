let positionFilter = document.getElementById("positionFilter");

positionFilter.addEventListener("change", function () {
    let selectedPosition = positionFilter.value;

    let players = document.querySelectorAll(".player-row");

    console.log("Selected position:", selectedPosition);
    console.log("Players found:", players.length);

    players.forEach(function (player) {
        let position = player.cells[1].textContent.trim();

        console.log("Player position:", position);

        if (selectedPosition === "all" || position === selectedPosition) {
            player.style.display = "";
        } else {
            player.style.display = "none";
        }
    });
});