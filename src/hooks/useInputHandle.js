import { useState } from 'react'

function useInputHandle() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(name, email, password)
    return (
        [setName, setEmail, setPassword]
    )
}

export default useInputHandle;