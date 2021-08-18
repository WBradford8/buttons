import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name: </label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name: </label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numOfChildren">Number of Children Attending: </label>
            <input type="number" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="location">Location: </label>
            <input type="number" name="location" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">Hours You Need a Clown: </label>
            <input type="number" name="lengthOfReservation" class="input" />
        </div>
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userNumOfChildren = document.querySelector("input[name='numOfChildren']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userLengthOfReservation = document.querySelector("input[name='lengthOfReservation']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numOfChildren: userNumOfChildren,
            neededBy: userDate,
            lengthOfReservation: userLengthOfReservation
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})