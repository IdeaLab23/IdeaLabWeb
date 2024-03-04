export default async function getEvents() {
    try {
        const response = await fetch("http://localhost:3000/api/event")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const events = await getEvents()