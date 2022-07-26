// > AULA 07 - TYPESCRIPT II & HIGH ORDER FUNCTIONS

// - enum

enum Role {
  STUDENT,
  TEACHER,
  COORDINATOR,
}

interface Person {
  name: string;
  age: number;
  height: number;
  role: Role;
}

const pessoa: Person = {
  name: "Walisson",
  age: 26,
  height: 1.77,
  role: Role.STUDENT,
};

function addPerson(person?: Partial<Person>) {
  const name = person?.name ?? "Default name";
}

addPerson({ name: "Walisson" });

interface ExampleRequired {
  a?: number;
  b?: string;
}

const objeto: Required<ExampleRequired> = { a: 10, b: "11" };

// - Record

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

// Record<CatName, CatInfo>

interface RecordType {
  miffy: CatInfo;
  boris: CatInfo;
  mordred: CatInfo;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

type MainPerson = Pick<Person, "name" | "age">;

const mainPersonInfo: MainPerson = {
  name: "Nome",
  age: 10,
};

type PersonWithoutRole = Omit<Person, "role">;

const outraPessoa: PersonWithoutRole = {
  name: "",
  age: 1,
  height: 1.5,
};
