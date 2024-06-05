// Select all elements with the class 'btn'
const buttons = document.querySelectorAll('.btn');

// Use a for loop to iterate over the buttons
for (let i = 0; i < buttons.length; i++){
    const button = buttons[i];
// Select the 'open' and 'close' icons within the button
    const openIcon = button.querySelector('.open');
    const closeIcon = button.querySelector('.close');
     // Select the answer element that is the next sibling of the parent .question_Answer
    const answer = button.parentNode.querySelector('.answer');

     // Add a click event listener to the button
    button.addEventListener('click', function () {

        const isOpen = answer.style.display === 'block';

        if (isOpen){ // If the answer is open, hide the answer and show the 'open' icon
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            answer.style.display = 'none';
        } else {// If the answer is hidden, show the answer and display the 'close' icon
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            answer.style.display = 'block';
        }
    });
};
