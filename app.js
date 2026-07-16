// --------------------
// Bottom Navigation
// --------------------

function openPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");
}


// --------------------
// Create Exercise Table
// --------------------

function createExercise(name, sets, targetReps) {

    let html = `
    <div class="exercise">

        <h3>${name} (${sets} x ${targetReps})</h3>

        <table>

            <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
            </tr>
    `;

    for (let i = 1; i <= sets; i++) {

        html += `
        <tr>

            <td>${i}</td>

            <td>
                <input type="number" placeholder="kg">
            </td>

            <td>
                <input type="number" placeholder="${targetReps}">
            </td>

        </tr>
        `;
    }

    html += `
        </table>

    </div>
    `;

    return html;
}


// --------------------
// Workout Loader
// --------------------

function loadWorkout(day) {

    const area = document.getElementById("workoutArea");

    let html = "";

    switch(day){

        case "monday":

            html += "<div class='card'>";
            html += "<h2>Monday - Upper Body</h2>";

            html += createExercise("Bench Press",4,8);
            html += createExercise("Rows",4,10);
            html += createExercise("Shoulder Press",3,10);
            html += createExercise("Bicep Curls",3,10);
            html += createExercise("Tricep Dips",3,10);

            html += "</div>";

            break;


        case "tuesday":

            html += "<div class='card'>";
            html += "<h2>Tuesday - Lower Body</h2>";

            html += createExercise("Squats",4,8);
            html += createExercise("Lunges",3,10);
            html += createExercise("Leg Curls",3,12);
            html += createExercise("Calf Raises",3,10);

            html += "</div>";

            break;


        case "wednesday":

            html = `
            <div class="card">

                <h2>Wednesday</h2>

                <p>Rest / Light Cardio</p>

            </div>
            `;

            break;


        case "thursday":

            html += "<div class='card'>";
            html += "<h2>Thursday - Full Body</h2>";

            html += createExercise("Deadlifts",4,6);
            html += createExercise("Lat Pulldowns",3,12);
            html += createExercise("Dumbbell Press",3,10);
            html += createExercise("Core Work",3,10);

            html += "</div>";

            break;


        case "friday":

            html += "<div class='card'>";
            html += "<h2>Friday - Cardio + Abs</h2>";

            html += "<p><strong>Incline Walk:</strong> 20–30 minutes</p>";

            html += createExercise("Plank (seconds)",3,60);
            html += createExercise("Hanging Leg Raises",3,10);

            html += "</div>";

            break;


        default:

            html = "";

    }

    area.innerHTML = html;

}


// --------------------
// Start App
// --------------------

document.addEventListener("DOMContentLoaded", function () {

    const daySelect = document.getElementById("daySelect");

    daySelect.addEventListener("change", function () {

        loadWorkout(this.value);

    });

});
