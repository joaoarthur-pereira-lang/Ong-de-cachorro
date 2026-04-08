function validacao(){

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let quintal = document.getElementById("quintal").value;
    let pets_anteriores = document.getElementById("pets_anteriores").value;
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let moradia = document.getElementById("moradia").value;

    let cpf_dup = [
        "10324279551",
        "60553457965",
        "80352427965",
        "50352827985"
    ];

    if (nome.length < 3) return alert ("Nome inválido");
    if (!email.includes("@")) return alert ("Email inválido");
    if (telefone.length < 8) return alert ("Telefoe Inválido");
    if (cpf === "") return alert ("CPF obrigatório");
    if (cpf_dup.includes(cpf)) return alert ("CPF já cadastrado");
    if (idade < 18) return alert ("Você deve ser maior de idade");
    if (cidade === "") return alert ("Informe a cidade");
    if (!tipo) return alert ("Selecione o tipo de moradia");
    if (!quintal) return alert ("Informe se possui quintal");
    if (!pets_anteriores) return alert ("Informe se já teve pets");


























}
