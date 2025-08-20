export function getAllNotes (req, res) {
    res.status(200).json({ message: "Retrieved all notes successfully" });
}  
export function createNote (req, res) {
    res.status(201).json({ message: "Note created successfully" });
}
export function updateNote (req, res) {
    const { id } = req.params;
    res.status(200).json({ message: `Note with ID ${id} updated successfully` });
}
export function deleteNote (req, res) {
    const { id } = req.params;
    res.status(200).json({ message: `Note with ID ${id} deleted successfully` });
}