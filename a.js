fetch('/guests/confirmation.json', {method:'POST', body:'guest[email]=' + encodeURIComponent(new URLSearchParams(location.search).get('email').replace(' ', '+'))}
