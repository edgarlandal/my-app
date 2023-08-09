import { useState } from "react"

function ContactComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setCommment] = useState("");
    
    return (
        <div className="container">
            <div className="contact">
                <h2>Contact</h2>

                <form className="form-container">
                    <div className="mb-3">
                        <label className="form-label" >Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter your name"
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter your email"
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Comments</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            onChange={(e) => { setCommment(e.target.value) }}></textarea>
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => { console.log(`Name: ${name}\nEmail: ${email}\nComments: ${comment}`) }}
                    >Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent