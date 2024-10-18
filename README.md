**ABOUT AUTHOR**
Application created by Emmanuel Maina
# Fitness Tracker

Fitness Tracker is a simple web application that allows users to log their workouts and track calories burned. It provides a user-friendly interface to add workouts, view total calories burned, and visualize workout data using a chart.

## Features

- Add workouts with name 
- View a list of all workouts
- Delete individual workouts
- Display total calories burned
- Visualize workout data with a bar chart
- Persist data using a JSON server API

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Chart.js for data visualization
- JSON Server for a mock REST API
- Vite as the build tool and development server

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/mainascode/fitness-tracker.git
   cd fitness-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the JSON Server (API):
   ```
   npm run api
   ```

4. In a new terminal, start the Vite development server:
   ```
   npm run start
   ```

5. Open your browser and navigate to `http://localhost:5504` to view the application.

## Usage

1. Enter a workout name and the number of calories burned in the form.
2. Click "Add Workout" to log the workout.
3. View your workouts in the list below the form.
4. The total calories burned is displayed above the workout list.
5. A bar chart at the bottom visualizes the calories burned for each workout.
6. To delete a workout, click the "×" button next to the workout in the list.

## API Endpoints

The JSON Server provides the following API endpoints:

- GET /workouts: Retrieve all workouts
- GET /workouts/:id: Retrieve a specific workout
- POST /workouts: Create a new workout
- PUT /workouts/:id: Update a specific workout
- DELETE /workouts/:id: Delete a specific workout

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).# Project-Fitness-App
