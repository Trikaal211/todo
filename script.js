let a = document.querySelector('ol');
let b = document.querySelector('#fst');
let c = document.querySelector('input');
let d = document.querySelector('#d');
let u = document.querySelector('#u');
let e = document.querySelector('#bs');
let g = document.querySelector('#ns');
let countdown = document.createElement('span');


// Function to add item in list
function addItem() {
    if (c.value.trim() !== '') {  // Input खाली न हो
        let newi = document.createElement('li');  
        let newp = document.createElement('button');  
        newp.textContent = 'del';
        newp.style.marginLeft = '10px';
        newp.setAttribute('tabindex', '0');  // Tab से फोकस आ सके
        
        newi.textContent = c.value;
        newi.appendChild(newp);  // `li` के अंदर `del` बटन ऐड करता है
        a.appendChild(newi);  // लिस्ट में नया आइटम जोड़ता है
        c.value = '';  // इनपुट बॉक्स खाली कर देता है
        newi.classList.add('slide-in');  // स्लाइड-इन क्लास ऐड
        a.appendChild(newi);  // लिस्ट में नया आइटम जोड़ता है
        setTimeout(() => {
            newi.classList.add('active');
        }, 5);

        countdown.textContent = ' (5)';
        countdown.style.color = 'red';
        let timeLeft = 5;
        let interval = setInterval(function() {
            timeLeft--;
            countdown.textContent = ` (${timeLeft})`;
            if (timeLeft <= 0) {
                clearInterval(interval);
            }
        }, 1000);  

        // del बटन पर क्लिक करने से फोकस और डिलीट
        newp.addEventListener('click', function() {
            newi.remove();
             // इनपुट पर फोकस वापस
        });
        setTimeout(function() {
            newi.remove();
        }, 5000);

        // del बटन पर Enter दबाने से डिलीट हो
        newp.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                newi.remove();
                 // इनपुट पर फोकस वापस
            }
        });
    }
}

// Button click se bhi add hoga
b.addEventListener('click', addItem);

// Enter key press se bhi add hoga
c.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  // Enter key check
        addItem();
    }
});

d.addEventListener('click', function() {
   
    e.remove();  // "BS Content" को हटा देता है
});

u.addEventListener('click', function() {
    g.remove();  // "NS Content" को हटा देता है
});
b.addEventListener('mouseover',function(){
    b.style.backgroundColor = 'blue'
    b.style.transition= 'background-color 0.5s ease'
})
b.addEventListener('mouseout',function(){
    b.style.backgroundColor = ''
     b.style.transition= 'background-color 1s ease'
})

