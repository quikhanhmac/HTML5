var duree=0, pas=0, enPause = false, compteur=0;
onmessage = function (eventData) {
    var command = eventData.data.command;
    switch (command) {
        case 'init':
            duree = eventData.data.valeurs.duree;
            pas = eventData.data.valeurs.pas;
            break;
        case 'pause':
            enPause = !enPause;
            compte();
            break;
    }
}
function compte() {
    compteur += pas;
    if (!enPause) setTimeout('compte()', duree);
    postMessage(compteur);
}
compte();