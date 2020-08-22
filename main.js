'use strict';

const button = document.getElementById('add')
const list = document.querySelector('.list')
const form = document.getElementById('addTodoForm')


const handleAddItem = e => {
    e.preventDefault()
    const checkBox = document.createElement('input')
    const newItem = document.createElement('li')
    const content = document.createElement('span')
    const deleteBtn = document.createElement('button')
    const inputValue = form.todo.value

    // checkBox.setAttribute('type', 'checkbox')
    checkBox.type = 'checkbox'
    deleteBtn.textContent = '削除'
    content.textContent = inputValue

    newItem.appendChild(checkBox)
    newItem.appendChild(content)
    newItem.appendChild(deleteBtn)

    list.appendChild(newItem)

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newItem)
    })
    checkBox.addEventListener('click', () => {
        newItem.classList.toggle('done')
    })

    form.todo.value = ''
}


button.addEventListener('click', handleAddItem)














