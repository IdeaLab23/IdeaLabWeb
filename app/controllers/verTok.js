import ls from "local-storage" 
import jwt from "jsonwebtoken"
  async    function verTok() {
        
        const data = await ls.get("token")
            jwt.verify(data, "siddhant", (err, decoded) => {
                if (err) {
                    console.log("Can't verify , please login again")
                    // router.push('/login')
                } else {
                    console.log("Successfully verified")
                    // router.push('/adminUserOfIdeaLabLNCT')
                  // Token is valid, decoded contains user info
                }
              });
              
              
     }
     verTok()