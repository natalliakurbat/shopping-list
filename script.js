/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('.input');
const itemsList = document.querySelector('.items');

if (sendInput) {
    sendInput.addEventListener('keydown', function(event) {

        if (event.key == 'Enter') {
            const inputText = sendInput.value;

            const newInput = document.createElement('div');
            newInput.classList.add('items');
            newInput.textContent = inputText;

            if (itemsList) {
                itemsList.append(newInput);
            }
        }
    });
}

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */