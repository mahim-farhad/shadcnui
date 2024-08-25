import { forwardRef, useState } from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import PropTypes from "prop-types";

import Icon from "@components/ui/Icon";

import {
  getTriggerClasses, getContentClasses,
  getLabelClasses, getItemClasses
} from "@styles/inputs/selectAltClasses";

const SelectScrollUpButton = forwardRef(function SelectScrollUpButton({
  ...props
}, scrollUpRef) {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={scrollUpRef}
      className="py-1 text-center"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="512" height="512"
        className="w-5 h-5 mx-auto"
      >
        <path d="M6.41,16H17.59a1,1,0,0,0,.7-1.71L12.71,8.71a1,1,0,0,0-1.42,0L5.71,14.29A1,1,0,0,0,6.41,16Z" />
      </svg>
    </SelectPrimitive.ScrollUpButton>
  );
});

SelectScrollUpButton.displayName =
  SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef(function SelectScrollDownButton({
  ...props
}, scrollDownRef) {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={scrollDownRef}
      className="py-1 text-center"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="512" height="512"
        className="w-5 h-5 mx-auto"
      >
        <path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z" />
      </svg>
    </SelectPrimitive.ScrollDownButton>
  );
});

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectAlt = forwardRef(function SelectAlt({
  position = "popper",
  name,
  label,
  placeholder,
  size = "base",
  onValueChange,
  className = "",
  children,
  ...props
}, selectRef) {
  const [isFocused, setFocused] = useState(false);

  const triggerClasses =
    getTriggerClasses(size, isFocused, className);
  const contentClasses =
    getContentClasses(position);

  return (
    <SelectPrimitive.Root
      ref={selectRef}
      onOpenChange={() => setFocused((prev) => !prev)}
      onValueChange={(value) => onValueChange(name, value)}
      {...props}
    >
      <SelectPrimitive.Trigger
        className={triggerClasses?.trigger}
      >
        {label && (
          <span className={triggerClasses?.labelWrapper}>
            <span className={triggerClasses?.label}>
              {label}
            </span>
          </span>
        )}

        <span className={triggerClasses?.valueWrapper}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </span>

        <SelectPrimitive.Icon className={triggerClasses?.iconWrapper}>
          <Icon name="ChevronsUpDown" size={size} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      {children}
    </SelectPrimitive.Root>
  );
});

SelectAlt.displayName =
  SelectPrimitive.Root.displayName;

const SelectContentAlt = forwardRef(function SelectContentAlt({
  position = "popper",
  className = "",
  style = {},
  children,
  ...props
}, contentRef) {
  const contentClasses = getContentClasses(position, className);

  return (
    <SelectPrimitive.Content
      ref={contentRef}
      position={position}
      className={contentClasses}
      style={style}
      {...props}
    >
      <SelectScrollUpButton />

      <SelectPrimitive.Viewport>
        {children}
      </SelectPrimitive.Viewport>

      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  );
});

SelectContentAlt.displayName =
  SelectPrimitive.Content.displayName;

SelectContentAlt.propTypes = {
  position: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};


const SelectGroupAlt = forwardRef(function SelectGroupAlt({
  ...props
}, groupRef) {
  return (
    <SelectPrimitive.Group
      ref={groupRef}
      className="space-y-1"
      {...props}
    />
  );
});

SelectGroupAlt.displayName =
  SelectPrimitive.Group.displayName;

const SelectLabelAlt = forwardRef(function SelectLabelAlt({
  className = "",
  style = {},
  ...props
}, labelRef) {
  const labelClasses = getLabelClasses(className);

  return (
    <SelectPrimitive.Label
      ref={labelRef}
      className={labelClasses}
      style={style}
      {...props}
    />
  );
});

SelectLabelAlt.displayName =
  SelectPrimitive.Label.displayName;

SelectLabelAlt.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

const SelectItemAlt = forwardRef(function SelectItemAlt({
  textValue,
  className = "",
  style = {},
  ...props
}, itemRef) {
  const itemClasses = getItemClasses(className);

  return (
    <SelectPrimitive.Item
      ref={itemRef}
      className={itemClasses?.item}
      {...props}
    >
      <SelectPrimitive.ItemText>
        {textValue}
      </SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator
        className={itemClasses?.indicator}
      >
        <Icon
          name="Check"
          size="sm"
        />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});

SelectItemAlt.displayName =
  SelectPrimitive.Item.displayName;

SelectItemAlt.propTypes = {
  textValue: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

const SelectSeparatorAlt = forwardRef(function SelectSeparatorAlt({
  ...props
}, separatorRef) {
  return (
    <SelectPrimitive.Separator
      ref={separatorRef}
      className="h-px -mx-1 my-1 bg-gray-200"
      {...props}
    />
  );
});

SelectSeparatorAlt.displayName =
  SelectPrimitive.Separator.displayName;

export {
  SelectAlt, SelectContentAlt, SelectGroupAlt,
  SelectLabelAlt, SelectItemAlt,
  SelectSeparatorAlt
};
