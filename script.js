fetch('http://localhost:3000/reviews')
  .then(response => response.json())
  .then(data => {
    if (data.status === 'OK') {
      const reviews = data;
      reviews.forEach(review => {
        console.log('Author:', review.author_name);
        console.log('Rating:', review.rating);
        console.log('Text:', review.text);
        console.log('-------------------');
      });
    } else {
      console.log('Error fetching data:', data.status);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

