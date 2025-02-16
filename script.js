// Navigation functions
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[onclick*="${sectionId}"]`).classList.add('active');
    document.querySelector('.page-title').textContent = sectionId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Tab switching function
function switchTab(tabElement, contentId) {
    tabElement.parentElement.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    tabElement.classList.add('active');
    tabElement.closest('.content-section').querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
}

// Fetch decoy statistics with mock data
async function fetchDecoyStatistics() {
    // Mock data for testing
    const data = { realism: 99 };
    document.querySelector('#decoy-realism').textContent = data.realism + '%';
}

// Initialize charts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetchDecoyStatistics();
    
    // Decoy Generation Chart
    const decoyGenerationCtx = document.getElementById('decoyGenerationChart').getContext('2d');
    new Chart(decoyGenerationCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Decoys Generated',
                data: [120, 150, 180, 220, 250, 300],
                borderColor: 'rgba(52, 152, 219, 1)',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: false }
            }
        }
    });
    
    // Attack Pattern Chart
    const attackPatternCtx = document.getElementById('attackPatternChart').getContext('2d');
    new Chart(attackPatternCtx, {
        type: 'pie',
        data: {
            labels: ['Brute Force', 'Credential Stuffing', 'Phishing', 'Social Engineering', 'Other'],
            datasets: [{
                data: [25, 40, 15, 10, 10],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(149, 165, 166, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(230, 126, 34, 1)',
                    'rgba(149, 165, 166, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'right' } }
        }
    });
    
    // Behavior Analysis Chart
    const behaviorCtx = document.getElementById('behaviorChart').getContext('2d');
    new Chart(behaviorCtx, {
        type: 'bar',
        data: {
            labels: ['Normal', 'Suspicious', 'Malicious'],
            datasets: [{
                label: 'Behavior Patterns',
                data: [70, 20, 10],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(231, 76, 60, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(230, 126, 34, 1)',
                    'rgba(231, 76, 60, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });
    
    // Behavior Anomaly Chart
    const behaviorAnomalyCtx = document.getElementById('behaviorAnomalyChart').getContext('2d');
    new Chart(behaviorAnomalyCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Detected Anomalies',
                data: [5, 8, 12, 7, 15, 10],
                borderColor: 'rgba(231, 76, 60, 1)',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: false }
            }
        }
    });
    
    // Anomaly Type Chart
    const anomalyTypeCtx = document.getElementById('anomalyTypeChart').getContext('2d');
    new Chart(anomalyTypeCtx, {
        type: 'doughnut',
        data: {
            labels: ['Credential Theft', 'Brute Force', 'Suspicious Login', 'Unusual Access Pattern', 'Other'],
            datasets: [{
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(149, 165, 166, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(230, 126, 34, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(149, 165, 166, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'right' } }
        }
    });
});

// Decoy Generation Form Submission Handling
document.addEventListener('DOMContentLoaded', function() {
    const generateForm = document.querySelector('#generate-decoys form');
    if (generateForm) {
        generateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const numDecoys = document.getElementById('num-decoys').value;
            const profile = document.getElementById('decoy-profile').value;
            const complexity = document.getElementById('complexity').value;
            const expiration = document.getElementById('expiration').value;
            generateDecoys(numDecoys, profile, complexity, expiration);
        });
    }
    
    // Settings Form Submission
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveSettings();
        });
    }
});

// Generate decoys with mock implementation
async function generateDecoys(numDecoys, profile, complexity, expiration) {
    console.log(`Generating ${numDecoys} decoys with profile ${profile}, complexity ${complexity}, and expiration ${expiration}`);
    alert(`Successfully generated ${numDecoys} decoys!`);
}

// Save settings function 
function saveSettings() {
    const frequency = document.getElementById('decoy-frequency').value;
    const threshold = document.getElementById('anomaly-threshold').value;
    const email = document.getElementById('notification-email').value;
    const maxDecoys = document.getElementById('max-decoys').value;
    
    console.log(`Saving settings: frequency=${frequency}, threshold=${threshold}, email=${email}, maxDecoys=${maxDecoys}`);
    alert('Settings saved successfully!');
}