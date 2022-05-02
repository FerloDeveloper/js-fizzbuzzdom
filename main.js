const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++){

    const element = document.createElement("div");

    element.classList.add("box");

    if (i % 3 === 0 && i % 5 === 0){
        element.innerText = "FizzBuzz";
        element.classList.add("red");
        container.append(element);

    } else if(i % 5 === 0){
        element.innerText = "Buzz";
        element.classList.add("yellow")
        container.append(element);
    } else if(i % 3 === 0){
        element.innerText = "Fizz";
        element.classList.add("green")
        container.append(element);
    } else {
        element.innerText = i;
        element.classList.add("blue")
        container.append(element);
    }
}
