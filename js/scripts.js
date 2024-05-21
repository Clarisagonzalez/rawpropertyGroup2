document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        { name: 'Miami Getaway',
         location: 'Miami, FL',
          available: 'Yes' ,
         imagesUrl: 'images/bldg.png' ,
         description: 'Modern apartment perfect for vacationing' ,
         images: [
            'images/bldg.png',
            'images/br 1.png',
            'images/br 2.png',
            'images/br 3.png',
            'images/kitchen 1.png',
            'images/kitchen 2.png',
            'images/kitchen 3.png',
            'images/living 1.png',
            'images/living 2.png',
            'images/living 3.png',
            'images/room 1.png',
            'images/room 2.png',
            'images/room 3.png',
            'images/room 4.png'
        ]
    },
    {
        name: '2 Story Miami Gem',
        location: 'Miami Beach, FL',
        available: 'Yes',
        imageUrl: 'images/getway1.webp',
        description: 'A beautiful two-story house located in the heart of Miami.',
    
        images: [
            'images/getaway1.webp',
            'images/getaway2.webp',
            'images/getaway3.webp',
            'images/getaway4.webp',
            'images/getaway5.webp',
            'images/getaway6.webp',
            'images/getaway7.webp',
            'images/getaway8.webp',
            'images/getaway9.webp',
            'images/getaway10.webp',
            'images/getaway11.webp'
        ]

    }
    ];

    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = ''; // Clear the existing content

        properties.forEach(property => {
            const carouselId = `carousel-${property.name.replace(/\s+/g, '-').toLowerCase()}`;
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property');
            propertyDiv.innerHTML = `
                <h2>${property.name}</h2>
                <p>Location: ${property.location}</p>
                <p>Available: ${property.available}</p>
                <p>${property.description}</p>
                <div id="${carouselId}" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    ${property.images.map((_, index) => `
                        <li data-target="#${carouselId}" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>
                    `).join('')}
                </ol>
                <div class="carousel-inner">
                    ${property.images.map((image, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${image}" class="d-block w-100" alt="${property.name}">
                        </div>
                    `).join('')}
                </div>
                <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        `;
        propertyList.appendChild(propertyDiv);
    });
});
