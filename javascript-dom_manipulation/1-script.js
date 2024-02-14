<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Text Color</title>
</head>
<body>
  <header id="header">Header</header>
  <button id="red_header">Click to Change Color</button>

  <script>
    // Select the button with id red_header
    const button = document.getElementById('red_header');
    
    // Add event listener for click event
    button.addEventListener('click', function() {
      // Select the header element
      const header = document.getElementById('header');
      
      // Update text color to red
      header.style.color = '#FF0000';
    });
  </script>
</body>
</html>

