function getTextfieldVariants(size) {
  const sizeVariants = {
    label: {
      sm: "h-10 ml-2",
      base: "h-12 ml-2.5",
      lg: "h-14 ml-2.5",
      xl: "h-16 ml-2.5"
    },
    input: {
      sm: "h-10 px-3.5 text-sm",
      base: "h-12 pl-[calc(1rem-2px)] pr-[calc(3rem-2px)] text-base",
      lg: "h-14 px-4 text-lg",
      xl: "h-16 px-4 text-xl"
    },
    iconWrapper: {
      sm: "w-10 h-10 p-3",
      base: "w-12 h-12 p-3.5",
      lg: "w-14 h-14 p-4",
      xl: "w-16 h-16 p-5"
    }
  };

  const sizeVariant = {
    label: sizeVariants?.label?.[size],
    input: sizeVariants?.input?.[size],
    iconWrapper: sizeVariants?.iconWrapper?.[size]
  };

  const isValid =
    sizeVariant.label && sizeVariant.input &&
    sizeVariant.iconWrapper;

  if (!isValid) return null;

  const textfieldVariants = { size: sizeVariant };

  return textfieldVariants;
};

export default getTextfieldVariants;
