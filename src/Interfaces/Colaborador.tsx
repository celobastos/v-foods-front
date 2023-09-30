export default interface Colaborador{
    id: string | number | null,
    teamId: string | number | null,
    name: string,
    address: string,
    email: string,
    cellphone: string
    imgURL: string,
    dateBirth: string,
    CEP: string;
}