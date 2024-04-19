let button = document.getElementById("enviar");

button.onclick = async function(){
    //e.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let result = reg.test(email);
    if(!result) {
        alert("Emails in")
    } else {
        if (nome === "" || email === "") {
            alert("Inoforma valore nos campos");
        } else {
            let data = {nome, email}
     
            const response = await fetch("http://localhost:3000/api/store/task", {
                method: "POST",
                headers: {"Content-type": "application/json;charset=UTF-8"},
                body: JSON.stringify(data)
            });
        
            let content = await response.json();
        
            if(content.success) {
                alert("Sucesso")
            } else {
                alert("Não")
            }
        }
    }
};

let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Voltar ao SFOOD";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");

        const answer = question.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});