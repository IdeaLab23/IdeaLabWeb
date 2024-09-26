export default async function getUser() {
    try {
        const response = await fetch("https://idealab-lnct.netlify.app/api/LoginUser")
        return response.json()
    } catch (error) {
        console.log(error);
    }
}