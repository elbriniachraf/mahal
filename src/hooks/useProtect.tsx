import React from "react";
import UserArth from "./useAuth";
import { redirect, useRouter } from "next/navigation";

const Protected = ({
  children,
}: {
  children: any,
}) => {
  const router = useRouter();

  const isAuth = UserArth();
  return isAuth ? children : router.push("/");
}

export default Protected;