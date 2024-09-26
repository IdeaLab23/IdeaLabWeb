export default async function getEvents() {
    try {
        const response = await fetch("https://idealab-lnct.netlify.app/api/event")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}