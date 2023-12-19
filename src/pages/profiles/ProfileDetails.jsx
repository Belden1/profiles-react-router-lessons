import { Link, useLoaderData } from 'react-router-dom'

export default function ProfileDetails() {
    const profile = useLoaderData()
    console.log(profile)

    return (
        <div>
            <div className="profile-details">
                <h2>{profile.name}</h2>
                <p>Email: {profile.email}</p>
                <p>Tel: {profile.phone}</p>
                <p>Adress: {profile.address.city}</p>
            </div>
            <div>
                <Link to="/profiles">Tillbaka</Link>
            </div>
        </div>
    )
}

export const profileDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    return res.json()
}
