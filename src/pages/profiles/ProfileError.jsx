import { Link, useRouteError } from "react-router-dom";

export default function ProfileError() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="profile-error">
            <h2>Error!</h2>
            <p>{error.message}</p>
            <Link to="/profiles">Gå tillbaka till profilerna</Link>
        </div>
    )
}