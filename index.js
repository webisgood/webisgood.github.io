function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];


    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Email verification otp.</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "db282dad-a01d-4e00-b77e-7e264917b9bb",
        To : email.value,
        From : "f20202349@hyderabad.bits-pilani.ac.in",
    
        Subject : "This is otp",
        Body : emailbody,
    }).then(

      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}

