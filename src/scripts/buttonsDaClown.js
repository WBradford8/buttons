import { Requests } from "./requests.js"
import { ServiceForm } from "./serviceForm.js"


export const buttonsDaClown = () => {
    return `
        <h1>Button's the Clown Event Service</h1>
        <section class="serviceForm">
        </section>
            ${ServiceForm}
        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}