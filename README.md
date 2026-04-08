# 📁 File Manager (Electron)

A desktop file explorer built with **Electron**, focused on simplicity, usability, and security.  
This project demonstrates the integration between web technologies and the operating system's file system using **Node.js**.

---

## ✨ Features

### Interface
- **Path Display**  
  Shows the current directory in real time.

- **Dynamic Listing**  
  Automatically displays files and folders from the selected directory.

- **Visual Identification**  
  Differentiates files and folders using icons or styles.

- **Folder Navigation**  
  Allows access to subdirectories with a single click.

- **Back Navigation**  
  Button to return to the parent directory.

- **Auto Update**  
  The file list updates whenever the directory changes.

- **File Viewer**  
  Supports reading `.txt` and `.json` files.

---

## 🔐 Architecture and Security

- **IPC Communication**  
  Uses `ipcMain` and `ipcRenderer` with context isolation.

- **FS Module (File System)**  
  File handling is performed in the main process.

- **Path Module**  
  Ensures cross-platform compatibility.

- **State Management**  
  Controls the current directory in the renderer process.

- **Error Handling**  
  Handles permission issues and invalid paths.

---

## 🏗️ Project Structure

```
📦 project
├── main.js        # Main process (Node.js)
├── preload.js     # Secure bridge (IPC)
├── renderer.js    # Interface logic
├── index.html     # App structure
├── style.css      # Styling (dark mode)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation

```bash
npm install
```

If starting from scratch:

```bash
npm install electron --save-dev
```

### Run

```bash
npm start
```

---

## 🛠️ Technologies Used

- Electron.js  
- Node.js (`fs`, `path`)  
- JavaScript (ES6+)  
- HTML5  
- CSS3  

---

## 📌 Git Best Practices

```bash
node_modules/
```

---

## 🎯 Project Purpose

- Practice building desktop applications with Electron  
- Understand communication between processes (Main ↔ Renderer)  
- Work with the operating system's file system  
- Apply security best practices in desktop applications  
