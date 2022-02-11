const List = [
    {
        name: "Bootstrap Course",
        price: "2.0"
    },
    {
        name: "Angular Crash Course",
        price: "2.7"
    },
    {
        name: "C++ Course for Beginner",
        price: "2.8"
    },
    {
        name: "ReactJs Course",
        price: "2.5"
    }
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    List.forEach( course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("cprice");

        const price = document.createTextNode("   "+" $ " + course.price);
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);
    });
}
generateList();
// window.addEventListener('load',generateList);

// Sorting in JavaScript

const button = document.querySelector(".btn");
button.addEventListener('click', () => {
   List.sort((x,y) => x.price - y.price ); 
   generateList();
});

const button2 = document.querySelector(".btn2");
button2.addEventListener('click', () => {
   List.sort((x,y) => y.price - x.price ); 
   generateList();
});