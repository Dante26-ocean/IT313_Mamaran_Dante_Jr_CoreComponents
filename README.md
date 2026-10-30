# IT 313 - Student Directory Viewer

## Project Description

The Student Directory Viewer is a mobile application
developed using React Native and Expo.

It allows an academic adviser to browse and search
students who need academic advising.

The application includes student profile pictures,
student names, year levels, a search feature, and a
Flag for Advising button.

## Components Used

### StudentCard

StudentCard is responsible for displaying individual
student information.

Features:
- Displays student profile pictures.
- Displays student names.
- Displays student year levels.
- Provides a Flag for Advising button.
- Changes button appearance when flagged.

### StudentDirectory

StudentDirectory is the parent component.

Features:
- Stores student information using useState.
- Displays all student cards.
- Provides the search functionality.
- Filters students by name.
- Updates student flag status.
- Uses ScrollView to display the student list.

## React Native Core Components

- View
- Text
- Image
- ScrollView
- TextInput
- Pressable

## Programming Concepts

- useState
- Props
- Array map()
- Array filter()
- Conditional Rendering
- Flexbox
- StyleSheet.create()

## How to Run the Application

1. Open the project folder in VS Code.
2. Open the terminal.
3. Execute the following command:

   npx expo start

4. Scan the QR code using Expo Go or run the
   application using an emulator.

## Student Information

1. Ana Cruz - 3rd Year
2. Bea Santos - 2nd Year
3. Cid Ramos - 4th Year
4. Dex Alonzo - 1st Year
5. Eli Tan - 3rd Year