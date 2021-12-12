<!-- Ticket Booking Platform -->

Yogya.AI — Frontend Engineering Assignment

📓 Problem statement

The goal of this assignment is to build a cinema theatre ticket booking app with the
following specifications —

1. You are tasked with building an app which will help a user select seats in a
   cinema theatre and display a time-limited summary of their selected seats.
2. You have a list of seats with x rows & y columns, with these conditions —

○ Any of the seats can be marked as already booked to avoid two people
booking the same seats.

○ Any of the seats can be marked disabled. This is important to customise
the seating arrangement to match the exact arrangement of the cinema
theatre.

○ Each row of seats will have their own price.

3. Once the user has selected their seats, they can navigate to the next page where
   they will be shown a summary of the seats they chose and the total price, along
   with a countdown timer of a configurable number of minutes (default to 5). If they
   navigate back, the previously selected seats should be shown. Once the
   countdown has completed, if they navigate back, the selected seats should be
   cleared.

4. The React component should be built in a way that every cinema theatre can
   customise the layout and row prices.
   🛠 Technology stack

● React 17.

● TypeScript (optional, in case you only know JavaScript).

💡 Recommended libraries
📌 These aren't mandatory, but we recommend these because we like and use them at
yogya.ai.

● If there's a need for state, prefer very lightweight state management tools like
zustand or jotai over heavy ones like Redux, MobX, etc.

● Any UI/component libraries like Tailwind, & Material UI, etc. These can help you
speed up UI development.
🍪 Bonus points
Bonus points if your solution includes any of these —

● Correct use of React hooks.

● Setting up mock API calls for all functions using tools like Mirage or faker.js as
part of tests.

● Building loading & error states.
⛳ Expectations
The most important things we look for in your solution are —

● Solving the main problem.

● Concise and useful documentation.

● Frequent and good commit messages.

● Following good JavaScript/TypeScript & React code quality principles.

● Sticking to solid design patterns in the components, optimising for reusability,
testability & extensibility.

● Good UX decisions, helping users to easily use your solution.
