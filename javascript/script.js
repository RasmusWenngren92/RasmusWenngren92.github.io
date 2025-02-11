const firstEasterEgg = () => {
 
    const copyrightLink = document.querySelector('footer a:first-child');
    
    if (copyrightLink) {
        
        copyrightLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;
        });
    }
  };
  
  const secondEasterEgg = () => {
    let secretCode = '';
    const targetCode = '1337';
    
    // Create modal element
    const modal = document.createElement('div');
    modal.classList.add('eastereggModal');
    
    modal.innerHTML = `
        <h2>🎉 Congratz!</h2>
        <p>You found the easteregg! You really are 1337!</p>
        <button>Close</button>
    `;
    document.body.appendChild(modal);
    console.log(modal);
    // Add keyboard event listener
    document.addEventListener('keyup', (event) => {
        secretCode += event.key;
        console.log("Current code",secretCode);
        // Keep only the last 4 characters
        if (secretCode.length > 4) {
            secretCode = secretCode.slice(-4);
        }
        
        // Check if code matches
        if (secretCode === targetCode) {
            console.log("Code Matched!");
          modal.classList.add('show'); 
            secretCode = ''; // Reset code
        }
    });
  
    // Close modal with fade-out effect
    const button = modal.querySelector('button');
    button.onclick = () => {
        console.log("Closing modal...");
      modal.classList.remove('show'); // Hide with transition
      setTimeout(() => modal.style.display = 'none', 300); // Hide after transition
    };
  };
  
  // Initialize both Easter eggs
  document.addEventListener('DOMContentLoaded', () => {
    firstEasterEgg();
    secondEasterEgg();
  });
  