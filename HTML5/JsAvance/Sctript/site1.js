//function Personne(nom, prenom) {
var Personne = function (nom, prenom) {this.nom = nom;this.prenom = prenom;this.NomComplet = function () { return this.nom + " " + this.prenom }}

function go() {
    var p1 = new Personne("Philippe", "Gerald");
    p1.taille = 180;
    var p2 = new Personne("Jugnot", "Gerald");
    var p3 = new Personne("Depardieu", "Gerald");

    //prototype(extention de la classe)
    Personne.prototype = {
        adress: "",
        toString: function () { return this.nom + " " + this.prenom }
    };
    p4 = new Personne("Philippe", "Gerald");

    //Encapsulation
    var Maison = function (id, nom) {
        this.id = id;
        this.nom = nom;
        var code;
        this.getCode = function () { return code; }
        this.setCode = function (val) { code = val; }
    }
    var m1 = new Maison();
    m1.setCode("12345");

    //Heritage
    var Etudiant = function (id, nom, prenom, cursus) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.cursus = cursus;
    }
    Etudiant.prototype = new Personne();
    Etudiant.prototype.constructor = Etuadiant;
    var jim = new Etudiant(1, "Carrey", "Jim", "Peo.Net");

    //Methode d'extention
    var Point = function (x, y) { this.x = x; this.y = y; }
    Point.prototype.Moveby = function (deltaX, deltaY) { this.x += deltaX; this.y += deltaY; }
    var point1 = new Point(10, 200);
    point1.Moveby(10, 20);
    function SetColor(color, transparence) { this.color = color; this.transparence = transparence; }
    //point1.SetColor("red");
    SetColor.apply(point1, ["red", 0.5]);

    //Affichage
    document.getElementById("text1").innerHTML =
        "<ul>" +
        "< li > " + p1.nomComplet() + "</li > " +
        "<li>" + p2.nomComplet() + "</li>" +
        "<li>" + p3.nomComplet() + "</li>" +
        "<li>" + p4.toString() + "</li>" +
        "</ul>"
    "<ul><li>" + m1.getCode() + "</li></ul>";
    "<ul><li>" + jim.toString() + " " + " " + jim.cursus + "</li></ul>";
}