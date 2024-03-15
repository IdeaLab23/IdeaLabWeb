export default async function getUser() {
    try {
        const response = await fetch("http://localhost:3000/api/LoginUser")
        return response.json()
    } catch (error) {
        console.log(error);
    }
}