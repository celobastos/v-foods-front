export default interface Colaborador{
    id: string | number | null,
    managerId: string | number | null,
    name: string,
    email: string,
    cellphone: string
    imgUrl: string,
    dateBirth: string,
    address: string;
}