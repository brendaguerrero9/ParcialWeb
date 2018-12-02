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

    $('#table').delegate('.eliminar','click', function(){
        eliminarObra($(this).attr('data-id'));
    });

    $('#guardar').click(function(){
        if($('#id').val() == ''){
            crearObra();
        } else{
            actualizarObra();
        }
    });
});

    function getObras(){
        var obras = "";
            $.ajax({
                url: '/getObras',
                type: 'GET',
                datatype: 'json',

                error: function(){
                    console.log("Error en peticion getObras")
                },

                success: function(response){
                    response.obras.forEach((obra)=>{
                        obras += `<tr>
                        <td class="id">${obra._id}</td>
                        <td class="nombre">${obra.nombre}</td>
                        <td class="precio">${obra.precio}</td>
                        <td class="año">${obra.año}</td>
                        <td><button type="button" class="actualizar" data-id="${obra._id}">Actualizar</button>
                        <button type="button" class="eliminar" data-id="${obra._id}">Eliminar</button></td>

                </tr>`;
                    });
                    $('#t-body').html(obras);
                }
            });
    }

    function crearObra(){
        $.ajax({
            url:'/create',
            type: 'POST',
            datatype: 'json',
            data: {id:$("#id").val(),nombre:$("#nombre").val(), precio:$("#precio").val(), año:$("#año").val() },

            error: function(){
                console.log("Error en peticion getObras")
            },

            success: function(response){
                var obras = `<tr>
                <td class="id">${response.obra._id}</td>
                <td class="nombre">${response.obra.nombre}</td>
                <td class="precio">${response.obra.precio}</td>
                <td class="año">${response.obra.año}</td>
                <td><button type="button" class="actualizar" data-id="${response.obra._id}">Actualizar</button>
                <button type="button" class="eliminar" data-id="${response.obra._id}">Eliminar</button></td>

                </tr>`;
                $('#t-body').append(obras);
            },
        });
    }

    function actualizarObra(){
        var id = $('#id').val();
            $.ajax({
                url:'/update/'+ id,
                type: 'PUT',
                datatype: 'json',
                data: {id:$("#id").val(),nombre:$("#nombre").val(), precio:$("#precio").val(), año:$("#año").val() },

            error: function(){
                console.log("Error en peticion getObras")
            },

            success : function(response){
                getObras();
                $('#id').val('');
                $('#nombre').val('');
                $('#precio').val('');
                $('#año').val('');
            }

            });
    }


    function eliminarObra(id){
        $.ajax({
            url:'/delete/'+ id,
            type: 'DELETE',
            datatype: 'json',

        error: function(){
            console.log("Error en peticion getObras")
        },

        success: function(response){
            getObras();
        }
        });
    }


    
