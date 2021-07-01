
const displayEntireCell = function () {
    let displayContainerNode = document.getElementById("cell-container")

    for (let firstCell = 1; firstCell <= 76; firstCell++) {
        let newCell = document.createElement("div")
        newCell.innerText = firstCell
        newCell.classList.add("cell")
        displayContainerNode.appendChild(newCell)
    }
}

const createButton = function () {

    const meetingTime = document.getElementById("meeting-time").value
    const meetingDescription = document.getElementById("meeting-description").value
}

window.onload = function () {
    displayEntireCell()
    getRndInteger()
}