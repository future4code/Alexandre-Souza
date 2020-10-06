function tarefaImput() {
    const tarefaImput = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana").value

    if(tarefaImput.value !== "") {
       switch (diaSemana) {
           case "domingo": 
            const seletorDomingo = document.getElementById("listDomingo")
            seletorDomingo.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "segunda":
            const seletorSegunda = document.getElementById("listSegunda")
            seletorSegunda.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "terca":
            const seletorTerca = document.getElementById("listTerca")
            seletorTerca.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "quarta":
            const seletorQuarta = document.getElementById("listQuarta")
            seletorQuarta.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "quinta":
            const seletorQuinta = document.getElementById("listQuinta")
            seletorQuinta.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "sexta":
            const seletorSexta = document.getElementById("listSexta")
            seletorSexta.innerHTML += `<li> ${tarefaImput.value}</li>`
            break

            case "sabado":
            const seletorSabado = document.getElementById("listSabado")
            seletorSabado.innerHTML += `<li> ${tarefaImput.value}</li>`
            break
       }
        
       tarefaImput.value = ""

    }

}

