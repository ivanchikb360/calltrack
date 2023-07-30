
const addButton = document.querySelector('#add-button');

const calorieValues = [];

let totalCalories = 0;

addButton.addEventListener("click", updateFood);



function updateFood() {
    var foodInput = document.querySelector('.food-input');

    var calorieInput = document.querySelector('.calorie-input');

    totalCalorieElement = document.querySelector('.total');

    if(foodInput.value.length != 0 &&  calorieInput.value.length != 0){
        var food = foodInput.value;
        var calorie = calorieInput.value;
    



        var newDiv = document.createElement('div');

        newDiv.className = "showing-bar";


        newDiv.innerHTML = `
            <div class="delete">
                <button class="x">x</button>
            </div>
            <div class="food-name" id="food-name">${food}</div>
             <div class="calorie-number" id="calorie-number">${calorie}</div>
        `;
        
        
        var parentContainer = document.querySelector('.showing-section');

        parentContainer.appendChild(newDiv);
        

        calorieNumber = parseInt(calorieInput.value);

        calorieValues.push(calorieNumber);

        totalCalories = calorieValues.reduce(function(a,b){
            return a+b;
        });
        
        totalCalorieElement.innerHTML = totalCalories;

        foodInput.value = '';
        calorieInput.value = '';

    
        var deleteButton = document.querySelector('.x')
        deleteButton.addEventListener("click", function() {
            remove(newDiv);
        })
    } else {
        console.error("Input ellement 'food' not found")
    };

};


const parentContainer = document.querySelector('.showing-section');
parentContainer.addEventListener("click", function(event) {
    if(event.target.classList.contains('x')){
        var divToRemove = event.target.closest('.showing-bar');
        if(divToRemove){
            remove(divToRemove);
        }
    }
});

function remove(divToRemove){
    var parentContainer = document.querySelector('.showing-section');
    parentContainer.removeChild(divToRemove);

    var removedCalorie = parseInt(divToRemove.querySelector('.calorie-number').textContent);

    totalCalories -= removedCalorie;

    var totalCalorieElement = document.querySelector('.total');
    
    totalCalorieElement.innerHTML = totalCalories;

    var removedIndex = calorieValues.indexOf(removedCalorie);

    if(removedIndex !== -1){
        calorieValues.splice(removedIndex,1);
    }

}





