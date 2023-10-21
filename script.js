/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const itemsList = document.querySelector('#items');


sendInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        const inputText = sendInput.value;

        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = inputText;

        itemsList.append(newItem);


        sendInput.value = '';

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });

    }

});




/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */