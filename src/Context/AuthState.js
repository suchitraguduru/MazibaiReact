import   {  useEffect ,  useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {

    const [user , setuser ] = useState(null)


    return (
        <>
            <AuthContext.Provider value={{ user }}>
                {props.children} 
            </AuthContext.Provider>
        </>
    )
}

export default AuthState

