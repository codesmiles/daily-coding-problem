/*Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.*/

let a = [10, 15, 3, 7];

function num(k) {
	for (i = 0; i <= a.length; i++) {
		
		for (j = 0; j <= a.length; j++) {
		
			if (a[i] !== a[j]) {
		
				if (a[i] + a[j] === k) {
					return `${a[i]} + ${a[j]} is equals to ${k}`;
				}
				else { `No number can be added to give ${k} ` }
			}
		
		}

	}

}


console.log(num(25))