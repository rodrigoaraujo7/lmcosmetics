// Alterar o estilo do header ao descer a pagina!
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    
    // Adicionando uma classe para mudar o style do header
    header.classList.toggle('sticky', window.scrollY > 10);
    // Adicionando uma animação para o novo header aparecer
    header.classList.toggle('animate__animated', window.scrollY > 10);
    header.classList.toggle('animate__fadeInDownBig', window.scrollY > 10);
})

// Mascara para colocar pontuação no campo CNPJ
const inputCNPJ = document.querySelector('.cnpj');
inputCNPJ.addEventListener('keypress', () => {
    let inputLength = inputCNPJ.value.length;

    if(inputLength === 2 || inputLength === 3 || inputLength === 6) { // Aplicando a pontuação no local certo
        inputCNPJ.value += '.'
    } else if(inputLength === 10) {
        inputCNPJ.value += '/'
    } else if(inputLength === 15) {
        inputCNPJ.value += '-'
    }
})

// Mascara para colocar pontuação no campo Celular
const inputPhone = document.querySelector('.phone');
inputPhone.addEventListener('keypress', () => {
    let inputLength = inputPhone.value.length;

    // Aplicando a pontuação no local certo
    if(inputLength === 0) {
        inputPhone.value += '('
    } else if(inputLength === 3) {
        inputPhone.value += ') '
    } else if(inputLength === 10) {
        inputPhone.value += '-'
    }
})

// Mascara para colocar pontuação no campo CEP
const inputCEP = document.querySelector('.cep');
inputCEP.addEventListener('keypress', () => {
    let inputLength = inputCEP.value.length;

    if(inputLength === 5) { // Aplicando a pontuação no local certo
        inputCEP.value += '-'
    }
})

// Função para retornar um card de erro!
function errorAlert() {
    let alertError = document.querySelector('.alert-error');
    alertError.style.visibility = 'visible'

    // Definindo uma animação no alert
    alertError.classList.toggle('animate__animated');
    alertError.classList.toggle('animate__fadeIn');
    
    setTimeout(() => {
        alertError.classList.toggle('animate__fadeOut');
    }, 3000);
}

// Função para retornar um card de sucesso!
function successAlert() {
    // Alert de sucesso
    let alert = document.querySelector('.alert-success');
    alert.style.visibility = 'visible'

    // Definindo uma animação no alert
    alert.classList.toggle('animate__animated');
    alert.classList.toggle('animate__fadeIn');

    setTimeout(() => {
        alert.classList.toggle('animate__fadeOut');
    }, 3000);
}

// Função para criar a conta!
function validateForm() {
    // Pegando o valor de todos os campos
    let firstName = document.getElementById('first_name');
    let lastName  = document.getElementById('last_name');
    let email     = document.getElementById('email');
    let company   = document.getElementById('company');
    let phone     = document.getElementById('mobile');
    let cnpj      = document.getElementById('00N3t00000JgDRf');
    let cep       = document.getElementById('zip');
    let estado    = document.getElementById('00N3t00000K3PBs');
    
    // Inserindo esses valores dentro de um obj
    const person = {
        firstName: firstName.value,
        lastName : lastName.value,
        email    : email.value,
        company  : company.value,
        cnpj     : cnpj.value,
        phone    : phone.value,
        cep      : cep.value,
        estado   : estado.value
    }; // console.log(person)

    console.log(person.estado)
    
    // Validando se os campos estão preenchidos
    if(person.firstName.length == 0 ||
       person.lastName.length  == 0 ||
       person.email.length     == 0 ||
       person.company.length   == 0 ||
       person.estado           == ''||
       (person.cnpj.length     == 0 || person.cnpj.length  < 18)  ||
       (person.phone.length    == 0 || person.phone.length < 15)  ||
       (person.cep.length      == 0 || person.cep.length   <  9)) {
        errorAlert(); // Executa um alert negativo
        return false // Não cadastra e não recarrega a pagina!
    } else {
        successAlert(); // Executando um alert positivo

        // Removendo a mascara do CNPJ
        const rmvCNPJMask = inputCNPJ.value.replace(/[^0-9]/g, '')
        inputCNPJ.value = rmvCNPJMask

        // Removendo a mascara do Celular
        const rmvPhoneMask = inputPhone.value.replace(/[^0-9]/g, '')
        inputPhone.value = rmvPhoneMask   

        // Removendo a mascara do CEP
        const rmvCEPMask = inputCEP.value.replace(/[^0-9]/g, '')
        inputCEP.value = rmvCEPMask  

        // Cadastro é criado e recarrega a pagina!
        return true
    }
}