interface Iemail {
  kommun: string;
  //bolag: string | null | undefined,
  //namn: string | null | undefined
}
export const email = (kommun: /*, bolag, namn*/ string) => {
  return `
Hej!
Jag jobbar på ett företag som heter Techzum. 
Vi kontaktar er då vi har fått i uppdrag att driva en digital kampanj i ${kommun} kommun den här sommaren. Kampanjen går ut på att vi ska hitta flera företag som kan tänka sig att marknadsföras tillsammans och därmed få en större räckvidd på kampanjerna.

Vi kommer att sätta upp kampanjen med fem platser per kampanj, så att fem olika företags budgetar läggs ihop till en och ger 5 gånger så stor räckvidd på kampanjerna.

Varje plats i kampanjen kostar 5000kr exkl. moms och kommer totalt leda till 125 000 gemensamma visningar. I vanliga fall så skulle man få 25 000 visningar med budgeten 5000kr, men när vi sätter upp kampanjen gemensamt med 5 olika företag leder det även till 5 gånger så många visningar.

Vi erbjuder även erat företag 50% rabatt på en egen digital annons med valfri budget där vi hjälper till med allt.

För att vara med i kampanjerna så behöver ert företag ha en webbsida. Om ni inte har någon webbsida eller är i behov av en uppfräschning av er webbsida så erbjuder vi även oss att hjälpa till med detta med upp till 20% rabatt!

(PS, vi kan hjälpa er med webbsidor oavsett om ni är med i kampanjen eller inte!)

Mer information och priser på webbsidor hittar ni i den bifogade pdf-en nedan.
`;
};
