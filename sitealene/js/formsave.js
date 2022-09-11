document.addEventListener("DOMContentLoaded", function() { 

    document.querySelectorAll('textarea, input').forEach(function(e) {
        if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
        e.addEventListener('input', function() {
            window.sessionStorage.setItem(e.name, e.value);
        })
        if (localStorage.getItem('text') !== null) {
            document.getElementById('descr').value = localStorage.getItem('text');
        }
        document.addEventListener('keyup', function(e) {
            localStorage.setItem('text', document.getElementById('descr').value);
        });
    })

}); 