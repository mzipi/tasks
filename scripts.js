window.onload = function(){
    document.getElementById('agregar').addEventListener('click', function(){
        item = document.createElement('li');
        del = document.createElement('button');
        edit = document.createElement('button');
        
        del.append('Borrar');
        edit.append('Editar');

        item.append(document.getElementById('caja').value);
        item.appendChild(del);
        item.appendChild(edit);

        document.getElementById('tareas').appendChild(item);
    });
}