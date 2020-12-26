export function getDiffYear(year) {
 return new Date().getFullYear() - year;
}

export function getMarcaPage(marca) {
 switch (marca) {
  case "europeo":
   return 1.15;
  case "americano":
   return 1.3;
  case "asiatico":
   return 1.05;
 }

 return 1;
}

export function getSeguro(plan) {
 return plan === "basico" ? 1.2 : 1.5;
}

export function upperCaseFirst(texto) {
 return texto.charAt(0).toUpperCase() + texto.slice(1);
}
