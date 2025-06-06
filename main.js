$(document).ready(function(){
    $('#botao-adicionar').click(function(e){
        e.preventDefault();

        let tarefa = $('#nova-tarefa').val().trim();
        if(tarefa !== "")
            $('#lista-de-tarefas').append(
        `<li>
        ${tarefa}
        <button class="botao-excluir">
            <img src="./images/excluir.png" alt="Excluir" />
        </button>
        </li>`
    
    );

        $('#nova-tarefa').val('');
    })

        $('#lista-de-tarefas').on('click','li', function(e){
            if (!$(e.target).closest('.botao-excluir').length){
                $(this).toggleClass('tarefa-concluida');
            }
    })
});

        $('#lista-de-tarefas').on('click','.botao-excluir',function(e){
            e.stopPropagation();
                $(this).closest('li').remove();
        })

