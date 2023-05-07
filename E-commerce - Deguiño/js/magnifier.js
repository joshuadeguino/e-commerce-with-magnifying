// Get all images on the page
const allImgs = document.querySelectorAll('img');

// Loop through the images and add event listeners
allImgs.forEach(img => {
  img.addEventListener('mouseover', function(event) {
    // Create magnifying glass element
    const magnify = document.createElement('div');
    magnify.classList.add('magnify');

    // Create magnified image element
    const magnifyImg = document.createElement('img');
    magnifyImg.src = this.src;

    // Append magnified image to magnifying glass element
    magnify.appendChild(magnifyImg);

    // Append magnifying glass to body
    document.body.appendChild(magnify);

    // Set position of magnifying glass to match mouse position
    magnify.style.left = event.pageX + 10 + 'px';
    magnify.style.top = event.pageY + 10 + 'px';
    magnify.style.right = window.innerWidth - event.pageX + 10 + 'px';
    magnify.style.bottom = window.innerHeight - event.pageY + 10 + 'px';

    // Add mousemove event listener to update magnifying glass position
    document.addEventListener('mousemove', function(event) {
      magnify.style.left = event.pageX + 10 + 'px';
      magnify.style.top = event.pageY + 10 + 'px';
      magnify.style.right = window.innerWidth - event.pageX + 10 + 'px';
      magnify.style.bottom = window.innerHeight - event.pageY + 10 + 'px';

      // Update magnified image position based on mouse position
      const imgRect = img.getBoundingClientRect();
      const x = event.pageX - imgRect.left;
      const y = event.pageY - imgRect.top;
      const maxX = imgRect.width - magnify.clientWidth;
      const maxY = imgRect.height - magnify.clientHeight;
      const imgX = (x / imgRect.width) * maxX;
      const imgY = (y / imgRect.height) * maxY;
      magnifyImg.style.left = -imgX + 'px';
      magnifyImg.style.top = -imgY + 'px';
    });
  });

  // Remove magnifying glass element when mouse leaves the image
  img.addEventListener('mouseout', function() {
    const magnify = document.querySelector('.magnify');
    if (magnify) {
      magnify.remove();
    }
  });
});
