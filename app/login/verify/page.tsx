"use client"
import { useState, useEffect } from "react";
import { Client, Account } from "appwrite";
import { useLocation } from 'react-router-dom';
import { useRouter } from "next/router";
import { useStore } from "../../store/Auth";

export default function Login() {


    const location = useLocation();
    const router = useRouter();
    const sessionid = useStore((state) => state.sessionid);
    const [OTP, setOTP] = useState('');



    const createNewAccount = async (e: any) => {
        e.preventDefault()
        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('675dd1cc001be4c772b4');

        const account = new Account(client);

        const session = await account.createSession(
            sessionid,
            OTP
        );
        console.log(session + "account created & verified");

        useEffect(() => {
            if (session) {
                router.push('/profile');
            }
        }, [session, router]);

        if (!session) {
            return null
        }

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
                        Please Enter the OTP
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                OTP
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    onChange={(e) => setOTP(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                onClick={createNewAccount}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                verify
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
function async(phoneNumber: string) {
    throw new Error("Function not implemented.");
}

