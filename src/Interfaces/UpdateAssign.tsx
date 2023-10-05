export default interface UpdateAssign {
    where: {
        month: number,
        year: number,
        colaboratorId: number,
        indicatorId: number,
    },
	changes: {
        meta: number,
        superMeta: number,
        challenge: number,
        result: number,
        weight: number
    },
}