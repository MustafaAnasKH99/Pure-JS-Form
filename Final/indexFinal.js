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

// var choices = [];
// var els = document.getElementsByClassName('hobbies');
// for (var i=0;i<els.length;i++){
//   if ( els[i].checked ) {
//     choices.push(els[i].value);
//   }
// }

// var choicesCountry = [];
// var els = document.getElementsByClassName('choiceCountry');
// for (var i=0;i<els.length;i++){
//   if ( els[i].checked ) {
//     choicesCountry.push(els[i].value);
//   }
// }

var choicesCountry = new Array();
function getSelCountries() {
    alert('NewFunction')
    var mySelectedCountries = document.getElementById('mySelectCountries');
    if (mySelectedCountries.options[mySelectedCountries.selectedIndex].value!=null){
        choicesCountry.push(mySelectedCountries.options[mySelectedCountries.selectedIndex].value)
    }
    alert(String(choicesCountry))
}

var choicesOfHobby = new Array();
function getSelHobbies() {
    alert('NewFunction')
    var mySelectedHobbies = document.getElementsByClassName('hobbies');
    for (i=0; i<mySelectedHobbies.length; i++){
        if (mySelectedHobbies[i].checked){
            choicesOfHobby.push(mySelectedHobbies[i].value)
        }
    }
    
    alert(String(choicesOfHobby))
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
    
function saveData() {
    // if (document.querySelectorAll('.hobbies:checked').length !==3 ) {
    //     preventDefault()
    //     return false;
    // }

    // The localStorage needs to have only one key and its value that contains all the input 
    var myObj = {
        field1: fname.value,
        field2: lname.value,
        field3: birth.value,
        field4: salary.value,
        field5: String(selectedGender),
        field6: String(choicesOfHobby),
        field7: color.value,
        field8: String(choicesCountry),
        field9: textArea.value
    }    
    console.log('New Input')
    console.log(myObj)
    console.log(myObj)
    console.log(myObj)

    var result1 = Object.keys(myObj).map(function(key) {
        return [String(key), myObj[key]];
    });

    console.log('An array of New Input')
    console.log(result1);
    console.log(result1);
    console.log(result1);
    
    let arr = new Array()
    console.log('New Empty Array')
    console.log(arr)
    console.log(arr)
    console.log(arr)
    if (window.localStorage.length == 0) {
        arr = JSON.stringify(myObj);
       window.localStorage.setItem('data', arr);
    } else {
    // window.localStorage.setItem(localStorage.length+1, JSON.stringify(myObj))
        // arr = localStorage.getItem('data');
        // arr.push(myObj);
        // localStorage.setItem('data', arr);

        // let retreivedData = window.localStorage.getItem('data')
        // let modifiedData = retreivedData + 'This is coming'
        let exisData = window.localStorage.getItem('data')
        let toAddData = JSON.stringify(myObj)
        let finalData = JSON.stringify(exisData + toAddData)
        let finalDataObject = JSON.parse(finalData)
        console.log('Is it good?')
        console.log(finalData)
        console.log(finalData)
        console.log(finalDataObject)
        // window.localStorage.setItem('data', finalDataObject)
        arr = JSON.parse(window.localStorage.getItem("data"));
        console.log('Existing Data')
        console.log(arr)
        console.log(arr)
        console.log(arr)

        const newC = Object.assign(arr, myObj)
        console.log('Assigned Objects')
        console.log(newC)
        console.log(newC)
        console.log(newC)

        var result2 = Object.keys(arr).map(function(key) {
            return [String(key), arr[key]];
        });
        console.log('an array of the existing data')
        console.log(result2)
        console.log(result2)
        console.log(result2)

        let final = result2.push.apply(result2, result1)
        console.log('Array to push')
        console.log(final)
        console.log(final)
        console.log(final)
        var fenale = result2 +  result1
        console.log(fenale)
        console.log(fenale)
        console.log(fenale)

        // arr.push(myObj);
        // console.log('Existing + New ata')
        // console.log(arr)
        // console.log(arr)
        // console.log(arr)
        // const arrPush = JSON.stringfy(arr)
        // console.log(arrPush)
        // console.log(arrPush)
        // console.log(arrPush)
        // window.localStorage.setItem("data",fenale);
    }

}   

// var i = 0
// while(i !== localStorage.length){
//     i++;
//     var table = document.getElementById('myTable');
//     var row = table.insertRow(i);
//     for(j=1; j < 10; j++) {
//         var jSON = window.localStorage.getItem(i)
//         var cell = row.insertCell(j-1)
//         var parsedjSON = JSON.parse(jSON)
//         var A = "field"+String(j)
//         var final = parsedjSON[A]
//         var node = document.createTextNode(final)
//         node.innerHTML = String(final)
//         cell.innerHTML = node.innerHTML
//         if(cell.innerHTML == "Red") {
//             cell.style.backgroundColor = "Red"
//         } else if(node.innerHTML == "Blue") {
//             cell.style.backgroundColor = "Blue"
//         } else if(node.innerHTML == "Yellow") {
//             cell.style.backgroundColor = "Yellow"
//         } else if(node.innerHTML == "Black") {
//             cell.style.backgroundColor = "Black"
//         } else if(node.innerHTML == "Green") {
//             cell.style.backgroundColor = "Green"
//         } else if(node.innerHTML == "White") {
//             cell.style.backgroundColor = "White"
//         }
//     }
//     var btn = document.createElement('input');
//     cell.appendChild(btn)
//     btn.type = 'button'
//     btn.value="Delete"
//     btn.name="Delete"
//     btn.id = "deleteButton"+String(i)
//     document.getElementById("deleteButton"+String(i)).onclick = () => {
//         localStorage.removeItem(i)
//         location.reload()
//     }
// }