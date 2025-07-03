'use client'

import { useState } from "react"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"

/**
 * TODO:
 * 1 - check email regex
 * 2 - check password is valid
 * 3 - style better, reference to use: https://app.n8n.cloud/register
 */

export default function Signup() {

    const router = useRouter()
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const bodyContent = {
            fullName,
            username,
            email,
            password
        }

        fetch("http://localhost:8080/signup", {
            method: "POST",
            body: JSON.stringify(bodyContent)
        })
            .then((response) => {
                if(response.status == 201) {
                    console.log("success!!!")
                    router.push("/")
                } else {
                    console.warn("opsie! D:")
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className={styles.container}>
            <h1>Start Organizing Yourself Today!</h1>
            <div>
                <form 
                    className={styles.formCreateAccount}
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label>Full Name</label>
                        <input
                            placeholder="..."
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Username</label>
                        <input
                            placeholder="..."
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            placeholder="..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            placeholder="..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Please Repeat Password</label>
                        <input
                            placeholder="..."
                        />
                    </div>

                    <button
                        type="submit"
                    >Create Account!</button>
                </form>
            </div>
        </div>
    )
}
