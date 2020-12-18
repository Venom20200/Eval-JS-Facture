var clients = [];

function Clients(nomSociete, nom, rue, codePostal, tel) {
    this.nomSociete = nomSociete,
    this.nom = nom,
    this.rue = rue,
    this.codePostal = codePostal,
    this.tel = tel
}

var client1 = new Clients("NetScape 2.0", "Robert", "44 rue de la michetoneuse", 78300, 01-42-55-00-20);
var client2 = new Clients("StarCraft Unity", "José", "56 rue de la coudoire", 93200, 01-20-33-50-39);
var client3 = new Clients("Godus", "Alicia", "56 rue de buvette", 78800, 01-60-89-17-30);

clients.push(client1, client2, client3);

console.log(clients)


// PARTIE TABLEAU


var produits = [];

function Produits(nom, prix, quantite, montant) {
    this.nom = nom,
    this.prix = prix,
    this.quantite = quantite,
    this.montant = montant
}

var produit1 = new Produits("Télé", 150, 149, 148);
var produit2 = new Produits("PC", 1200);
var produit3 = new Produits("chargeur", 15);
var produit4 = new Produits("paire de chaussette", 5);

produits.push(produit1, produit2, produit3, produit4);



function afficher() {
    document.getElementById("libelle").innerHTML = produit1.nom;
    document.getElementById("prixUnitaire").innerHTML = produit1.prix;
}


 function afficher1() {
    document.getElementById("libelle1").innerHTML = produit2.nom;
    document.getElementById("prixUnitaire1").innerHTML = produit2.prix;
 }

 function afficher2() {
    document.getElementById("libelle2").innerHTML = produit3.nom;
    document.getElementById("prixUnitaire2").innerHTML = produit3.prix;
 }

 function afficher3() {
    document.getElementById("libelle3").innerHTML = produit4.nom;
    document.getElementById("prixUnitaire3").innerHTML = produit4.prix;
 }











// var prix = 0;

// if (prix > 1000) {
//     document.getElementById("remise");
//     document.write("N.B Votre facture a dépassé 1000€, vous avez obtenu pour votre prochaine facture une remise de : 140.4€ représentant 5% de votre commande ci-dessus")
// }


// document.getElementById("prod2").addEventListener("click", produit1);
//  document.getElementById("libelle").addEventListener("click", libelle);


//  function libelle() {
//      document.write("Chaussette");
// };