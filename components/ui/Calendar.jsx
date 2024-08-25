import { DayPicker } from "react-day-picker";

import PropTypes from "prop-types";

import Icon from "@components/ui/Icon";

import getCalenderClasses from "@styles/components/calenderClasses";

function Calendar({
  mode = "single",
  selected,
  onSelect,
  className = "",
  style = {},
  ...props
}) {
  const calenderClasses = getCalenderClasses(className);

  return (
    <DayPicker
      mode={mode}
      selected={selected}
      onSelect={onSelect}
      showOutsideDays={true}
      numberOfMonths={1}
      components={{
        IconLeft: () => <Icon name="ArrowLeft" size="sm" />,
        IconRight: () => <Icon name="ArrowRight" size="sm" />,
      }}
      classNames={{
        month: calenderClasses?.month,
        months: calenderClasses?.months,
        caption: calenderClasses?.caption,
        caption_label: calenderClasses?.caption_label,
        nav: calenderClasses?.nav,
        nav_button: calenderClasses?.nav_button,
        nav_button_previous: calenderClasses?.nav_button_previous,
        nav_button_next: calenderClasses?.nav_button_next,
        table: calenderClasses?.table,
        head_row: calenderClasses?.head_row,
        head_cell: calenderClasses?.head_cell,
        row: calenderClasses?.row,
        cell: calenderClasses?.cell,
        day: calenderClasses?.day,
        day_range_middle:
          mode === "range" && calenderClasses?.day_range_middle,
        day_selected: calenderClasses?.day_selected,
        day_today: calenderClasses?.day_today,
        day_outside: calenderClasses?.day_outside,
        day_disabled: calenderClasses?.day_disabled,
        day_hidden: calenderClasses?.day_hidden,
      }}
      className={calenderClasses?.wrapper}
      style={style}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar";

Calendar.propTypes = {
  mode: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Calendar;
