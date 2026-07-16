// Jord's Planner

const workouts = {
    Monday: `
        <strong>Upper Body</strong><br><br>
        Bench Press - 4x8<br>
        Rows - 4x10<br>
        Shoulder Press - 3x10<br>
        Bicep Curls - 3x10<br>
        Tricep Dips - 3x10
    `,

    Tuesday: `
        <strong>Lower Body</strong><br><br>
        Squats - 4x8<br>
        Lunges - 3x10<br>
        Leg Curls - 3x12<br>
        Calf Raises - 3x10
    `,

    Wednesday: `
        <strong>Rest / Light Cardio</strong><br><br>
        Recovery day
    `,

    Thursday: `
        <strong>Full Body</strong><br><br>
        Deadlifts - 4x6<br>
        Lat Pulldowns - 3x12<br>
        Dumbbell Press - 3x10<br>
        Core Work
    `,

    Friday: `
        <strong>Cardio + Abs</strong><br><br>
        Incline Walk - 20-30 mins<br>
        Plank - 3x60 secs<br>
        Hanging Leg Raises - 3x10
    `,

    Saturday: `
        <strong>Rest Day</strong>
    `,

    Sunday: `
        <strong>Rest Day</strong>
    `
};


// Show date

const today = new Date();

const dayName = today.toLocaleDateString(
    "en-GB",
    { weekday: "long" }
);

const fullDate = today.toLocaleDateString(
    "en-GB",
    {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
);


document.getElementById("date").innerHTML = fullDate;


// Show workout

if (workouts[dayName]) {
    document.getElementById("todayWorkout").innerHTML =
        workouts[dayName];
} else {
    document.getElementById("todayWorkout").innerHTML =
        "No workout planned";
}
// Page navigation

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });


    document.getElementById(pageId)
        .classList.remove("hidden");

}
// Save checkbox progress

const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]'
);


checkboxes.forEach((box, index) => {

    const saved = localStorage.getItem(
        "checkbox_" + index
    );

    if (saved === "true") {
        box.checked = true;
    }


    box.addEventListener("change", () => {

        localStorage.setItem(
            "checkbox_" + index,
            box.checked
        );

    });

});


// Save weight

const weightInput = document.querySelector(
    'input[type="number"]'
);


if (weightInput) {

    weightInput.value =
        localStorage.getItem("weight") || "";


    weightInput.addEventListener(
        "input",
        () => {

            localStorage.setItem(
                "weight",
                weightInput.value
            );

        }
    );

}
// Daily progress tracker

function updateProgress(){

    const boxes = document.querySelectorAll(
        '#home input[type="checkbox"]'
    );


    let completed = 0;


    boxes.forEach(box => {

        if(box.checked){
            completed++;
        }

    });


    let percentage =
        Math.round(
            (completed / boxes.length) * 100
        );


    document.getElementById(
        "progressScore"
    ).innerHTML =
        percentage + "% Complete";

}


// Update when checkbox changes

document
.querySelectorAll(
    '#home input[type="checkbox"]'
)
.forEach(box => {

    box.addEventListener(
        "change",
        updateProgress
    );

});


updateProgress();
// Progress saving

function saveProgress(){

    const start =
    document.getElementById("startWeight").value;

    const current =
    document.getElementById("currentWeight").value;

    const goal =
    document.getElementById("goalWeight").value;

    const notes =
    document.getElementById("progressNotes").value;


    localStorage.setItem(
        "startWeight",
        start
    );

    localStorage.setItem(
        "currentWeight",
        current
    );

    localStorage.setItem(
        "goalWeight",
        goal
    );

    localStorage.setItem(
        "progressNotes",
        notes
    );


    showStats();

}


function showStats(){

    const current =
    localStorage.getItem("currentWeight");


    const goal =
    localStorage.getItem("goalWeight");


    if(current && goal){

        document.getElementById(
            "weightSummary"
        ).innerHTML =
        `
        Current: ${current}kg<br>
        Goal: ${goal}kg
        `;

    }

}


// Load saved progress

