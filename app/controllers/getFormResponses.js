export default async function getFormResponses() {
    try {
        const response = await fetch("https://idealab-lnct.netlify.app/api/FormResponses")
        return response.json()
    } catch (error) {
        console.log(error)
    }
}