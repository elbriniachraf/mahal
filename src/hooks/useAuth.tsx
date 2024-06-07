import { useSelector } from "react-redux";

const UseAuth = () => {
  const auth = useSelector((state: any) => state.auth);
  if(auth.user) return {isAuth: true, user: auth.user};;
  return {isAuth: false};
}

export default UseAuth;