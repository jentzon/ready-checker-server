export const throwOrReturnValue = <T>(value: T, errorMessage: string): T => {
  if (!value) throw new Error(errorMessage);
  else return value;
};

export default throwOrReturnValue;
