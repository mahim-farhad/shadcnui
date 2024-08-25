function getIconVariants(size) {
  const sizeVariants = {
    xs: "w-4 h-4 text-xs",
    sm: "w-4 h-4 text-sm",
    base: "w-5 h-5 text-base",
    lg: "w-6 h-6 text-lg",
    xl: "w-6 h-6 text-xl"
  };

  const sizeVariant = sizeVariants?.[size];

  const isValid = sizeVariant;

  if (!isValid) return null;

  const iconVariants = { size: sizeVariant };

  return iconVariants;
}

export default getIconVariants;
