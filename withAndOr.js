let day
let age

document.getElementById('button').addEventListener('click', checker)

function checker () {
  day = document.getElementById('input1').value
  age = parseInt(document.getElementById('input2').value)
  if (day === 'Saturday' || day === 'Sunday') {
    document.getElementById('result').innerHTML = 'Time to relax for the weekend!'
  } else if ((day != 'Saturday' || day != 'Sunday') && (age < 18)) {
    document.getElementById('result').innerHTML = 'Time for School!'
  } else if ((day != 'Saturday' || day != 'Sunday') && (age > 18)) {
    document.getElementById('result').innerHTML = 'Time for Work!'
  }
}
