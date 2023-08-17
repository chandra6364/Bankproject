function create(event){
    var formm = document.getElementById('signin')
    formm.addEventListener('submit',function(event){event.preventDefault()})
    const adhhar1 = localStorage.getItem("adhharno1")
    console.log(adhhar1);
    adharno1 = document.getElementById("aadhar").value
    console.log(adharno1);
    adharno2 = document.getElementById("reenteradhar").value
    console.log(adharno2);
    panno = document.getElementById("pan").value
    username = document.getElementById("name").value
    mobile = document.getElementById("mobilenumber").value
    branch1 = document.getElementById("branch").value
    console.log(panno);
    if(adhhar1 == adharno1){
        document.getElementById("correctadhar").innerText="user already exists"
    }
    else{
        localStorage.setItem("usernames",username);
        console.log(username);
        localStorage.setItem("mobileno",mobile);
        console.log(mobile);
        localStorage.setItem("branches",branch1);
        console.log(branch1);
        localStorage.setItem("adhharno1",adharno1)
        console.log(adharno1);
        localStorage.setItem("adhharno2",adharno2)
        localStorage.setItem("panno1",panno)
        if(adharno1 == adharno2){
            window.location.href="bank.html"
        }
        else{
            document.getElementById("correctadr").innerHTML="plase reenter correct adhar"
        }
    }
}