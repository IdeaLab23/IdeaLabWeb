export default async function myToken(){
    try {
        const response = await fetch("https://idealab-lnct.netlify.app/api/tokenGen")
        return response.json()
    } catch (error) {
        console.log(error);
    }
}