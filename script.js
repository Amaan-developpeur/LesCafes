// Data for the top 10 cafes in Hyderabad
const cafes = [
    { 
        name: '1. "C\'Lovers', 
        rating: 4.7, 
        image: 'Lesimages/Clover.jpg', 
        about: 'Its a Cafe owned by Feroz, we have to show-up there.', 
        address: 'RTC-X Road, Hyderabad'
    },
    { 
        name: '2. Labonel', 
        rating: 4.5, 
        image: 'Lesimages/Labonel.jpg', 
        about: 'Famous for its handmade chocolates and premium coffee blends.', 
        address: 'Banjara-Hills 242/32-16, Hyderabad'
    },
    { 
        name: '3. Pista House', 
        rating: 4.4, 
        image: 'Lesimages/Pista.jpg', 
        about: 'Specializes in Hyderabadi biryanis and Irani chai.', 
        address: 'Gachibowli,Telecom Nagar Extention, Hyderabad'
    },
    { 
        name: '4. Dunkin Donuts', 
        rating: 4.3, 
        image: 'Lesimages/Dunkin.jpg', 
        about: 'Popular chain serving a variety of donuts and coffee.', 
        address: 'Banjara Hills 55-32/42, Hyderabad'
    },
    { 
        name: '5. The Old Madras Baking Company', 
        rating: 4.2, 
        image: 'Lesimages/Madras.jpg', 
        about: 'Known for its delectable cakes, breads, and artisanal pastries.', 
        address: 'Kompally,Near Madras Colony, Hyderabad'
    },
    { 
        name: '6. Hyatt Hyderabad', 
        rating: 4.2, 
        image: 'Lesimages/Hyatt.jpg', 
        about: 'A luxury hotel with a sophisticated cafe offering global cuisines.', 
        address: 'Gachibowli,Road No:2 , Hyderabad'
    },
    { 
        name: '7. Cascade Radisson', 
        rating: 4.2, 
        image: 'Lesimages/Cascade.jpg', 
        about: 'A chic cafe with a perfect blend of modern and traditional offerings.', 
        address: 'Jublie Hills, Hyderabad'
    },
    { 
        name: '8. Hydrabadi Daawat', 
        rating: 4.1, 
        image: 'Lesimages/Daawat.jpg', 
        about: 'Famous for authentic Hyderabadi biryani and Nawabi delicacies.', 
        address: 'Nampally, Hyderabad'
    },
    { 
        name: '9. Parsi Cafe', 
        rating: 4.1, 
        image: 'Lesimages/Parsi.jpg', 
        about: 'A delightful spot for Parsi delicacies and Irani chai.', 
        address: 'Banjara Hills, Hyderabad'
    },
    { 
        name: '10. Faasos', 
        rating: 4.0, 
        image: 'Lesimages/faasos.jpg', 
        about: 'Famous for its wraps and casual dining experience.', 
        address: 'Gachi Bowli, Hyderabad'
    }
];

// Function to generate the list of cafes
function displayCafes() {
    const cafesListContainer = document.getElementById('cafes-list');

    cafes.forEach(cafe => {
        // Create a div for each cafe
        const cafeDiv = document.createElement('div');
        cafeDiv.classList.add('cafe-item');

        // Create a div for the left side (Cafe Name, Image, Rating)
        const leftDiv = document.createElement('div');
        leftDiv.classList.add('left');

        // Create an h3 element for the cafe name
        const cafeName = document.createElement('h3');
        cafeName.textContent = cafe.name;

        // Create an img element for the cafe image
        const cafeImage = document.createElement('img');
        cafeImage.classList.add('cafe-image');
        cafeImage.src = cafe.image;
        cafeImage.alt = cafe.name;

        // Create a span for the cafe rating
        const cafeRating = document.createElement('span');
        cafeRating.classList.add('rating');
        cafeRating.textContent = `Rating: ${cafe.rating}`;

        // Append name, image, and rating to the left div
        leftDiv.appendChild(cafeName);
        leftDiv.appendChild(cafeImage);
        leftDiv.appendChild(cafeRating);

        // Create a div for the right section (Description and Address)
        const rightDiv = document.createElement('div');
        rightDiv.classList.add('right');

        // Create an "About" section
        const aboutHeading = document.createElement('strong');
        aboutHeading.textContent = 'About:';
        const aboutText = document.createElement('p');
        aboutText.textContent = cafe.about;

        // Create an "Address" section
        const addressHeading = document.createElement('strong', 'em');
        addressHeading.textContent = 'Address:';
        const addressText = document.createElement('p');
        addressText.textContent = cafe.address;

        // Append about and address info to the right div
        rightDiv.appendChild(aboutHeading);
        rightDiv.appendChild(aboutText);
        rightDiv.appendChild(addressHeading);
        rightDiv.appendChild(addressText);

        // Append both left and right divs to the cafe div
        cafeDiv.appendChild(leftDiv);
        cafeDiv.appendChild(rightDiv);

        // Append the cafe div to the cafes list container
        cafesListContainer.appendChild(cafeDiv);
    });
}

// Call the function to display cafes when the page loads
window.onload = displayCafes;
