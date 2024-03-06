export default async function getFormResponses() {
    try {
        const response = await fetch("http://localhost:3000/api/FormResponses")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}