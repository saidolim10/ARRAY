let names = [ "olma", "Gilos", "Uzum", "Nok"]
console.log();
alert(`Boshlanishida arryyning uzunligi: ${names.length}`)

let conf = confirm(`Sizning arryingizdan malumot olib tashlamoqchimisiz?`)

if (conf) {
    names.pop(3)
    alert(`Arryning uzunligi ${names.length}`) 
}
else{
    alert(`Arryning uzunligi ${names.length}`) 
}
console.log(names);