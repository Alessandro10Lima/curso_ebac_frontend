$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
	$('#cpf').mask('000.000.000-00', {reverse: true});
    
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                endereco: {
                    required: true
                },
                cpf: {
                    required: true
                },
                cep: {
                    required: true
                },
            },
            messages: {
                nome: 'Por favor, insira seu nome'
            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos=validador.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`);
                }
            }
        })
})

