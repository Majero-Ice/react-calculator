export const isNum = (num:string):boolean => {
    return !!num === /\d/.test(num);
}