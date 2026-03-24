let folders = [];

function createFolder() {
  const name = document.getElementById("folderName").value;
  if (name === "") return;

  folders.push({ name: name, files: [] });
  document.getElementById("folderName").value = "";
  displayFolders();
}

function addFile(index) {
  const fileName = prompt("Enter file name:");
  if (!fileName) return;

  folders[index].files.push(fileName);
  displayFolders();
}

function displayFolders() {
  const container = document.getElementById("folders");
  container.innerHTML = "";

  folders.forEach((folder, index) => {
    let div = document.createElement("div");
    div.className = "folder";

    div.innerHTML = `
      <strong>${folder.name}</strong>
      <button onclick="addFile(${index})">Add File</button>
    `;

    folder.files.forEach(file => {
      let p = document.createElement("p");
      p.className = "file";
      p.textContent = file;
      div.appendChild(p);
    });

    container.appendChild(div);
  });
}