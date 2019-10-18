let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let student_List =[]
let serial = 0

let printArray =() => {
    table_body.innerHTML =""

    student_List.forEach(element => {
        let new_row = document.createElement("tr")
        new_row.classList.add("table-active")
        new_row.innerHTML = 
            `<th scope='row'>${element.carnet}</th>
            <td>${element.schedule}</td>
            <td>${element.datetime.toLocaleString()}</td>
            <td>${element.late}</td>`

        let new_cell = document.createElement("td")
        let new_btn=document.createElement("button")

        /*personalizar boton */
        new_btn.className ="btn btn-danger"
        new_btn.innerText = "HOLI"
        new_btn.value = element.id

        new_btn.addEventListener("click", event =>{
            let id_actual = event.target.value

            student_List.forEach((element, pos) =>{
                if(id_actual == element.id){
                    /*console.log (element.carnet)*/
                    /*eliminar un elemento*/
                    /*splice (posicion, cant de elementos a eliminar)  elimina el elemento en esa posicion y los siguiente a él*/
                    student_List.splice(pos,1)
                    printArray()
                }
            })
        })

        new_cell.appendChild (new_btn)
        new_row.appendChild(new_cell)
        table_body.appendChild(new_row)

        })
}

/*
    Función para agregar un hijo a la tabla
*/

let addStudent = (carnet, schedule, late)=>{
    
    let datetime = new Date()
    let datetime_string = datetime.toLocaleString()

    student_List.push({
        "id": serial,
        "carnet" : carnet,
        "horario": schedule,
        "tarde": late,
        "ingreso": datetime_string
    })
    
    let new_row = document.createElement("tr")
    new_row.classList.add("table-active")
    new_row.innerHTML = 
        `<th scope='row'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>`

    let new_cell = document.createElement("td")
    let new_btn=document.createElement("button")

    /*personalizar boton */
    new_btn.className ="btn btn-danger"
    new_btn.innerText = "HOLI"
    new_btn.value =serial

    new_btn.addEventListener("click", event =>{
        let id_actual = event.target.value

        student_List.forEach((element, pos) =>{
            if(id_actual == element.id){
                /*console.log (element.carnet)*/
                /*eliminar un elemento*/
                /*splice (posicion, cant de elementos a eliminar)  elimina el elemento en esa posicion y los siguiente a él*/
                student_List.splice(pos,1)
            }
        })
    })

    new_cell.appendChild (new_btn)
    new_row.appendChild(new_cell)
    table_body.appendChild(new_row)

    serial++
}

/*
    Función para parsear el valor booleano del late_switch
*/

let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

/*
    Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)


    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
    }else{
        
        alert("Formáto de carnet no válido")
    }
})

/*
    Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})