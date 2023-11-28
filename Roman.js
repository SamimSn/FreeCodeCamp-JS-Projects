function convertToRoman(num) 
{
	let answer = ""
	let answerAsArray = []

	let roots = convertToRoot(num);
	console.log(num) // debugg
	console.log(roots) // debugg


	for (let i = 0; i < roots.length; i++)
	{
		let position = findPositionInInterval(roots[i])

		if (0 <= position && position < 0.4)
		{
			answer += nthInterval(roots[i], 1)
			answerAsArray.push(nthInterval(roots[i], 1))
		}

		if (position == 0.4)
		{
			answer += nthInterval(roots[i], 2)
			answerAsArray.push(nthInterval(roots[i], 2))
		}

		if (position == 0.5)
		{
			answer += nthInterval(roots[i], 3)
			answerAsArray.push(nthInterval(roots[i], 3))
		}

		if (0.6 <= position && position < 0.9)
		{
			answer += nthInterval(roots[i], 4)
			answerAsArray.push(nthInterval(roots[i], 4))
		}

		if (position == 0.9)
		{
			answer += nthInterval(roots[i], 5)
			answerAsArray.push(nthInterval(roots[i], 5))
		}

		if (position == 1)
		{
			answer += nthInterval(roots[i], 6)
			answerAsArray.push(nthInterval(roots[i], 6))
		}
	}

	console.log(answerAsArray)
	console.log(answer)

	return answer

}


function convertToRoot(num) 
{
	num = num.toString()
	let numAsArray = []
	for (let i = num.length - 1; i >= 0; i--)
	{
		numAsArray.push(num[num.length - i - 1] * Math.pow(10, i))
	}
	return numAsArray
}

function findInterval(num) 
{
	let interval = [0]
	num = num.toString()
	interval.push(Math.pow(10, num.length))
	return interval
}

function findPositionInInterval(num) 
{
	return num / findInterval(num)[1]
}
function nthInterval(num, status)
{
	if (status == 1)
	{
		let mySymbol = romanNumbers[findInterval(num)[1] / 10]
		let count = num / (findInterval(num)[1] / 10)
		let result = ""
		for (let i = 0; i < count; i++)
		{
			result += mySymbol
		}
		return result
	}
	if (status == 2)
	{
		return romanNumbers[findInterval(num)[1] / 10] + romanNumbers[findInterval(num)[1] / 2]
	}
	if (status == 3)
	{
		return romanNumbers[findInterval(num)[1] / 2]
	}
	if (status == 4)
	{
		let myHalfSymbol = romanNumbers[findInterval(num)[1] / 2]
		let myHalf = findInterval(num)[1] / 2
		let myCount = (num - myHalf) / (findInterval(num)[1] / 10)
		let mytenth = romanNumbers[findInterval(num)[1] / 10]
		let myResult = myHalfSymbol
		for (let i = 0; i < myCount; i++) 
		{
			myResult += mytenth
		}
		return myResult
	}

	if (status == 5)
	{
		return romanNumbers[findInterval(num)[1] / 10] + romanNumbers[findInterval(num)[1]]
	}
	if (status == 6)
	{
		return romanNumbers[findInterval(num)[1]]
	}
}

const romanNumbers =
{
	1: "I",
	5: "V",
	10: "X",
	50: "L",
	100: "C",
	500: "D",
	1000: "M"
}

convertToRoman(3999)