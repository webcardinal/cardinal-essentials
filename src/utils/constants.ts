export const TOOLTIP_TEXT: string = "Copy to clipboard";
export const TOOLTIP_COPIED_TEXT: string = "Copied!";
export const LIST_TYPE_ORDERED: string = "ordered";
export const LIST_TYPE_UNORDERED: string = "unordered";

export const EVENTS_TYPES = {
  PSK_SCROLL_EVT: "PSK_SCROLL_EVT",
  PSK_WIZARD_EVT: "PSK_WIZARD_EVT",
  PSK_FILE_CHOOSER_EVT: "PSK_FILE_CHOOSER_EVT"
};

export const PSK_LIST_PARSE_CONFIG = {
  startTag: /^<([a-z]+-?[a-z]*)+[^>]*>/,
  endTag: /^<\/([a-z]+-?[a-z]*)+[^>]*>/,
  inlineTag: /^<([a-z]+-?[a-z]*)+[^>]*>.*<\/([a-z]+-?[a-z]*)+[^>]*>/
};

export const ACTIONS_ICONS = {
  view: {
    value: "eye",
    color: "rgba(108, 192, 145, 1)"
  },
  edit: {
    value: "edit",
    color: "#007bff"
  },
  cancel: {
    value: "close",
    color: "#dc3545"
  },
  bid: {
    value: "gavel"
  },
  calendar: {
    value: "calendar-check-o"
  }
};

export const GRID_IGNORED_COMPONENTS = ["link", "style", "slot", "#text", "#comment", "text", "comment"];

export const GRID_BREAKPOINTS = ["xs", "s", "m", "l", "xl"];

export const GRID_HIDDEN_BREAKPOINTS = {
  xs: "d-none d-sm-block",
  sm: "d-sm-none d-md-block",
  md: "d-md-none d-lg-block",
  lg: "d-lg-none d-xl-block",
  xl: "d-xl-none"
};

export const DATE_FORMAT_MASKS = {
  'default': 'mm dd yyyy HH:MM',
  'shortTime': 'HH:MM ',
  'isoTime': 'HH:MM:ss',
  'isoDate': 'yyyy-mm-dd',
}

export const BREADCRUMB_CONSTANTS = {
  ARROWS: "arrows",
  DEFAULT: "default",
  SCROLL: "scroll",
  PREVIOUS_ID: "prev",
  NEXT_ID: "next",
  BREADCRUMB_CLICK: "breadcrumb-click"
};
