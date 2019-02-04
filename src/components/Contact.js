import React, { Component } from 'react';

class Contact extends Component {
  componentDidMount() { 
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "ueppltvzre0r9knqi0lf79vj"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
        var message = document.querySelector("#" + form_id_js + " [name='text']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
  }

  render() { 
    return (  
      <div style={{display: 'block', width: '50%'}}>
         <form id="javascript_form">
            <p>Please put your email to allow me to get back with you.</p>
            <input type="text" name="subject" placeholder="Subject" className="subject"/> <br />
            <textarea name="text" placeholder="Message" className="message"></textarea><br />
            <input type="submit" id="js_send" value="Send" className="submitbutton"/>
          </form>
      </div>
    );
  }
}
 
export default Contact;