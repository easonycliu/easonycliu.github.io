import { useRoutes } from "react-router-dom"
import index from "./index.js"

export default function BasicRouter() {
    const element = useRoutes(index);
    return (
        <div>
            {element}
        </div>
    )
}