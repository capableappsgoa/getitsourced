import { Client, Account } from "appwrite";




    export const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('675dd1cc001be4c772b4'); // Your project I
    export const account = new Account(client);

