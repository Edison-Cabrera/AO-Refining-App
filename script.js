const royalCityBonus = [.367, .539];
const royalCityNoBonus = [.152, .435];
const royalIslandBonus = [.285, .497];
const royalIslandNoBonus = [0, .371];
const craftLocationBonuses = 
{
	royalCityBonus: [.367, .539],
	royalCityNoBonus: [.152, .435],
	royalIslandBonus: [.285, .497],
	royalIslandNoBonus: [0, .371]
};

const baseSpecsCost =
{
	"4.0": 48,
	"4.1": 89,
	"4.2": 143,
	"4.3": 239,
	"5.0": 89,
	"5.1": 160,
	"5.2": 269,
	"5.3": 461,
	"6.0": 160,
	"6.1": 284,
	"6.2": 487,
	"6.3": 844,
	"7.0": 284,
	"7.1": 500,
	"7.2": 866,
	"7.3": 1508,
	"8.0": 500,
	"8.1": 877,
	"8.2": 1527,
	"8.3": 2666
};

let t4Input;
let t5Input;
let t6Input;
let t7Input;
let t8Input;
let tierToRefine;
let currentFocusPoints;
let refiningLocation;


function calculateMaterials(currentFocusPoints, calculateFocusCost, refiningLocation)
{
	
};

function calculateFocusCost(t4Input, t5Input, t6Input, t7Input, t8Input, tierToRefine)
{
	let baseCost = baseSpecsCost[tierToRefine];
	let quotient = focusCostEfficiency(t4Input, t5Input, t6Input, t7Input, t8Input, tierToRefine) / 10000;
	focusCost = baseCost * (0.5 ** quotient);
	return parseInt(focusCost);
	
}

function focusCostEfficiency(t4Input, t5Input, t6Input, t7Input, t8Input, tierToRefine)
{
	let masteryFCE = (t4Input + t5Input + t6Input + t7Input + t8Input) * 30;
	let specsFCE = 0;
	if (tierToRefine == "4.0" || tierToRefine == "4.1" || tierToRefine == "4.2" || tierToRefine == "4.3")
	{
		 return specsFCE = t4Input * 250;
	}
	else if (tierToRefine == "5.0" || tierToRefine == "5.1" || tierToRefine == "5.2" || tierToRefine == "5.3")
	{
		return specsFCE = t5Input * 250;
	}
	else if (tierToRefine == "6.0" || tierToRefine == "6.1" || tierToRefine == "6.2" || tierToRefine == "6.3")
	{
		return specsFCE = t6Input * 250;
	}
	else if (tierToRefine == "7.0" || tierToRefine == "7.1" || tierToRefine == "7.2" || tierToRefine == "7.3")
	{
		return specsFCE = t7Input * 250;
	}
	else if (tierToRefine == "8.0" || tierToRefine == "8.1" || tierToRefine == "8.2" || tierToRefine == "8.3")
	{
		return specsFCE = t8Input * 250;
	}

	return masteryFCE + specsFCE;
};

console.log(calculateFocusCost(1,1,1,1,1,"4.1"));
