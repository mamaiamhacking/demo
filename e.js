fetch('/guests', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'_method=put&guest[email]=' + encodeURIComponent(new URLSearchParams(decodeURIComponent(new URLSearchParams(location.search).get('configs'))).get('email').replace(' ', '+'))}).then(()=>window.close()).catch(()=>window.close());