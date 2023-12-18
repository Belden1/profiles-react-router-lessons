import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>404 error - Vi kunde inte hitta sidan!</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                recusandae quidem minima debitis nisi reprehenderit rerum
                distinctio commodi ipsam architecto, provident autem accusamus
                cupiditate velit natus officia.
            </p>
            <p>
                Gå Tillbaka till <Link to="/">Hemsidan</Link>
            </p>
        </div>
    )
}

export default NotFound
