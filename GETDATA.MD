HÄMTA NAMN PÅ BOLAG (ALLABOLAG)
let companyNumber;

let companyData = new Array();
let companyNames = document.querySelectorAll(".tw-my-2 > article > div > div.search-results\_\_item.tw-flex-1 > .tw-flex > h2 > a")

for (companyNumber = 0; companyNumber < companyNames.length; companyNumber++) {
let companyName = companyNames[companyNumber].firstChild.textContent
companyData.push(companyName)
}
console.log(companyData)

HÄMTA ORG.NUMMER PÅ BOLAG (ALLABOLAG)
let companyNumber;

let companyOrgNumberData = new Array();
let companyOrgNumbers = document.querySelectorAll(".tw-my-2 > article > div > div.search-results\_\_item.tw-flex-1 > dl > dd:nth-child(2)")

for (companyNumber = 0; companyNumber < companyOrgNumbers.length; companyNumber++) {
let companyName = companyOrgNumbers[companyNumber].firstChild.textContent
companyOrgNumberData.push(companyName)
}
console.log(companyOrgNumberData)

HÄMTA VERKSAMHET PÅ BOLAG (ALLABOLAG)
let companyNumber;

let companyOperationData = new Array();
let companyOperations = document.querySelectorAll(".tw-my-2 > article > div > div.search-results\_\_item.tw-flex-1 > dl > dd:nth-child(4)")

for (companyNumber = 0; companyNumber < companyOperations.length; companyNumber++) {
let companyOperation = companyOperations[companyNumber].firstChild.textContent
companyOperationData.push(companyOperation)
}
console.log(companyOperationData)

kommuner: {
ale: {
name: ale,
bolag: {
aleBygg_AB: {
name: aleBygg_AB,
orgNr: 123455678-3333,
email: alebygg@alebygg.se,
phone: 072-2345678,
linkedIn: aleBygg,
webbsida: alebygg.se | null
status: "pågående" | "nekad" | "godkänd" | "ej svarat"
}
aleMat_AB: {
name: aleMat_AB,
orgNr: 123455678-3333,
email: aleMat@alemat.se,
phone: 072-2345678,
linkedIn: aleMat,
webbsida: alemat.se | null
status: "pågående" | "nekad" | "godkänd" | "ej svarat"
}
}
}
alingsås: {
name: Alingsås,
bolag: {
alingsåsBygg_AB: {
name: AlinsåsBygg_AB,
orgNr: 123455678-3333,
email: alebygg@alebygg.se,
phone: 072-2345678,
linkedIn: aleBygg,
webbsida: alebygg.se | null
status: "pågående" | "nekad" | "godkänd" | "ej svarat"
}
aleMat_AB: {
name: aleMat_AB,
orgNr: 123455678-3333,
email: aleMat@alemat.se,
phone: 072-2345678,
linkedIn: aleMat,
webbsida: alemat.se | null
status: "pågående" | "nekad" | "godkänd" | "ej svarat"
}
}
}
}
