

import { useForm, ValidationError } from '@formspree/react';
import contact from '../Assets/images/contact.jpg'
function Contactme() {
  const [state, handleSubmit] = useForm("mbjvlpjv");
  if (state.succeeded) {
    return <div className='row justify-content-center' style={{backgroundColor:'black'}}>

      <h2 className='text-center mt-5 pt-5' style={{backgroundColor:'black',height:'100vh',color:'white'}}>Thank you for contacting me </h2>
    </div>
  }
  return (<div className='container-fluid' style={{backgroundColor:'black',height:'100vh'}}>
    <div className='row contact'>
      <div className='col mx-auto d-block mt-5'>
        <h2 id='contact' style={{color:'white'}}>GET IN TOUCH</h2>
        <form onSubmit={handleSubmit}>
          <div className='contdiv'>

            <input type="text" name='' className="form-control mt-5" placeholder="Name"></input>
            <input type="email" name='email' className="form-control mt-5" placeholder="Email"></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea name='message' className="form-control mt-5 mb-5" placeholder="Your message.."></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type='submit' className="btn btn-success rounded mx-auto d-block" role="button">Send</button>

          </div>
        </form>
      </div>
      <div className='col d-none d-lg-block d-xl-block d-md-block'>
        <img src={contact} style={{ width: '600px',paddingTop:'30px',paddingLeft:'30px' }} />
      </div>
    </div>
  </div>
  );
}
export default Contactme;