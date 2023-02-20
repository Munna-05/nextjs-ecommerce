import {useRouter} from 'next/router'
const profile =()=>{
    const router = useRouter()
    const {username} = router.query
    return (
        <>
        <h1>hello {username}</h1>
        </>
    )
}

export default profile