window.addEventListener(
"load",
()=>{

document.getElementById(
"startWeight"
).value =
localStorage.getItem("startWeight") || "";


document.getElementById(
"currentWeight"
).value =
localStorage.getItem("currentWeight") || "";


document.getElementById(
"goalWeight"
).value =
localStorage.getItem("goalWeight") || "";


document.getElementById(
"progressNotes"
).value =
localStorage.getItem("progressNotes") || "";


showStats();

});
// Workout logging

function saveWorkout(){

const weights =
document.querySelectorAll(
".exerciseWeight"
);


weights.forEach(
(input,index)=>{

localStorage.setItem(
"exercise_" + index,
input.value
);

});

alert("Workout saved 💪");

}


// Load workout weights

window.addEventListener(
"load",
()=>{

const weights =
document.querySelectorAll(
".exerciseWeight"
);


weights.forEach(
(input,index)=>{

input.value =
localStorage.getItem(
"exercise_" + index
) || "";

});

});
// Workout streak tracking

function completeWorkout(){

let total =
Number(
localStorage.getItem("workouts")
) || 0;


total++;


localStorage.setItem(
"workouts",
total
);


updateWorkoutStats();

}



function updateWorkoutStats(){

let total =
Number(
localStorage.getItem("workouts")
) || 0;


document.getElementById(
"workoutStats"
).innerHTML =
`
🏋️ Total Workouts: ${total}
`;

}


window.addEventListener(
"load",
()=>{
updateWorkoutStats();
});

const display =
document.getElementById("workoutDisplay");


if(day === "monday"){

display.innerHTML = `

<div class="card">

<h2>Monday - Upper Body</h2>


<h3>Bench Press - 4x8</h3>

<table class="logTable">
<tr>
<th>Set</th>
<th>Weight</th>
<th>Reps</th>
</tr>

<tr><td>1</td><td><input></td><td><input></td></tr>
<tr><td>2</td><td><input></td><td><input></td></tr>
<tr><td>3</td><td><input></td><td><input></td></tr>
<tr><td>4</td><td><input></td><td><input></td></tr>

</table>


<h3>Rows - 4x10</h3>

<table class="logTable">
<tr>
<th>Set</th>
<th>Weight</th>
<th>Reps</th>
</tr>

<tr><td>1</td><td><input></td><td><input></td></tr>
<tr><td>2</td><td><input></td><td><input></td></tr>
<tr><td>3</td><td><input></td><td><input></td></tr>
<tr><td>4</td><td><input></td><td><input></td></tr>

</table>


</div>

`;

}



if(day === "tuesday"){

display.innerHTML = `

<div class="card">

<h2>Tuesday - Lower Body</h2>

<p>
Squats - 4x8<br><br>
Lunges - 3x10<br><br>
Leg Curls - 3x12<br><br>
Calf Raises - 3x10
</p>

</div>

`;

}


if(day === "wednesday"){

display.innerHTML = `

<div class="card">

<h2>Wednesday</h2>

<p>
Rest / Light Cardio
</p>

</div>

`;

}


if(day === "thursday"){

display.innerHTML = `

<div class="card">

<h2>Thursday - Full Body</h2>

<p>
Deadlifts - 4x6<br><br>
Lat Pulldowns - 3x12<br><br>
Dumbbell Press - 3x10<br><br>
Core Work
</p>

</div>

`;

}


if(day === "friday"){

display.innerHTML = `

<div class="card">

<h2>Friday - Cardio + Abs</h2>

<p>
Incline Walk 20-30 mins<br><br>
Plank 3x60 secs<br><br>
Hanging Leg Raises 3x10
</p>

</div>

`;

}

}
function showWorkout(day) {

    const display = document.getElementById("workoutDisplay");

    if (!display) {
        alert("Workout area missing");
        return;
    }


    if (day === "monday") {

        display.innerHTML = `

        <div class="card">

        <h2>Monday - Upper Body</h2>

        <h3>Bench Press - 4x8</h3>

        <table class="logTable">

        <tr>
        <th>Set</th>
        <th>Weight</th>
        <th>Reps</th>
        </tr>

        <tr>
        <td>1</td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        </tr>

        <tr>
        <td>2</td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        </tr>

        <tr>
        <td>3</td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        </tr>

        <tr>
        <td>4</td>
        <td><input type="number"></td>
        <td><input type="number"></td>
        </tr>

        </table>

        </div>

        `;

    }

}
