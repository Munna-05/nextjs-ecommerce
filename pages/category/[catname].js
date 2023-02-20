import { useRouter } from "next/router"

const catname = () =>{
    const router = useRouter()
    const {catname} = router.query
    return (
        <>{catname}</>
    )
}

export default catname