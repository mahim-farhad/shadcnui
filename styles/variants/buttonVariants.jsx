const getSizeVariant = (size, iconOnly) => {
  const sizeVariants = {
    xs: "h-8 py-1.5 px-6 text-sm leading-[1rem] rounded-md",
    sm: "h-10 py-2 px-6 text-sm leading-[1rem] rounded-md",
    base: "h-12 py-3 px-8 text-sm leading-[16px] rounded-lg",
    lg: "h-14 py-4 px-8 text-base leading-[16px] rounded-lg",
    xl: "h-16 py-5 px-10 text-lg leading-[16px] rounded-xl",
    iconOnly: {
      xs: "w-8 h-8 rounded-md",
      sm: "w-10 h-10 rounded-md",
      base: "w-12 h-12 rounded-lg",
      lg: "w-14 h-14 rounded-lg",
      xl: "w-16 h-16 rounded-xl"
    }
  };

  const sizeVariant =
    iconOnly ? sizeVariants?.iconOnly?.[size] : sizeVariants?.[size];

  return sizeVariant;
}

const getColorVariant = (variant, color) => {
  const colorVariants = {
    filled: {
      primary: [
        "text-white",
        "bg-primary",
        "border-transparent",
        "shadow",
        "shadow-primary",
        "hover:bg-primary-500",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ],
      black: [
        "text-white",
        "bg-black",
        "border-transparent",
        "shadow",
        "shadow-black",
        "hover:bg-primary-500",
        "active:shadow-lg",
        "active:shadow-black-300",
      ],
    },
    gradient: {
      primary: [
        "text-white",
        "bg-gradient-to-t",
        "from-primary-400",
        "to-primary-500",
        "border-transparent",
        "hover:bg-gradient-to-r",
        "active:bg-primary-600",
        "active:shadow-lg",
        "active:shadow-primary-300",
      ],
    },
    toned: {
      primary: [
        "text-primary",
        "bg-primary-100",
        "border-transparent",
        "hover:text-white",
        "hover:bg-primary-500",
        "active:bg-primary-600",
      ],
    },
    outlined: {
      primary: [
        "text-primary",
        "bg-transparent",
        "border-primary",
        "shadow-none",
        "hover:bg-primary-100",
      ],
    },
    text: {
      primary: [
        "text-primary",
        "bg-transparent",
        "border-transparent",
        "hover:text-primary-500",
      ],
    }
  };

  const colorVariant = colorVariants?.[variant]?.[color];

  return colorVariant;
}

const getButtonVariants = (size, iconOnly, variant, color) => {
  const sizeVariant = getSizeVariant(size, iconOnly);

  const colorVariant = getColorVariant(variant, color);

  if (!sizeVariant || !colorVariant) return null;

  const buttonVariants = { size: sizeVariant, color: colorVariant }

  return buttonVariants;
}

export default getButtonVariants;
