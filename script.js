const form = document.getElementById('validation-form');

/* 
            //-----PRIMEIRA FORMA DE FAZER (MAIS VERBOSA)-----\\

form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const formContainer = document.querySelector('.container');

    if (inputB.value > inputA.value){

        if(document.getElementById('invalid-message')){
            const messageToRemove = document.getElementById('invalid-message')
            messageToRemove.parentNode.removeChild(messageToRemove)
        }else if(document.getElementById('valid-message')){
            const messageToRemove = document.getElementById('valid-message')
            messageToRemove.parentNode.removeChild(messageToRemove)
        };

        const validMessage = document.createElement('div');
        validMessage.setAttribute('id', 'valid-message');

        validMessage.innerHTML = `
            <p><b>VÁLIDO!!</b> O número ${inputB.value} é maior que o número ${inputA.value}</p>
        `;

        formContainer.appendChild(validMessage);

        inputA.value = '';
        inputB.value = '';

    }else{

        if(document.getElementById('valid-message')){
            const messageToRemove = document.getElementById('valid-message')
            messageToRemove.parentNode.removeChild(messageToRemove)
        }else if(document.getElementById('invalid-message')){
            const messageToRemove = document.getElementById('invalid-message')
            messageToRemove.parentNode.removeChild(messageToRemove)
        };

        const invalidMessage = document.createElement('div');
        invalidMessage.setAttribute('id', 'invalid-message');

        invalidMessage.innerHTML = `
            <p><b>INVÁLIDO!!</b> O número ${inputB.value} não é maior que o número ${inputA.value}</p>
        `;

        formContainer.appendChild(invalidMessage);

        inputA.value = '';
        inputB.value = '';
    }
});
*/

//-----SEGUNDA FORMA DE FAZER (MENOS VERBOSA)-----\\
form.addEventListener('submit', function (e){
    e.preventDefault(e);

    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');

    const inputAToNum = Number(inputA.value);
    const inputBToNum = Number(inputB.value);

    const invalidMesssageParagraph = document.getElementById('invalid-message');
    const validMessageParagraph = document.getElementById('valid-message');
    validMessageParagraph.style.display = 'none';
    invalidMesssageParagraph.style.display = 'none';

    if(inputAToNum < inputBToNum){
        const validMessage = `<b>VÁLIDO!!</b> O número ${inputB.value} é maior que o número ${inputA.value}`;
        validMessageParagraph.innerHTML = validMessage;
        validMessageParagraph.style.display = 'flex'

        inputA.value = '';
        inputB.value = '';
        
    }else{
        const invalidMesssage = `<b>INVÁLIDO!!</b> O número ${inputB.value} não é maior que o número ${inputA.value}`;
        invalidMesssageParagraph.innerHTML = invalidMesssage;
        invalidMesssageParagraph.style.display = 'flex'

        inputA.value = '';
        inputB.value = '';
    }
})
