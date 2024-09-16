document.getElementById('fetch-btn').addEventListener('click', () => {
    const digits = document.getElementById('digits').value;
    if (!digits || digits < 1) {
        document.getElementById('numbers').textContent = 'Please enter a valid number of digits.';
        return;
    }

    fetch(`/api/pi?digits=${digits}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('numbers').textContent =`${data.piValue.slice(0, 1)}.${data.piValue.slice(1)}`;
            console.log('Pi Value:', data.piValue);
        })
        .catch(error => {
            console.error('Error fetching pi value:', error);
            document.getElementById('numbers').textContent = 'Error fetching data for more than 1000 digits';
        });
});
