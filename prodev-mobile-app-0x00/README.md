# 📱 Create Your First Mobile App  
**Project:** prodev-mobile-setup  
**Directory:** `prodev-mobile-app-0x00`  

## 🧠 Objective  
The goal of this task is to set up a new **React Native** mobile application using the **Expo Router** template, explore its folder structure, and understand how to scaffold and modify a basic mobile app.

---

## ⚙️ Steps Followed for Scaffolding  

### 1️⃣ Navigate to the Project Directory  
Opened the terminal and navigated to the parent project directory:  
```bash
cd prodev-mobile-setup
2️⃣ Initialize the Expo Project

Created a new Expo project using the latest Expo Router template:

npx create-expo-app@latest .


This command sets up a new Expo application in the current directory.

It automatically installs the required dependencies and generates the default folder structure.

3️⃣ Explore the Folder Structure

After initialization, the key folders and files included were:

app/
 ├── (tabs)/
 │    ├── index.tsx
 │    └── other tab files...
 ├── _layout.tsx
assets/
node_modules/
package.json
tsconfig.json
app.json


The app/(tabs)/index.tsx file contains the code for the Home screen.

The _layout.tsx file defines the overall layout and navigation of the app.

The constants/Colors.tsx file manages theme colors.

4️⃣ Modify the Home Screen

Opened the file:

app/(tabs)/index.tsx


and replaced the default text

<Text>Welcome!</Text>


with

<Text>First App Created</Text>

5️⃣ Run and Test the Application

Started the Expo development server:

npx expo start


A QR code appeared in the terminal.

For Android, scanned it using the Expo Go app.

For iOS, scanned it using the Camera app.

The app successfully launched showing:
“First App Created” on the screen 🎉

🔄 Reset the Application

Executed the reset command:

npm run reset-project

🧩 Observations After Reset

The command restores the initial scaffold of the Expo project.

Any local modifications (like text changes or added files) were removed.

The app returned to its default state with the original Welcome! text.

It’s useful for cleaning up the project and starting fresh during development.

📂 Important Files Modified
File Path	Description
app/(tabs)/index.tsx	Modified the default “Welcome!” text to “First App Created”.
README.md	Added documentation of setup and observations.
app-example/constants/Colors.tsx	(Unmodified, provided for reference.)
✅ Summary

Successfully created and ran the first Expo Router project.

Learned how to navigate and modify the app folder structure.

Observed the effects of the reset command and its role in project cleanup.
--