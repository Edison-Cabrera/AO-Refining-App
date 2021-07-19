/*parameters should depend on userInput*/
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


function getQuotient(focusCostEfficiency)
{
	return focusCostEfficiency/10000;
};

function totalFocusCost(tierToRefine, getQuotient)
{
	let baseCost = baseSpecsCost[tierToRefine];
	let focusCost = baseCost * (0.5 ** getQuotient);
	return parseInt(focusCost);
};

