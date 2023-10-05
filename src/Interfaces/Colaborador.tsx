export default interface Colaborador{
    id: number,
    managerId: string | number | null,
    name: string,
    email: string,
    cellphone: string
    imgUrl: string,
    dateBirth: string,
    address: string;
}