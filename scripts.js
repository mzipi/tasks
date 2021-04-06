window.onload = function(){
    document.getElementById('agregar').addEventListener('click', function(){
        item = document.createElement('li');
        del = document.createElement
        texto = document.getElementById('caja').value;
        item.append(texto);
        document.getElementById('tareas').appendChild(item);
    });
}