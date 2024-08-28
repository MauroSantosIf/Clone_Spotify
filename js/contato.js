document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); 
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      
      form.reset();
      Swal.fire({
        title: 'Obrigado!',
        text: 'Entraremos em contato em breve.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    });
  });

  