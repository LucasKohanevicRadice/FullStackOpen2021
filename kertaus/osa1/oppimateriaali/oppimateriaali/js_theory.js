//  Taulukot ja muutama esimerkki niitten käytöstä:

const taulukko = [1, -1, 3]

console.log(taulukko.length)
console.log(taulukko[1]) 

taulukko.push(5) // Lisää numeron 5 taulukon loppuun, huomaa että taulukon sisältöä voi muuttaa, koska taulukko on olio.

console.log(taulukko)

console.log()

console.log("For each funktio:")
taulukko.forEach(arvo => {
    console.log(arvo)
})

// Reactin yhteydessä sovelletaan usein funktionaalisen ohjelmoinnnin piirteitä, jonka eräs tekniikka on käyttää muuttummattomia (immutable) tietorakenteita.
// React koodissa sen takia suositellaankin usein käytettäväksi funktiota concat, joka ei lisää alkioita alkuperäiseen taulukkoon
// Concat luo uuden taulukon, johon on lisätty concatissa määritelty datan palanen.

console.log(`alkuperäinen taulukko: [${taulukko}]`)

const taulukko2 = taulukko.concat(125)

console.log(`concatilla luotu taulukko: [${taulukko2}]`)
console.log()

// Map - metodi:

let t3 = [1,2,3]

const mapped = t3.map(arvo => arvo *2)

console.log(`Alkuperäinen t3: ${t3}`)
console.log(`mäpätty t3: ${mapped}`)

// Map voi muuttaa taulukon myös täysin erilaiseen muotoon:

const m2 = t3.map(value => '<li>' + value + '</li>')
console.log(`mapilla luotua html koodia: ${m2}`)

// Taulukon yksittäisi alkioita on helppo sijoittaa muuttujiin destrukturoivan sijoitsulauseen avulla:

const t = [1,2,3,4,5]

const [first, second, ...rest] = t

console.log(`
Destrukturoituja alkioita: \n
console.log(first) => ${first} \n
console.log(second) => ${second} \n
console.log(rest) => ${rest}
`)

// Oliot

// JavaScriptissä on muutama tapa määritellä olioita. Erittäin yleisesti käytetään olioliteraaleja,
// eli määritellään olio luettelemalla sen kentät aaltosulkeiden sisään. (python sanakirjamaisesti)

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
  }
  
  const object12 = {
    name: 'Full Stack -websovelluskehitys',
    level: 'aineopinto',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Juha',
      last: 'Tauriainen',
    },
    grades: [2, 3, 5, 3],
    department: 'TKTL',
  }


//   Kenttien arvot voivat olla tyypiltään mitä vaan: lukuja, merkkijonoja, taulukoita, olioita..
// Olioiden kenttiin viitataan pistenotaatiolla tai hakasulkeilla:

console.log(`object1.name: ${object1.name}`)
console.log(`object1["name"]: ${object1["name"]}`)
console.log(`object1["age"]: ${object1["age"]}`)


// Olioille voidaan myös lisätä kenttiä lennosta pistenotaation tai hakasulkeiden avulla:

object1.address = "tapiola"
object1["secret number"] = 12345

console.log(`Object1 address: ${object1.address}`)
console.log(`Object1["secret address"]: ${object1["secret number"]}`)
console.log()

// Jos oliolle halutaan asettaa arvo jonka nimessä on välimerkki, on silloin aina käytettävä hakasulkeita.

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }
//   ja funktiota kutsutaan kuten olettaa saattaa:
  
  const result = sum(1, 5)
  console.log("Result of sum function: " + result)
//   Jos parametreja on vain yksi, sulut voidaan jättää määrittelystä pois:
  
  const square = p => {
    console.log(p)
    return p * p
  }

  console.log()

//   Jos funktio sisältää ainoastaan yhden lausekkeen, ei aaltosulkeita tarvita. 
// Tällöin funktio palauttaa ainoan lausekkeensa arvon. Eli jos poistetaan konsoliin tulostus, voidaan edellinen funktio ilmaista lyhyemmin seuraavasti:

const square2 = p => p * p
console.log("Result of using the square2 function, where no curly brackets or normal parentheses or return statement is used " + square2(2))
console.log()

// Tämä muoto on erityisen kätevä käsiteltäessä taulukkoja esim. map-metodin avulla:

const tee = [1, 2, 3]
const tSquared = tee.map(p => p * p)
console.log(`tSquared: ${tSquared}`)

// Nuolifunktio on tullut JavaScriptiin vasta muutama vuosi sitten version ES6 myötä. Tätä ennen ainoa tapa funktioiden määrittelyyn oli avainsanan function käyttö.
// Määrittelytapoja on kaksi. Funktiolle voidaan antaa function declaration -tyyppisessä määrittelyssä nimi, jonka avulla funktioon voidaan viitata.

function product(a,b) {
    return a*b
}

console.log("Result of product function, using the classical function declaration:" + product(2,6))

