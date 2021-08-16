import { Requests } from "./requests.js"


export const SinkRepair = () => {
    return `
        <h1>Button's the Clown Event Service</h1>
        <section class="serviceForm">
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}