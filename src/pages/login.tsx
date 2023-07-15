import Head from "next/head";
import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>ScreenWave</title>
      </Head>
      <Image
        src="https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
        alt="Login Screen Image"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
      />

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        alt="Logo"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
        priority={true}
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1>Sign In</h1>
        <div className="space-y-4">
          <label htmlFor="">
            <input type="email" name="" id="" placeholder="Email"/>
          </label>
          <label htmlFor="">
          <input type="password" name="" id="" placeholder="Password"/>
          </label>
        </div>
      </form>
    </div>
  );
};

export default login;
