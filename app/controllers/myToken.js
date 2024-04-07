export default async function myToken(){
    try {
        const response = await fetch("http://localhost:3000/api/tokenGen")
        return response.json()
    } catch (error) {
        console.log(error);
    }
}