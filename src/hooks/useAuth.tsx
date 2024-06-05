import { useSelector } from "react-redux";

const UseAuth = () => {
  const auth = useSelector((state: any) => state.auth);
  if(auth.user) return true;
  return false;
}

export default UseAuth;