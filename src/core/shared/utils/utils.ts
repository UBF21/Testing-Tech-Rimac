/**
 * Calcula la edad de una persona a partir de su fecha de nacimiento.
 * @param birthDate - La fecha de nacimiento en formato 'YYYY-MM-DD'.
 * @returns La edad de la persona en años.
 */
export const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
};

/**
 * Calcula el precio con un descuento del 5%.
 * @param originalPrice - El precio original del plan.
 * @returns El precio después de aplicar el descuento del 5%.
 */
export const calculateDiscountedPrice = (originalPrice: number): number => {
    const discount = 0.05; // 5% discount
    const discountedPrice = originalPrice * (1 - discount);
    return parseFloat(discountedPrice.toFixed(2)); // Return the price rounded to 2 decimal places
};