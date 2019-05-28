import React from 'react';
import './contacts.css'

function Contacts() {
    return(
        <div className="contactInfo">
            <h2>Contacts</h2>
            <div className="Mail">
                <p>Mail me at jpekarsks@yahoo.com
                    <a href="mailto:jpekarskis@yahoo.com"> Send E-Mail </a>
                </p>
            </div>
            <div className="contactsSocial">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
            </div>
            
        </div>
     );
}



export default Contacts;
