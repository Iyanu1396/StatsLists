import { Link } from "react-router-dom"

function BackToMenu() {
    return (
        <Link
        className="px-4  font-mono text-2xl font-bold text-stone-900 hover:text-green-700 active:text-green-700"
        to="/app"
      >
        &larr; Back to menu
      </Link>
    )
}

export default BackToMenu
