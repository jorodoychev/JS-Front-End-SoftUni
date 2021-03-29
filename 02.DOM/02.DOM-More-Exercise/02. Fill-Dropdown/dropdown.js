function addItem() {
    let text = document.getElementById('newItemText').value;
    let valueOption = document.getElementById('newItemValue').value;
    let select = document.getElementById('menu');
    let option = document.createElement('option');

    option.value = valueOption;
    select.appendChild(option).textContent = text;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}