// Toinen tapa on tehdä määrittely funktiolausekkeena. Tällöin funktiolle ei tarvitse antaa nimeä ja määrittely voi sijaita muun koodin seassa.

const average = function(a,b) {
    return (a + b) / 2
}
// Rehellisesti tää tekee siis täysin saman asian ku ylempi, mut vaan pidemmälti?

console.log(`Result of the average function, using the funcction expression ${average(2,4)}`)

// Olioiden metodit ja this

// Nuolifunktiot ja avainsanan function avulla määritellyt funktiot poikkeavat radikaalisti siinä miten ne käyttäytyvät olioon itseensä viittaavan avainsanan this suhteen.
// Voimme liittää oliolle metodeja määrittelemällä niille kenttiä, jotka ovat funktioita:

const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "filosofian tohtori",
    greet: function() {
        console.log("hello, my name is", this.name)
    },
    doAddition: function(a,b) {
      console.log(a + b)
    },
}

console.log()
console.log("Using the greet method of the arto object:")
arto.greet()


// Metodin sisällä voidaan siis viitata olion kenttien arvoihin avainsanan this avulla vastaavasti kuin Javassa. 
// Pythonissa saman asian ajaa avainsana self.
// Metodeja voi lisätä myös olion luomisen jälkeen:

arto.growOlder = function() {
    this.age += 1
  }

  console.log()
  console.log("age variable of object arto: " + arto.age)
  arto.growOlder()
  console.log(`Age variable of object arto, after growOlder using growOlder method: ${arto.age}`)
  console.log(`Using the method doAddition of the arto object:`)
  arto.doAddition(1,5)

  // Jos olion metodeita käytetään viitteen kautta, metodi kadottaa tiedon siitä
  // Mikä alkuperäinen "this" oli.
  // Toisinkuin melkein kaikissa muissa kielissä, thissin määrittyy sen mukaan MITEN metodia on kutsuttu.
  // Kutsuttaessa metodia viitteen kautta, this:n arvoksi tulee globaali objekti, joka muuttaa lopputulosta usein täysin.
  // const viiteAdditioniin = arto.doAddition -> siis kadottaa thissin ja tekee siitä globaalin objektin, sekoittaen lopputuloksen.
  // This voi myös kadota jos objektin metodia kutsuu setTimeout metodia käyttäen.
  // esim. setTimeout(arto.greet, 1000)

  // On useita mekanismeja, joiden avulla alkuperäinen this voidaan säilyttää, eräs näistä on metodin bind käyttö:
  // setTimeout(arto.greet.bind(arto), 1000)
  // Sekunnin päästä tulostuisi "hello, my name is Arto Hellas"
  // Komento arto.greet.bind(arto) luo uuden funktion, 
  // jossa this on sidottu tarkoittamaan Artoa riippumatta siitä, missä ja miten metodia kutsutaan.

  // Nuolifunktioiden avulla on mahdollista ratkaista eräitä this:siin liittyviä ongelmia.
  // Olioiden metodeina niitä ei kuitenkaan kannata käyttää, sillä silloin this ei toimi ollenkaan.
  // Eli jos haluaa luoda olio-metodeita, on käytettävä perinteisiä, vanhempia muotoja funktion määrittelystä.


// Luokat

// Kuten aiemmin mainittiin, JavaScriptissä ei ole olemassa olio-ohjelmointikielten luokkamekanismia.
// JS:Ssä on kuitenkin ominaisuuksia jotka "simuloivat" tätä toiminnallisuutta.
// ES6:n myötä on kuitenkin tullut luokkasyntaksi, jolla pystyy luomaan luokankaltaisia määrittelyitä.
// Alempana on määritelty "luokka" Person ja kaksi Person-oliota:

class Person {

  constructor(name, age) {
    this.name = name
    this.age = age

  }

  greet() {
    console.log("Hello my name is", this.name)
  }

}

console.log()
const lucas = new Person("Lucas Kohanevic", 24)
lucas.greet()

console.log()

const muhku = new Person ("Mohammed Ali", 86)
muhku.greet()

// Syntaksin osalta luodut oliot muistuttavat erittäin paljon esim. Pythonin luokkia.
// Käyttäytymiseltäänkin ne ovat hyvin samanlaisia.
// Luokkasyntaksin tuominen javascriptiin on ollut osaltaan kiistelty tapaus.
// Olioiden todellinen datatyyppi on Object, sillä javascriptissä ei ole muita datatyypejä kuin:
// Boolean, null, Undefined, Number, String, Symbol, BigInt ja Object.
// ES6:n luokkasyntaksia käytetään paljon vanhassa reactissa ja node.js:ssä, sen takia sen osaaminen on paikallaan.
// Tällä kurssilla tosin käytetään vuonna 2019 lisättyä hook-ominaisuutta, joten täläl kurssilla ei ole tarvetta käyttää ollenkaan tätä luokkasyntaksia.







