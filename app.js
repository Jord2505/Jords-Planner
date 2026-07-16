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
