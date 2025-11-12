export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidUSPhone(phone: string): boolean {
  const regex =
    /^(?:1[ -]?)?(?:\+1[ -]?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  return regex.test(phone);
}
