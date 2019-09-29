let data = localStorage.getItem('data');
data === null ? console.log('no data') : console.log(JSON.parse(data))

const saveData = () => {
    let fName = document.getElementById('fname').value
    let lName = document.getElementById('lname').value
    let DoB = document.getElementById('birth').value

    let fetchedData = []
    let values = {
        fName: fName,
        lName: lName,
        DoB: DoB,
    }

    if(data === null){
        fetchedData.push(values)
        dataFinal = JSON.stringify(fetchedData)
        localStorage.setItem('data', dataFinal)
    } else {
        let data = localStorage.getItem('data')
        let finalData = JSON.parse(data)
        fetchedData = [...finalData];
        fetchedData.push(values)
        let pushFinalData = JSON.stringify(fetchedData)
        localStorage.setItem('data', pushFinalData)
    }
}

const fetchData = () => {
    if (data !== null){
        let fetchedDtata = JSON.parse(data)
        fetchedDtata.forEach(element => {
            let table = document.getElementById('table')
            let tr = document.createElement('tr')
            let td1 = document.createElement('td');
            let txt1 = document.createTextNode(element.fName)
            td1.appendChild(txt1)

            let td2 = document.createElement('td');
            let txt2 = document.createTextNode(element.lName)
            td2.appendChild(txt2)

            let td3 = document.createElement('td');
            let txt3 = document.createTextNode(element.DoB)
            td3.appendChild(txt3)

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            let randomClassName =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            tr.classList.add(randomClassName);
            tr.addEventListener('click', (e) => {
                deleteFunction(e.target)
            })
            table.appendChild(tr)
        });
    }
    return;
}

const deleteFunction = (val) => {
    let fetchedDtata = JSON.parse(data);
    let finalData = []
    fetchedDtata.forEach(e => {
        if (e.fName === val.firstChild.data || e.lName === val.firstChild.data || e.DoB === val.firstChild.data){
            console.log('this is it')
        } else {
            finalData.push(e)
        }
    })
    dataFinal = JSON.stringify(finalData)
    localStorage.setItem('data', dataFinal)

    let class_name = val.parentElement.className
    node_to_delete = document.getElementsByClassName(class_name)
    node_to_delete[0].parentElement.removeChild(node_to_delete[0])
}

fetchData()