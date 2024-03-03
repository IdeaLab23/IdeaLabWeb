export default async function getEvents() {
    try {
        const response = await fetch("http://localhost:3000/api/event")
        const events = await response.json()
        return events
    } catch (error) {
        console.log(error)
    }
}