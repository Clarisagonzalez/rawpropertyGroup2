document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            name: 'Miami Getaway',
            location: 'Miami, FL',
            imageUrl: 'images/bldg.png',
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
            ],
            link: "property1.html",
            imageName: 'images/miami_getaway.png'
        },
        {
            name: 'Two Story Miami Gem',
            location: 'Miami Beach, FL',
            imageUrl: 'images/getaway1.webp',
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
            ],
            link: "property2.html",
            imageName: 'images/TwoStory.png'
        }
    ];

    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = ''; 
    properties.forEach((property, propertyIndex) => {
        const carouselId = `carousel-${propertyIndex}`;
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-4');
        propertyDiv.innerHTML = `
            <div class="card">
                <a href="${property.link}" class="property">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img src="${property.imageName}" alt="${property.name}" class="d-block w-100">
                        </h5>
                    </div>
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
                    <div class="card-body">
                        <p class="card-text">Location: ${property.location}</p>
                        ${property.available ? `<p class="card-text">Available: ${property.available}</p>` : ''}
                        ${property.description ? `<p class="card-text">${property.description}</p>` : ''}
                    </div>
                </a>
            </div>
        `;
        propertyList.appendChild(propertyDiv);
    });
});
