export default function validarIdade(userDate){
    if (!(userDate instanceof Date) || Number.isNaN(userDate.getTime())) {
        return false;
    }

    const today = new Date();
    let age = today.getFullYear() - userDate.getFullYear();
    const monthDiff = today.getMonth() - userDate.getMonth();
    const dayDiff = today.getDate() - userDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age -= 1;
    }

    return age >= 18;
};