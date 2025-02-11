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
    
    const modal = document.createElement('div');
    modal.classList.add('eastereggModal');
    
    modal.innerHTML = `
       <div class="eastereggModal-content">
            <button class="close-modal">&times;</button> 
            <h2>🎉 Congratz!</h2>
            <p>You found the easter egg! You really are 1337!</p>
        </div>
    `;
    document.body.appendChild(modal);
    console.log(modal);
  
    document.addEventListener('keyup', (event) => {
        secretCode += event.key;

        if (secretCode.length > 4) {
            secretCode = secretCode.slice(-4);
        }
        

        if (secretCode === targetCode) {
            modal.classList.add('show');
            secretCode = ''; 
        }
    });
  
     const closeButton = modal.querySelector('.close-modal');
     closeButton.addEventListener('click', () => {
         modal.classList.remove('show');
     });
 
     modal.addEventListener('click', (event) => {
         if (event.target === modal) {
             modal.classList.remove('show');
         }
     });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    firstEasterEgg();
    secondEasterEgg();
  });
  