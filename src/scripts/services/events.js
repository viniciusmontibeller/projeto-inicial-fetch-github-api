import { baseUrl, reposAndEventsQuantity } from "/src/scripts/variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${reposAndEventsQuantity}`)
    return await response.json()
}

export { getEvents }