# Webfejl_FHIR_Media

#### Készítette: Vass Máté

<br>

---

<br>

## Alkalmazás rövid leírása

Az általam választott projekt az FHIR szabvány Media erőforrása, amelyet egy Angular alapú webes alkalmazásban valósítok meg. Az alkalmazás egy orvosok körében használatos, orvosi leleteket kép, videó vagy hang formájában kezelő adatbázis lesz, platformja révén pedig az orvosok akár otthonról a telefonjukról, vagy a munkahelyi számítógépükről is elérhetik az éppen szükséges leleteket.

Az alábbi funkciók érhetőek el az alkalmazásban:

- az orvosoknak be kell jelentkezniük, vendégként nem lehet belépni a rendszerbe
- bejelentkezés után lehetőség van leletek megtekintésére, különböző szűrési feltételek alapján, ezt bármely orvos, ápoló megteheti
- különböző statisztikák is lekérhetőek a leletekről (legfrissebb leletek, legtöbb leletet készítő orvos, különböző formátumok darabszáma)
- az orvosok az általuk készített leleteket felvihetik a rendszerbe
- amennyiben valamely lelet adatait módosítani kellene, arra is van lehetőség
- ha egy lelet feleslegessé válik (a páciens meggyógyul), azt törölni is lehet az adatbázisból (azonban ez jogosultsághoz kötött)