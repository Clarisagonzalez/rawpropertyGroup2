document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        { name: 'Cozy Cottage', location: '123 Maple St', available: 'Yes' },
        { name: 'Downtown Apartment', location: '456 Elm St', available: 'No' },
        { name: 'Suburban Home', location: '789 Oak St', available: 'Yes' }
    ];

    const propertyList = document.getElementById('property-list');

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.innerHTML = `
            <h2>${property.name}</h2>
            <p>Location: ${property.location}</p>
            <p>Available: ${property.available}</p>
        `;
        propertyList.appendChild(propertyDiv);
    });
});
