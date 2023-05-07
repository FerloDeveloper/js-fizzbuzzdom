const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
	const element = document.createElement("div");

	element.classList.add("box");

	if (i % 3 === 0 && i % 5 === 0) {
		element.innerText = "FizzBuzz";
		container.append(element);
		element.classList.add("red");
		console.log("FizzBuzz");
	} else if (i % 5 === 0) {
		element.innerText = "Buzz";
		container.append(element);
		element.classList.add("yellow");
		console.log("Buzz");
	} else if (i % 3 === 0) {
		element.innerText = "Fizz";
		container.append(element);
		element.classList.add("green");
		console.log("Fizz");
	} else {
		element.innerText = i;
		container.append(element);
		element.classList.add("blue");
		console.log(i);
	}
}
