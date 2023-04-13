if( localStorage.getItem("contacts") == undefined) {
    localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts= JSON.parse(localStorage.getItem("contacts"));

for(let i = 0; i < contacts.length; i++){
    result += `
    <div class="contact-iteams">
                     <i class="far fa-user fa-2x"></i>
                    <div class="contact-iteam-info">
                        <h4>${contacts[i].name}</h4>
                        <p>${contacts[i].number}</p>
                    </div>
                    <i class="fas fa-times-circle" onclick = "deleteContact('${contacts[i].id}')"></i> 
                </div>
    `
}
document.getElementsByClassName("contact-body")[0].innerHTML= result;


function submitContact(e){
    e.preventDefault();
    let contactname = document.getElementById("contactname").value;
    let contactnumber = document.getElementById("contactnumber").value;

    let contacts= JSON.parse(localStorage.getItem("contacts"));


    let contact = {
        id : Math.random().toString(36).substr(2,9),
        name: contactname,
        number : contactnumber,
    }

    contacts.unshift(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));
    document.getElementById("contactname").value="";
    document.getElementById("contactnumber").value="";

    location.reload();
}

function deleteContact(id){
    let contacts= JSON.parse(localStorage.getItem("contacts"));
    contacts = contacts.filter(function(contact){
        return contact.id != id;
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload();
    
}