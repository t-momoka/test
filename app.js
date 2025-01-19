async function showTanukis() {
    const zooId = document.getElementById('zoo-select').value;
    const response = await fetch(`https://test-g5o8.onrender.com/api/tanuki?zoo_id=${zooId}`);
    const tanukis = await response.json();
    const tanukiList = document.getElementById('tanuki-list');
    tanukiList.innerHTML = '';
    tanukis.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t.TANUKI_NAME;
        tanukiList.appendChild(li);
    });
}
