const firstEasterEgg = () =>{
  const copyrightLink = document.querySelector('footer a:first-child');
  if(copyrightLink){
    copyrightLink.addEventListener('click', (e) => {
      e.preventDefault();

      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;
    });
  }
};

const secondEasterEgg = () => {
  let secretCode = '';
  const targetCode = '1337';
  
  // Create modal element
  const eastereggModalmodal = document.createElement('div');
  eastereggModalmodal.style.cssText = `
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: var(--color-gray-dark);
      color: var(--color-text);
      padding: var(--space-md);
      border-radius: 5px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
      z-index: 1000;
      font-size: var(--font-size-base);
      border: 2px solid var(--color-accent);
      transition: var(--transition);
  `;
  
  eastereggModal.innerHTML = `
      <h2 >🎉 Grattis!</h2>
      <p >Du hittade ett påskägg! Du är verkligen 1337!</p>
      <button style="
          background-color: var(--color-accent);
          color: var(--color-text);
          border: none;
          padding: var(--space-xs) var(--space-sm);
          cursor: pointer;
          border-radius: 3px;
          font-size: var(--font-size-sm);
          transition: var(--transition);
      " onmouseover="this.style.backgroundColor='var(--color-gray-medium)'"
        onmouseout="this.style.backgroundColor='var(--color-accent)'"
        onclick="this.parentElement.style.display='none'">Stäng</button>
  `;
  document.body.appendChild(eastereggModal);

  // Add keyboard event listener
  document.addEventListener('keyup', (event) => {
      secretCode += event.key;
      
      // Keep only the last 4 characters
      if (secretCode.length > 4) {
          secretCode = secretCode.slice(-4);
      }
      
      // Check if code matches
      if (secretCode === targetCode) {
          eastereggModal.style.display = 'block';
          secretCode = ''; // Reset code
      }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  firstEasterEgg();
  secondEasterEgg();
});