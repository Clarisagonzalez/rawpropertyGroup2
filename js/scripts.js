document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        { name: '2 story Miami Gem',
         location: 'Miami, FL',
          available: 'Yes' ,
         imagesUrl: 'images/bldg.png' ,
         description: 'A beautiful two-story house located in the heart of Miami.' 
        }
    ];
// images/bldg.png
    const propertyList = document.getElementById('property-list');

    properties.forEach(property => {
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
        propertyDiv.innerHTML = `
            <h2>${property.name}</h2>
            <p>Location: ${property.location}</p>
            <p>Available: ${property.available}</p>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(propertyDiv);
    });
});
