var coloredBox = document.getElementById("colorBackG");
coloredBox.style.backgroundColor = 'White';

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var birth = document.getElementById('birth')
var salary = document.getElementById('salary')
var gender = document.getElementsByName('gender');
var selectedGender = []
for (var i = 0, length = gender.length; i < length; i++)
{
 if (gender[i].checked)
 {
  selectedGender.push(gender[i].value)
  // only one radio can be logically checked, don't check the rest
  break;
 }
}
var hobbies = document.querySelectorAll('.hobbies:checked')
var hobbiesArray = Array.prototype.slice.call(hobbies);
var color = document.getElementById('colorList') // .selectedindex
var countries = document.querySelectorAll('.checkboxC:checked')
var countriesArray = Array.prototype.slice.call(countries);
var textArea = document.getElementById('textInput');

var choicesCountry = new Array();
function getSelCountries() {
    var mySelectedCountries = document.getElementById('mySelectCountries');
    if (mySelectedCountries.options[mySelectedCountries.selectedIndex].value!=null){
        choicesCountry.push(mySelectedCountries.options[mySelectedCountries.selectedIndex].value)
    }
}

var choicesOfHobby = new Array();
function getSelHobbies() {
    var mySelectedHobbies = document.getElementsByClassName('hobbies');
    for (i=0; i<mySelectedHobbies.length; i++){
        if (mySelectedHobbies[i].checked){
            choicesOfHobby.push(mySelectedHobbies[i].value)
        }
    }
}

function KeepCount() {
    
    var newCount = 0;
    if (document.form.reading.checked)
    {newCount = newCount + 1}
    
    if (document.form.writing.checked)
    {newCount = newCount + 1}
    
    if (document.form.coding.checked)
    {newCount = newCount + 1}
    
    if (document.form.filmmaking.checked)
    {newCount = newCount + 1}
    
    if (document.form.skiing.checked)
    {newCount = newCount + 1}
    
    if (document.form.swimming.checked)
    {newCount = newCount + 1}
    
    if (newCount == 4)
    {
        alert('Pick Just Three Please')
        document.form; return false;
    }
}

function KeepCount2() {
    let newCount2 = 0
    
    if (document.form.france.checked)
    {newCount2 = newCount2 + 1}
    
    if (document.form.spain.checked)
    {newCount2 = newCount2 + 1}
    
    if (document.form.sweden.checked)
    {newCount2 = newCount2 + 1}
    
    if (document.form.swizterland.checked)
    {newCount2 = newCount2 + 1}
    
    if (document.form.finland.checked)
    {newCount2 = newCount2 + 1}
    
    if (newCount2 == 5)
    {
        alert('Pick Four Max Please')
        document.form; return false;
    }
    if (newCount2 == 1) {
        alert('Pick Up 2 or More Min Please')
        document.form;
    }
}

function getColorFunction() {
    colorBackG.style.backgroundColor = colorList.options[colorList.selectedIndex].value
}

function charsCounter() {
    var textIn = textArea.value;
    var counter = (140 - (textIn.length));
    var textRem = document.getElementById('insChars');
    textRem.innerHTML = counter;
    if ( textIn.length < 30) {
        document.getElementById('insChars').style.backgroundColor = 'red';
    } else if (textIn.length < 140) {
        document.getElementById('insChars').style.backgroundColor = 'green';
    } else {
        document.getElementById('insChars').style.backgroundColor = 'blue';
    }
}

function alertFunc() {
    if(document.getElementById('textInput').value.length < 30)
    alert('Please Enter 30 Chars at Least') }
    
    const toPush = [];
    

function saveData() {
    var myObj = {
        field1: fname.value,
        field2: lname.value,
        field3: birth.value,
        field4: salary.value,
        field5: selectedGender,
        field6: choicesOfHobby,
        field7: color.value,
        field8: choicesCountry,
        field9: textArea.value  }

        if (window.localStorage.length == 0) {
            toPush.push(myObj)
            window.localStorage.setItem('data', JSON.stringify(toPush));
            console.log(JSON.stringify(toPush))     } 
        else {
            const currentData = JSON.parse(window.localStorage.getItem('data'))
            currentData.push(myObj)
            window.localStorage.setItem('data', JSON.stringify(currentData))    }
    }   
    var i =0;
    const to_limit_i = JSON.parse(localStorage.getItem('data'));
    while (i !== to_limit_i.length) {
        let table = document.getElementById('myTable')
        let row = table.insertRow(i+1);
        
        for (j=1; j<10; j++) {
            let data = window.localStorage.getItem('data');
            var cell = row.insertCell(j-1)
            let parsedData = JSON.parse(data)
            let fieldName = 'field'+String(j)
            let fieldValue = parsedData[i][fieldName]
            let node = document.createTextNode(fieldValue)
            node.innerHTML = String(fieldValue)
            cell.innerHTML = node.innerHTML
            if(cell.innerHTML == "Red") {
                cell.style.backgroundColor = "Red"
            } else if(node.innerHTML == "Blue") {
                cell.style.backgroundColor = "Blue"
            } else if(node.innerHTML == "Yellow") {
                cell.style.backgroundColor = "Yellow"
            } else if(node.innerHTML == "Black") {
                cell.style.backgroundColor = "Black"
            } else if(node.innerHTML == "Green") {
                cell.style.backgroundColor = "Green"
            } else if(node.innerHTML == "White") {
                cell.style.backgroundColor = "White"
            }
        }

        var delBtn = document.createElement('input');
        cell.appendChild(delBtn)
        delBtn.type = 'button'
        delBtn.value="Delete"
        delBtn.name="Delete"
        delBtn.id = "deleteButton"+String(i)
        delBtn.onclick = (i) => {
            console.log(i)
            let newStorage = JSON.parse(window.localStorage.getItem('data'))
            newStorage.splice(i,1) 
            window.localStorage.setItem('data', JSON.stringify(newStorage))
            location.reload()
        }

        var editBtn = document.createElement('input');
        cell.appendChild(editBtn)
        editBtn.type="button"
        editBtn.value="Edit"
        editBtn.name="Edit"
        editBtn.id = "editButton"+String(i)
        editBtn.onclick = () => {
            console.log(i)
            console.log(i)
            console.log(i)
            fname.value = to_limit_i[0].field1
            lname.value = to_limit_i[0].field2
            birth.value = to_limit_i[0].field3
            salary.value = to_limit_i[0].field4
            selectedGender = to_limit_i[0].field5
            choicesOfHobby = to_limit_i[0].field6
            color.value = to_limit_i[0].field7
            choicesCountry = to_limit_i[0].field8
            textArea.value = to_limit_i[0].field9
            var saveButton = document.createElement('button')
            saveButton.innerHTML="Save"
            cell.appendChild(saveButton)
            saveButton.onclick = () => 
            {   to_limit_i[0].field1 = fname.value
                to_limit_i[0].field2 = lname.value
                to_limit_i[0].field3 = birth.value
                to_limit_i[0].field4 = salary.value 
                to_limit_i[0].field5 = String(selectedGender)
                to_limit_i[0].field6 = choicesOfHobby
                to_limit_i[0].field7 = color.value
                to_limit_i[0].field8 = choicesCountry
                to_limit_i[0].field9 = textArea.value     
                cell.removeChild(saveButton)
                window.localStorage.setItem('data', JSON.stringify(to_limit_i))
                location.reload()   }
        }
    i = i + 1;
    }

