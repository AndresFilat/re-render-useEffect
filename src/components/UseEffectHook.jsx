import { useEffect, useState } from "react";

/* let mounted = false; */
let updated = false;

const UseEffectHook = () => {
    const [update, setUpdate] = useState(false)

    const handleChange = () => {
        setUpdate(!update)
    }

    useEffect(() => {
        /* mounted &&  */console.log("estado montado: ", update)
        /* mounted = true */
    }, [])

    useEffect(() => {
        /* updated && */console.log("estado actualizado: ", update)
        /* updated = true */
    }, [update])

    return (
        <section>
            <h2>use effect component</h2>
            <button onClick={handleChange}>change</button><br />
        </section>
    );
}
 
export default UseEffectHook;