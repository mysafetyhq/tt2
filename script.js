document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const saveDayButton = document.getElementById('save-day');
    const submitWeekButton = document.getElementById('submit-week');
    const addTaskButtons = document.querySelectorAll('.add-task');

    addTaskButtons.forEach(button => {
        button.addEventListener('click', addTaskRow);
    });

    saveDayButton.addEventListener('click', saveDay);
    submitWeekButton.addEventListener('click', submitWeek);

    function addTaskRow(event) {
        const taskRow = event.target.closest('.task-row').cloneNode(true);
        taskRow.querySelectorAll('input').forEach(input => input.value = '');
        form.appendChild(taskRow);
    }

    function saveDay() {
        const formData = new FormData(form);
        localStorage.setItem('taskData', JSON.stringify(Object.fromEntries(formData)));
        alert('Day saved successfully!');
    }

    function submitWeek() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        // Convert form data to a PDF and submit (using a library like jsPDF)
        alert('Week submitted successfully!');
    }

    function loadSavedData() {
        const savedData = localStorage.getItem('taskData');
        if (savedData) {
            const data = JSON.parse(savedData);
            for (const [key, value] of Object.entries(data)) {
                form.elements[key].value = value;
            }
        }
    }

    loadSavedData();
});
