
function saveNote() {
  const input = document.getElementById('noteInput');
  const note = input.value.trim();
  if (!note) return;

  let notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.push({ content: note, timestamp: new Date().toISOString() });
  localStorage.setItem('notes', JSON.stringify(notes));
  input.value = '';
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = `${note.content} — ${new Date(note.timestamp).toLocaleString()}`;
    notesList.appendChild(li);
  });
}

function clearNotes() {
  localStorage.removeItem('notes');
  displayNotes(); // refresh the list
}

window.onload = displayNotes;
