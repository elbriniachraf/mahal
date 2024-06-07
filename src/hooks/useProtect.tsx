'use client'

import React from "react";
import UserAuth from "./useAuth";
import { redirect, useRouter } from "next/navigation";

const Protected = ({
  children,
}: {
  children: any,
}) => {
  const router = useRouter();

  const auth = UserAuth();
  return auth.isAuth ? children : router.push("/login");
}

export default Protected;

export const IsAdmin = ({
  children,
}: {
  children: any,
}) => {
  const router = useRouter();

  const auth = UserAuth();
  return <Protected>
    { auth.user.role === 'admin' ? children :children}
  </Protected>
}