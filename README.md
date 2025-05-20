# 🏋️‍♂️ TrackFit App

TrackFit is a fitness tracking app built using **React Native**, **Expo Router**, and **Context API**. The app helps users manage and monitor their daily workout schedules by allowing them to:

- Add workouts with title, date, and time range.
- View categorized workouts (Upcoming, Completed, and Missed).
- Mark workouts as completed.
- Delete any workout, whether it's upcoming, completed, or missed.

This application is structured in a modular way to ensure maintainability and scalability.

---

## 📂 Folder & File Structure Overview

Here's a quick overview of important folders and files:

### `App.js`
- Entry point of the app. It sets up the app's root using the Expo Router and handles global context providers (like WorkoutContext).

### `/app/`
- Contains the routing structure powered by Expo Router.
- Includes tabs such as:
  - `index.tsx`: Home screen.
  - `add.tsx`: Add Workout screen.
  - `stats.tsx`: Stats screen to manage and view workouts.

### `/components/`
- Reusable UI components like `WorkoutItem`, `HelloWave`, `ParallaxScrollView`, etc.
- Ensures consistent design across screens.

### `/context/WorkoutContext.js`
- Manages the global state of workouts.
- Provides functions to add workouts, mark them completed, delete them, and auto-detect missed workouts.

### `/navigation/AppNavigator.js` (if used)
- Defines stack or tab navigation (mostly handled by Expo Router in this project).

### `/screens/`
- Contains main screen components like:
  - `HomeScreen.js`
  - `AddWorkoutScreen.js`
  - `StatsScreen.js`

### `/utils/storage.js`
- Handles persistent local storage of workouts using `AsyncStorage`.

---

## 📱 App Functionality

### 🏠 Home Screen
- Welcomes the user with an introduction to the TrackFit app.
- Explains the importance of tracking workouts for personal fitness.
- Guides users to navigate the app using the tab bar:
  - Tap "Add" to log a new workout session.
  - Tap "Stats" to view your upcoming, completed, or missed workouts.

### ➕ Add Screen
- Lets users add a workout with:
  - Title (e.g., "Morning Cardio")
  - Date (e.g., 2025-05-20)
  - Time Range (Start and End time)

### 📊 Stats Screen
- Displays all workouts divided into:
  - ✅ Upcoming Workouts
  - 🟩 Completed Workouts
  - ❌ Missed Workouts (automatically detected based on current time)
- Allows:
  - Marking upcoming workouts as completed
  - Deleting any workout in any category

---

## 💡 Why TrackFit?

Staying fit and consistent with your workout schedule is vital for long-term health and well-being. TrackFit helps you stay accountable by giving you a clear picture of what you’ve planned, what you’ve completed, and what you’ve missed. It acts like a digital fitness log — right in your pocket.

---

## 📌 Tech Stack

- React Native + Expo Router
- Context API for global state
- AsyncStorage for persistent storage
- TypeScript for type safety

---

## 📷 Screenshots
![Image](https://github.com/user-attachments/assets/179659f6-c4c9-47c6-a5d6-603e25e3244b)

![Image](https://github.com/user-attachments/assets/cba7fef7-76b4-4376-960e-a552ee96ad4c)

![Image](https://github.com/user-attachments/assets/f03b8f88-d501-4a81-a1de-93f617e9a8a2)

![Image](https://github.com/user-attachments/assets/f4ce317b-a24e-4083-b978-d5c4be233ba0)

![Image](https://github.com/user-attachments/assets/078b6f23-5b4f-44be-a113-b0a556125388)

![Image](https://github.com/user-attachments/assets/2b049af3-a50e-4f5f-8a0a-7ce9d93973bf)


---

## ✅ Setup Instructions

```bash
git clone https://github.com/yourusername/TrackFit-App.git
cd TrackFit-App
npm install
npx expo start
