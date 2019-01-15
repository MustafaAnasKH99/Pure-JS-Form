var coloredBox = document.getElementById("colorBackG");
coloredBox.style.backgroundColor = 'White';


var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var birth = document.getElementById('birth')
var salary = document.getElementById('salary')
var gender = document.getElementById('selGender');
var hobbies = document.querySelectorAll('.hobbies:checked')
var hobbiesArray = Array.prototype.slice.call(hobbies);
var color = document.getElementById('colorList') // .selectedindex
var countries = document.querySelectorAll('.checkboxC:checked')
var countriesArray = Array.prototype.slice.call(countries);
var textArea = document.getElementById('textInput');

var choices = [];
var els = document.getElementsByClassName('hobbies');
for (var i=0;i<els.length;i++){
  if ( els[i].checked ) {
    choices.push(els[i].value);
  }
}

var choicesCountry = [];
var els = document.getElementsByClassName('choiceCountry');
for (var i=0;i<els.length;i++){
  if ( els[i].checked ) {
    choicesCountry.push(els[i].value);
  }
}

console.log(choices);

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
    
function saveData() {
    if (document.querySelectorAll('.hobbies:checked').length !==3 ) {
        preventDefault()
        return false;
    }
    // The localStorage needs to have only one key and its value that contains all the input 
    var myObj = {
        field1: fname.value,
        field2: lname.value,
        field3: birth.value,
        field4: salary.value,
        field5: gender.value,
        field6: choices,
        field7: color.value,
        field8: choicesCountry,
        field9: textArea.value
    }    
    window.localStorage.setItem(localStorage.length+1, JSON.stringify(myObj))
}   
    var i = 0
    while(i !== localStorage.length){
        i++;
        console.log(i)
        var table = document.getElementById('myTable');
        var row = table.insertRow(i);
        for(j=1; j < 10; j++) {
            var jSON = localStorage.getItem(i)
            var cell = row.insertCell(j-1)
            var parsedjSON = JSON.parse(jSON)
            var A = "field"+String(j)
            var final = parsedjSON[A]
            var node = document.createTextNode(final)
            node.innerHTML = String(final)
            cell.innerHTML = node.innerHTML
        }
        var btn = document.createElement('input');
        cell.appendChild(btn)
        btn.type = 'button'
        btn.value="Delete"
        btn.name="Delete"
        btn.id = "deleteButton"+String(i)
        document.getElementById("deleteButton"+String(i)).onclick = () => {
            localStorage.removeItem(i)
            location.reload()
        }
    }