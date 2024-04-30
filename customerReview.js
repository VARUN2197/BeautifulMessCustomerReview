document.addEventListener('DOMContentLoaded', () => {

    const reviewsContainer = document.getElementById('reviews-container');

    const mockReviews = [
    {
        name: 'John Doe',
        rating: 4,
        comment: 'Great food! It exceeded my expectations.'
    },
    {
        name: 'Jane Smith',
        rating: 5,
        comment: 'Excellent service. Will definitely come again!'
    },
    {
        name: 'Sam Johnson',
        rating: 3,
        comment: 'Amazing experience.  Food and services are great.'
    },
    {
        name: 'Emily Brown',
        rating: 5,
        comment: 'Absolutely love it. Fast service and great quality.'
    }
    // Add more review objects as needed...
    ];

    // Function to fetch a specific number of unique reviews
    function fetchReviewsData(numReviews = 1) {
        const apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJAQDAttYLxkcRIrFRzxtbtMQ&key=AIzaSyDVQxparNClDKwkS4g-K2i5qK7Z-KlNmyI'; // Replace with your API endpoint
        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch reviews');
                }
                return response.json();
            })
            .then(data => {
                // Extract a specific number of reviews
                const reviews = data.slice(0, numReviews);
                return reviews;
            });
    }

    // Define the getReviews function as before
    function getReviews(reviews) {
        const reviewsContainer = document.getElementById('reviews-container');

        // Clear existing reviews in the container
        reviewsContainer.innerHTML = '';

        reviews.forEach((review) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');

            const ratingStars = '⭐️'.repeat(review.rating);

            reviewDiv.innerHTML = `
                <h1 style="text-align: center;"><q> ${review.comment} </q></h1>
                <h4 style="float: right;">${review.name}</h4>
            `;

            reviewsContainer.appendChild(reviewDiv); // Append new review to the container
        });
    }

    // Function to update reviews every 5 seconds
    function updateReviewsPeriodically() {
        fetchReviewsData(1) // Fetch 3 unique reviews
            .then(reviews => {
                getReviews(reviews);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }

    // Call updateReviewsPeriodically initially and then every 5 seconds
    updateReviewsPeriodically(); // Call immediately upon page load
    setInterval(updateReviewsPeriodically, 3000);
});

