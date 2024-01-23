import Head from "next/head";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
// import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header/>

      <Main/>

      <Footer/>
    </div>
  );
};
