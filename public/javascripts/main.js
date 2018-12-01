$(document).ready(function(){
    console.log('Funciona');
    getObras();

    $('#table').on('click','.actualizar', function(){
        var row = $(this).closest('tr')
        $('#nombre').val(row.find('.nombre').text());
        $('#precio').val(row.find('.precio').text());
        $('#año').val(row.find('.año').text());
        $('#id').val($(this).attr('data-id'));
    });

    $('#table').on('click','.eliminar', function(){
        eliminarObra($(this).attr('data-id'));
    });

    $
});