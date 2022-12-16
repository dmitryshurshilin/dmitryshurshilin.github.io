const DB_NAME = "BOOKS_DB"
const DB_VERSION = 1

let dbRequest = indexedDB.open(DB_NAME, DB_VERSION)

dbRequest.addEventListener('upgradeneeded', (event) => {
    const db = event.target.result
    console.log(`Upgrading to version ${db.version}`)

    const objectStore = db.createObjectStore('books', {
        keyPath: 'id',
        autoIncrement: true,
    })
    const defaultParams = { unique: false }
    objectStore.createIndex('author', 'author', defaultParams)
    objectStore.createIndex('is_available', 'is_available', defaultParams)
})

dbRequest.addEventListener('error', () => {
    console.error('Error: ', dbRequest.error)
})

dbRequest.addEventListener('success', () => {
    const db = dbRequest.result
    initForm(db)
    initData(db)
})

const initForm = (db) => {
    const author = document.getElementById('author')
    const title = document.getElementById('title')
    const submit = document.getElementById('submit')
    
    submit.addEventListener('click', () => {
        let transaction = db.transaction('books', 'readwrite')
        let books = transaction.objectStore('books')

        let request = books.add({
            title: title.value,
            author: author.value,
            is_available: true,
        })
        request.addEventListener('success', () => {
            updateData(db)
        })
        request.addEventListener('error', () => console.error(request.error))
    })
}

const initData = (db) => {
    updateData(db)
    const updateButton = document.getElementById('update')
    updateButton.addEventListener('click', () => {
        updateData(db)
    })
}

const updateData = (db) => {
    let transaction = db.transaction('books', 'readonly')
    let books = transaction.objectStore('books')
    let request = books.getAll()
    request.addEventListener('success', () => {
        updateDataUI(request.result)
    })
    request.addEventListener('error', () => console.error(request.error))
}

const updateDataUI = (items) => {
    const dataBox = document.getElementById('data')
    dataBox.innerText = ''

    for (item of items) {
        const itemElement = document.createElement('li')
        itemElement.className = 'data__item'
        itemElement.innerText = `${item.author}, ${item.title}`
        dataBox.appendChild(itemElement)
    }
}
