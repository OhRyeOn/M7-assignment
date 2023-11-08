// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form')
let table = document.querySelector('table')
let empCount = document.getElementById('empCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
empCount.innerHTML = `(${count})`

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let ext = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let dpt  = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cId = row.insertCell()
    let cName = row.insertCell()
    let cExt = row.insertCell()
    let cEmail = row.insertCell()
    let cDpt = row.insertCell()
    let cDelete = row.insertCell()


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID = document.createTextNode(id)
    let textName = document.createTextNode(name)
    let textExt = document.createTextNode(ext)
    let textEmail = document.createTextNode(email)
    let textDpt = document.createTextNode(dpt)

    cId.appendChild(textID)
    cName.appendChild(textName)
    cExt.appendChild(textExt)
    cEmail.appendChild(textEmail)
    cDpt.appendChild(textDpt)


    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm text-red'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cDelete.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('input').focus()


    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    empCount.innerHTML = `(${count})`
})

// DELETE EMPLOYEE
table.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-danger')){
    if (confirm('Are you sure you want to delete this employee?'))
        table.deleteRow(e.target.parentNode.parentNode.rowIndex)
        count--
        empCount.innerHTML = `(${count})`
    }




})