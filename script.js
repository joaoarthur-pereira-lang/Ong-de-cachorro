function validacao(){
    const form = document.getElementById("formAdocao");
    const cpfsExistentes = ["12345678900", "11111111111"];

const moradiaSelect = document.getElementById("moradia");

moradiaSelect.addEventListener("change"), function(){
    const extra = document.getElementById("extraMoradia");
if(this.value === "apartamento"){
        extra.innerHTML = `
        <label>Permite animais?</label>
        <select id="permite">
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
        </select>`;
    } 
    else if(this.value === "casa"){
        extra.innerHTML = `
        <label>Quintal é seguro?</label>
        <select id="seguro">
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
        </select>`;
    } 
    else {
        extra.innerHTML = "";
    }
};

form.addEventListener("submit"), function(e){
    e.preventDefault();

}
let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;
}
if(nome.length < 3){
        alert("Nome inválido");
        return;
    }

    if(!email.includes("@")){
        alert("Email inválido");
        return;
    }

    if(telefone.length < 8){
        alert("Telefone inválido");
        return;
    }

    if(cpfsExistentes.includes(cpf)){
        alert("CPF já cadastrado");
        return;
    }

    if(idade < 18){
        alert("Precisa ser maior de idade");
        return;
    }

    if(!cidade){
        alert("Cidade obrigatória");
        return;
    }

    if(!moradia){
        alert("Selecione moradia");
        return;
    }

    if(moradia === "apartamento" && quintal === "sim"){
        alert("Apartamento não pode ter quintal");
        return;
    }

    if(horas > 8){
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if(!justificativa){
            return;
        }
    }

    if(pet === "nao"){
        alert("A ONG poderá acompanhar sua adaptação");
    }

    if(motivo.length < 10 || motivo === "quero" || motivo === "porque sim"){
        alert("Motivo inválido");
        return;
    }

    if(!termo){
        alert("Aceite o termo");
        return;
    }

    document.getElementById("resultado").innerText =
        "Cadastro enviado com sucesso, " + nome + "!";
;

