interface Player {
    name: string,
    club: string,
    salary: number,
    married?: boolean,
    preClub?: string[]
};

const messi: Player = {
    name: "Leonal Messi",
    club: "PSG",
    salary: 34623654,
    married: true,
    preClub: ["Barcalona"]
}

const neymar: Player = {
    name: "Neymar Jr",
    club: "PSG",
    salary: 23543542,
    preClub: ["Barcalona"]
}

const ronaldo: Player = {
    name: "Cristiano Ronaldo",
    club: "Manchaster City",
    salary: 37543654,
    married: true,
    preClub: ["Real Madrid", "Jubentas"]
}

interface Employee {
    name: string,
    designation: string,
    salary: number
}

interface Developer extends Employee {
    language: string[],
    codeEditor: string
}

const riad: Developer = {
    language: ["JavaScript", "TypeScript", "React"],
    codeEditor: "VS Code",
    name: "Riad Abdur Rahman",
    designation: "Software Developer",
    salary: 2300000
}