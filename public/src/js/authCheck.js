//listen to auth status changes
auth.onAuthStateChanged(user => {
    if(user) {
        
        document.getElementById('add-event-form').innerHTML = '<div class="adding-info">Title <input type="text" name="title" placeholder="Title" required>Discription<textarea class="disc-input" type="text" name="disc" placeholder="Write here" required></textarea><button>Add Events</button>      </div>';
       
    } else {
        console.log('user logged out');
        document.getElementById('logout').style.display = 'none';
    }
})



//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (evt) => {
    evt.preventDefault();
    auth.signOut().then(() => {
       
    })
})