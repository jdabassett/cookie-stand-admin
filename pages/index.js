import React from "react";

import Head from "next/head";
import Header from "@/components/Header";
import LoginRegister from "@/components/LoginRegister";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { useContextAuth } from "@/contexts/auth";


export default function CookieStandAdmin() {
  let {user} = useContextAuth();

  return (
    <div className="bg-customColor-100 text-gray-800">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      { user ?
      <Main/>:
      <LoginRegister />
      }
      <Footer/>
    </div>
  );
};



