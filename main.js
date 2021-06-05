const submitBtn = document.getElementById('button')


let genders = document.querySelectorAll('.gender')


const studentName= document.getElementById('student-name')
const studentAge= document.getElementById('student-age')
const studentGender= document.getElementById('student-gender')
const isStudent= document.getElementById('is-student')
const studentCity= document.getElementById('student-city')

function showInfo(e){
	e.preventDefault()
	const fName = document.getElementById('f-name').value
	const sName = document.getElementById('s-name').value
	const age = document.getElementById('age').value
	const city = document.getElementById('city').value
	const student = document.getElementById('student')


	let gender = ""
	for(let i=0; i < genders.length; i++){
		if(genders[i].checked){
			gender = genders[i].value
		}
	}

	studentName.innerText = `${fName} ${sName}`
	studentAge.innerText = age
	studentGender.innerText = gender

	if(student.checked){
		isStudent.innerText = 'Bale'
	}
	else{
		isStudent.innerText = 'Naxer'
	}

	studentCity.innerText = city

}






submitBtn.addEventListener('click', showInfo)