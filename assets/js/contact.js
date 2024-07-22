function getData(event){
    event.preventDefault()
    let name=document.getElementById("nameInput").value;
    let email=document.getElementById("emailInput").value;
    let number=document.getElementById("numberInput").value;
    let subject=document.getElementById("Subject").value;
    let desc=document.getElementById("description").value;

    let dataFormulir={name,email,number,subject,desc}
    console.log(dataFormulir)

    if (name==""){
        alert("isi namanya mas!!!")
        return
    }
    else if (email==""){
        alert("isi email nya mas!!!")
        return
    }
    else if (number==""){
        alert("isi number nya mas!!!")
        return
    }
    else if (subject==""){
        alert("isi subject nya mas!!!")
        return
    }
    else if (desc==""){
        alert("isi description nya mas!!!")
        return
    }
    
    let myemail="juliansyahfauzi123@gmail.com"
    let sendemail=document.createElement("a")
    sendemail.href=`mailto:${myemail}?subject=${subject}&body=halo nama saya ${name},email saya adalah ${email},nomer saya adalah ${number},pesan saya adalah ${desc}`
    sendemail.click()
}