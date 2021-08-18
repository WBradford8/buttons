import { fetchRequests } from "./dataAccess.js";
import { buttonsDaClown } from "./buttonsDaClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = buttonsDaClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)