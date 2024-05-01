function Submit(){
    let usarname = document.getElementById("usarname").value
    let password = Number(document.getElementById("password").value)
    if (usarname === "akrom"){
        if (password = 0723){
            alert("SUCCES")
        }else{
            alert("Password xato")
        }
    }else if(password = 0723){
    alert("Usarname hato")
    } else{
        alert("usarname va password xato")
    }
}

const isShow = ()=>{
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type = 'text'
    } else{
        password.type = "password"
    }
}