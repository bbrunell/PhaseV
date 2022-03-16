function fn(){
    var Name = document.getElementById('name').value;
    document.getElementById('result').innerHTML += '<br>' + Name;
}
function clearContent(){
    document.getElementById('result').innerHTML = '';
}