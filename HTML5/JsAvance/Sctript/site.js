function go() {
    var p1 = new Object();
    p1.nom = "Philippe";
    p1.prenom = "Gérald";
    p1.nomComplet = function () { return this.nom + " " + this.prenom };

    var p2 = {};
    p1.nom = "Jugnot";
    p1.prenom = "Gérald";
    p1.nomComplet = function () { return this.nom + " " + this.prenom };
    //Json
    var p3 = {
        nom: "Depardieu",
        prenom: "Gérald",
        nomComplet: function () { return this.nom + " " + this.prenom }
    };

    var ps = [p1, p2, p3];
    document.getElementById("text1").innerHTML =
        "<ul>" +
        "<li> " + ps[0].nomComplet() + "</li> " +
        "<li>" + p2.nomComplet() + "</li>" +
        "<li>" + p3.nomComplet() + "</li>" +
        "</ul>";
}