function Contact(){
    return(
        <div>
        <section id="contact">
            <h2>Get in touch</h2>
            <h1>Contact me</h1>
            <div className="m-5">
            <form action="https://formspree.io/f/mdkqlkve" method="POST">
            <div className="mx-auto p-2 " style={{ width: "480px" }}>
  <label for="exampleFormControlInput1" className="form-label">Your email</label>
  <input type="email" name="email" className="form-control" 
  id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mx-auto p-2" style={{ width: "480px" }}>
  <label for="exampleFormControlTextarea1" className="form-label">Message </label>
  <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="You can type your message here"></textarea>
  <button type="submit" className="btn btn-dark m-3 ">Submit</button>
</div>
</form>
</div>
</section>
        </div>

    );

}

export default Contact;