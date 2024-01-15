const form = document.getElementById('validation-form');

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