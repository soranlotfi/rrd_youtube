const Contact = ()=>{
    return(
        <div className="contcat">
            <h3>Contatc Us</h3>
            <form>
                <label>
                    <span>Your email :</span>
                    <input type="email" name="email" required/>
                </label>
                <label>
                    <span>Your message :</span>
                    <textarea name="message" required/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact