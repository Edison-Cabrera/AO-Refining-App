let t4Input = document.getElementById('t4Input');
let t5Input = document.getElementById('t5Input');
let t6Input = document.getElementById('t6Input');
let t7Input = document.getElementById('t7Input');
let t8Input = document.getElementById('t8Input');
let tierToRefine = document.getElementById('tierToRefine');

let submitBtn = document.getElementById('submitBtn');

let fce = focusCostEfficiency(t4Input.value, t5Input.value, t6Input.value, t7Input.value, t8Input.value, tierToRefine.value);
let getQuot = getQuotient(fce);

submitBtn.addEventListener('click', () => {
	return console.log(totalFocusCost(tierToRefine.value, getQuot));
})