document.addEventListener('DOMContentLoaded', () => {

    const reviewsContainer = document.getElementById('reviews-container');
   
    const mockReviews = [
    {
        name: 'John Doe',
        rating: 4,
        comment: 'Will definetely recommend this'
    },
    {
        name: 'Jane Smith',
        rating: 5,
        comment: 'Excellent service. Will come again!'
    },
    {
        name: 'Sam Johnson',
        rating: 3,
        comment: 'Amazing menu and service'
    },
    {
        name: 'Emily Brown',
        rating: 5,
        comment: 'Absolutely love it. Great Staff.'
    },
    {
        name: 'Alex Chen',
        rating: 4,
        comment: 'Good food'
    }
];

function fetchReviewsData(numReviews = 3) {
	const uniqueReviews = [];
  const reviewIndices = new Set();

  while (uniqueReviews.length < numReviews && reviewIndices.size < mockReviews.length) {
       const randomIndex = Math.floor(Math.random() * mockReviews.length);
       if (!reviewIndices.has(randomIndex)) {
                reviewIndices.add(randomIndex);
           uniqueReviews.push(mockReviews[randomIndex]);
       }
  }
  return uniqueReviews;
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
            <h3>${review.comment}</h3>
            <h5>${review.name}</h5>
            <div>${ratingStars}</div>
        `;

        reviewsContainer.appendChild(reviewDiv); // Append new review to the container
    });
}

// Function to update reviews every 5 seconds
function updateReviewsPeriodically() {
		var reviews = fetchReviewsData(3); // Fetch 3 unique reviews
    getReviews(reviews);
}

// Call updateReviewsPeriodically initially and then every 5 seconds
updateReviewsPeriodically(); // Call immediately upon page load
setInterval(updateReviewsPeriodically, 5000); // 
    
    
});
