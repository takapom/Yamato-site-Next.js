import {useNavigate} from "../../firebase/config";

export default function(){
    const navigate = useNavigate();
    const logout  = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
        });
    return(
    <div>
        <p>ログアウト</p>
        <button onClick={logout}>ログアウトする</button>
    </div>
    )
}