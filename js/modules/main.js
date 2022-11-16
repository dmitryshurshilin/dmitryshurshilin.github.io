import o from './modules.js'

console.log(o)
o.name = 'Update object name'

document.getElementById('Button').addEventListener('click', () => {
    const script = document.createElement('script')
    script.src = 'second.js'
    script.type = 'module'
    document.appendChild(script)
})