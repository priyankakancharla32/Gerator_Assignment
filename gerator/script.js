document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
  
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value;
      if (searchTerm) {
        alert("Searching for: " + searchTerm);
      } else {
        alert("Please enter a search term.");
      }
    });
  });
  