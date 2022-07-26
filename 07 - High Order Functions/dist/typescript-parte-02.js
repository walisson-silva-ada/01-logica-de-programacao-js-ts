"use strict";
// > AULA 07 - TYPESCRIPT II & HIGH ORDER FUNCTIONS
// - enum
var Role;
(function (Role) {
    Role[Role["STUDENT"] = 0] = "STUDENT";
    Role[Role["TEACHER"] = 1] = "TEACHER";
    Role[Role["COORDINATOR"] = 2] = "COORDINATOR";
})(Role || (Role = {}));
const pessoa = {
    name: "Walisson",
    age: 26,
    height: 1.77,
    role: Role.STUDENT,
};
function addPerson(person) {
    var _a;
    const name = (_a = person === null || person === void 0 ? void 0 : person.name) !== null && _a !== void 0 ? _a : "Default name";
}
addPerson({ name: "Walisson" });
const objeto = { a: 10, b: "11" };
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
const mainPersonInfo = {
    name: "Nome",
    age: 10,
};
const outraPessoa = {
    name: "",
    age: 1,
    height: 1.5,
};
