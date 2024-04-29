const dom = 1
const seg = 2
const ter = 3
const qua = 4
const qui = 5
const sex = 6
const sab = 7

let dia = prompt("Digite seu número da sorte")

if ( dia == 1){
    document.write("Domingo: dia 'de la pelota' ");
}else if (dia == 2){
    document.write("Segunda: dia de ler um bom livro");
}else if (dia == 3){
    document.write("Terça: dia de ouvir música");
}else if (dia == 4){
    document.write("Quarta: dia de ler um bom livro");
}else if (dia == 5){
    document.write("Quinta: dia de tomar uma boa taça Quinta de castro");
}else if (dia == 6){
    document.write("Sexta: dia de festa");
}else if (dia == 7){
    document.write("Sábado: piscininha e churrasco");
} else {
    document.write("não indentifica")
}