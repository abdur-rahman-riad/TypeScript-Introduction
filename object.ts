const city: string = 'Feni City';
const fruits: string[] = ['Apple', 'Banana', 'Mango'];

// Way-1
const student: { name: string, age: number } = {
    name: 'Riad Abdur Rahman',
    age: 21
};

// Way-2
type Persion = {
    name: string,
    age: number
};

const engineer: Persion = {
    name: 'Riad Abdur Rahman',
    age: 21
};