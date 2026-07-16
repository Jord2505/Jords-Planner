// Page navigation

function showPage(page) {

    document.querySelectorAll(".page")
    .forEach(section => {

        section.classList.add("hidden");

    });


    document.getElementById(page)
    .classList.remove("hidden");

}



// Workout system

function showWorkout(day) {


let workoutDisplay =
document.getElementById("workoutDisplay");



let workout = "";



if(day === "monday") {

workout = `

<div class="card">

<h2>Monday - Upper Body</h2>


${exercise("Bench Press",4,8)}

${exercise("Rows",4,10)}

${exercise("Shoulder Press",3,10)}

${exercise("Bicep Curls",3,10)}

${exercise("Tricep Dips",3,10)}


<button onclick="saveWorkout()">
Save Workout
</button>


</div>

`;

}




if(day === "tuesday") {

workout = `

<div class="card">

<h2>Tuesday - Lower Body</h2>


${exercise("Squats",4,8)}

${exercise("Lunges",3,10)}

${exercise("Leg Curls",3,12)}

${exercise("Calf Raises",3,10)}


<button onclick="saveWorkout()">
Save Workout
</button>


</div>

`;

}





if(day === "wednesday") {

workout = `

<div class="card">

<h2>Wednesday</h2>

<p>
Rest / Light Cardio
</p>

</div>

`;

}





if(day === "thursday") {

workout = `

<div class="card">

<h2>Thursday - Full Body</h2>


${exercise("Deadlifts",4,6)}

${exercise("Lat Pulldowns",3,12)}

${exercise("Dumbbell Press",3,10)}

${exercise("Core Work",3,10)}


<button onclick="saveWorkout()">
Save Workout
</button>


</div>

`;

}





if(day === "friday") {

workout = `

<div class="card">

<h2>Friday - Cardio + Abs</h2>


<p>
Incline Walk<br>
20-30 minutes
</p>


${exercise("Plank",3,60)}

${exercise("Hanging Leg Raises",3,10)}


<button onclick="saveWorkout()">
Save Workout
</button>


</div>

`;

}



workoutDisplay.innerHTML = workout;



}



// Creates exercise tables

function exercise(name, sets, reps) {


let rows = "";


for(let i=1;i<=sets;i++){


rows += `

<tr>

<td>
${i}
</td>


<td>
<input 
id="${name}-weight-${i}"
type="number"
placeholder="kg">
</td>


<td>
<input 
id="${name}-reps-${i}"
type="number"
placeholder="${reps}">
</td>


</tr>

`;

}



return `


<h3>${name} - ${sets}x${reps}</h3>


<table>


<tr>

<th>
Set
</th>

<th>
Weight
</th>

<th>
Reps
</th>

</tr>


${rows}


</table>


`;

}



// Save workout

function saveWorkout(){

localStorage.setItem(
"lastWorkout",
new Date().toLocaleDateString()
);


alert("Workout saved 💪");

}
