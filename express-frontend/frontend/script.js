const API_URL = undefined || 'http://localhost:5000';
console.log('Backend URL:', API_URL);


async function loadServices() {
    const loadingSpinner = document.getElementById('loadingSpinner');
    const servicesContainer = document.getElementById('servicesContainer');
    const emptyState = document.getElementById('emptyState');
    const errorState = document.getElementById('errorState');
    const errorMessage = document.getElementById('errorMessage');

    loadingSpinner.style.display = 'block';
    servicesContainer.innerHTML = '';
    emptyState.style.display = 'none';
    errorState.style.display = 'none';

    try {
        const response = await fetch(`${API_URL}/api/services`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const services = await response.json();

        loadingSpinner.style.display = 'none';

        if (services.length === 0) {
            emptyState.style.display = 'block';
        } else {
            services.forEach(service => {
                const serviceCard = createServiceCard(service);
                servicesContainer.innerHTML += serviceCard;
            });
        }
    } catch (error) {
        loadingSpinner.style.display = 'none';
        errorState.style.display = 'block';
        errorMessage.textContent = `Could not load services. Make sure Flask API is running on port 5000. Error: ${error.message}`;
        console.error('Error loading services:', error);
    }
}

function createServiceCard(service) {
    const createdDate = service.created_at ? new Date(service.created_at).toLocaleDateString() : 'N/A';

    return `
        <div class="col-md-6 col-lg-4">
            <div class="service-card">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="mb-0">${escapeHtml(service.name)}</h5>
                    <span class="badge badge-aws">AWS</span>
                </div>
                <p class="text-muted small mb-2">
                    <i class="bi bi-calendar"></i> Added: ${createdDate}
                </p>
                <p class="mb-0">${escapeHtml(service.description)}</p>
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

document.addEventListener('DOMContentLoaded', function() {
    loadServices();
});
