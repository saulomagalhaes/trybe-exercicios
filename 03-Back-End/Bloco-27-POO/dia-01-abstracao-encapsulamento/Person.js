"use strict";
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this.validateName(name);
        this._name = name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }
    validateName(name) {
        if (name.length < 3) {
            throw new Error("O nome deve conter no mínimo 3 caracteres.");
        }
    }
    validateBirthDate(birthDate) {
        if (birthDate.getTime() > new Date().getTime())
            throw new Error("A data de nascimento não pode ser uma data no futuro.");
        if (this.getAge(birthDate) > 120)
            throw new Error("A idade deve ser menor do que 120 anos");
    }
}

const saulo = new Person("Saulo", new Date(1994, 5, 11));
console.log(saulo._birthDate);