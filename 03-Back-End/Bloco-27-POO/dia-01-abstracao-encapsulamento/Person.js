"use strict";
class Person {
    constructor(matricula, nome, n1, n2, n3, n4, t1, t2) {
        this.matricula = matricula;
        this.nome = nome;
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.n4 = n4;
        this.t1 = t1;
        this.t2 = t2;
    }
    get media() {
        return (this.n1 + this.n2 + this.n3 + this.n4) / 4;
    }
    get soma() {
        return this.n1 + this.n2 + this.n3 + this.n4;
    }
}
const Saulo = new Person(1, 'Saulo', 10, 10, 10, 5, 10, 10);
console.log(Saulo.soma);
