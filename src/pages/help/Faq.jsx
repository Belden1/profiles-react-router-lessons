export default function Faq() {
    return (
        <div className="faq">
            <h3>Frequently Asked Questions</h3>

            {[1, 2, 3, 4, 5].map((n) => (
                <div className="faq__question" key={n}>
                    <p>
                        <strong>Lorem ipsum dolor sit amet.</strong>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi voluptatum qui asperiores non vitae quia,
                        quisquam, velit, eos sint inventore pariatur
                        necessitatibus aspernatur debitis modi amet laboriosam
                        nisi? At, voluptate.
                    </p>
                </div>
            ))}
        </div>
    )
}
