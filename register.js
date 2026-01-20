$(function(){
  $('#signupForm').on('submit', function(e){
    e.preventDefault();
    const email = $('#email').val().trim();
    if(!email){
      alert('Please enter an email.');
      return;
    }

   
    localStorage.setItem('userLoggedIn', 'true');

    
    const pending = sessionStorage.getItem('pendingReservation');
    if(pending){
      const reservation = JSON.parse(pending);
      sessionStorage.removeItem('pendingReservation');
      window.location.href = 'booking-confirmation.html';
    } else {
      window.location.href = 'index.html';
    }
  });
});