export const UI = '[UI]';
export const SHOW_SPINNER = `${UI} Show spinner`;
export const HIDE_SPINNER = `${UI} Hide spinner`;

export const showSpinner = () => ({
    type: SHOW_SPINNER
  });
  
  export const hideSpinner = () => ({
    type: HIDE_SPINNER
  });
  