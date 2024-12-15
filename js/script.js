function showTeam(category) {
    const containers = document.querySelectorAll('.team-container');
    const tabs = document.querySelectorAll('.team-tab');
    containers.forEach(container => container.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(category).classList.add('active');
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}