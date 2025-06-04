var agora = new Date()
var h = agora.getHours()
var res = document.getElementById ('div#tx')
res.innerHTML = `<p>Agora são ${h} horas.</p>`