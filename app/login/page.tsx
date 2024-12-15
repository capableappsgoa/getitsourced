"use client"
import { Client, Account, ID } from "appwrite";
import { useEffect, useState } from "react";
import { useStore } from "../store/Auth";
import router from "next/router";
import React from "react";


export default function Login() {
  const setSessionId = useStore((state) => state.setSessionId);
  const [phoneNumber, setphoneNumber] = useState('')


  const login = async (e: any) => {
    e.preventDefault()
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('675dd1cc001be4c772b4');

    const account = new Account(client);

    const token = await account.createPhoneToken(
      ID.unique(),
      phoneNumber
    );
    setSessionId(token.$id);
    const userId = token.userId;
    router.push('/login/verify');




    console.log(userId)
    console.log(phoneNumber)

  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setphoneNumber(e.target.value)}
                  id="number"
                  name="number"
                  type="text"

                  autoComplete="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>



            <div>
              <button
                onClick={login}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send OTP
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}


