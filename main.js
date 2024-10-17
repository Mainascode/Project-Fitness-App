// DOM Elements
const workoutForm = document.getElementById('workout-form');
const workoutNameInput = document.getElementById('workout-name');
const workoutsList = document.getElementById('workouts');
const totalCaloriesSpan = document.getElementById('total-calories');
const caloriesChart = document.getElementById('caloriesChart');

let workouts = [];
let chart;


const WORKOUT_CALORIES = {
  'Running': 300,
  'Cycling': 200,
  'Swimming': 250,
  'Weightlifting': 150,
  'Yoga': 100,
  'HIIT': 400,
  'Walking': 100,
  'Dancing': 200,
  'Pilates': 150,
  'Rowing': 300
};
const API_URL = 'http://localhost:3000/workouts'
// Event Listeners
workoutForm.addEventListener('submit', addWorkout);

// Functions
function workoutData(WORKOUT_CALORIES){
fetch(`${API_URL}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(workoutData) 
  })
  .then(response => response.json())
  .then(newWorkout => {
    workouts.push(newWorkout);
    displayWorkout(newWorkout);
    updateTotalCalories();
    updateChart();
  })
  .catch(error => console.error('Error adding workout:', error))
}
function addWorkout(e) {
  e.preventDefault();
  const name = workoutNameInput.value.trim();
  if (name) {
    const calories = WORKOUT_CALORIES[name] || 150; 
    const workout = { id: Date.now(), name, calories };
    workouts.push(workout);
    updateUI();
    workoutNameInput.value = '';
  }
}


function deleteWorkout(id) {
  workouts = workouts.filter(workout => workout.id !== id);
  updateUI();
}

function updateUI() {
  renderWorkoutList();
  updateTotalCalories();
  updateChart();
}

function renderWorkoutList() {
  workoutsList.innerHTML = workouts.map(workout => `
    <li class="workout-item" data-id="${workout.id}">
      <span>${workout.name}</span>
      <span>${workout.calories} calories</span>
      <button onclick="deleteWorkout(${workout.id})">Delete</button>
    </li>
  `).join('');
}

function updateTotalCalories() {
  const total = workouts.reduce((sum, workout) => sum + workout.calories, 0);
  totalCaloriesSpan.textContent = total;
}

function updateChart() {
  const labels = workouts.map(workout => workout.name);
  const data = workouts.map(workout => workout.calories);

  if (chart) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = data;
    chart.update();
  } else {
    const ctx = caloriesChart.getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Calories Burned',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
}
)