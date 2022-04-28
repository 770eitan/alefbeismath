const alef = 1
const beis = 2
const gimmel = 3
const dalet = 4
const hei = 5
const vav = 6
const zayin = 7
const ches = 8
const tes = 9
const yud = 10 
const kaf = 20
const lamed = 30
const mem = 40
const nun = 50
const samech = 60
const ayin = 70
const pei = 80
const tzadik = 90
const kuf = 100
const reish = 200
const shin = 300
const taf = 400

const alefM= alef+lamed+pei
const beisM= beis+yud+taf
const gimmelM= gimmel+mem+lamed
const daletM= dalet+lamed+taf
const heiM= hei+alef
const vavM= vav+vav
const zayinM= zayin+yud+nun
const chesM = ches+taf
const tesM = tes+taf
const yudM = yud+vav+dalet
const kafM = kaf+kaf
const lamedM = lamed+mem+dalet
const memM = mem+mem
const nunM = nun+vav+nun
const samechM = samech+mem+kaf
const ayinM = ayin+yud+nun
const peiM = pei+alef
const tzadikM = tzadik+dalet+yud+kuf
const kufM = kuf+vav+kuf
const reishM = reish+shin
const tafM= taf+vav

const alefF= alefM+lamedM+peiM

console.log(alefF, alefM, lamedM,peiM)