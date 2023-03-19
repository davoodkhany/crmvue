import { Collapse } from "flowbite";

const $targetEl = ''

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = ''

const options = {
    onCollapse: () => {},
    onExpand: () => {},
    onToggle: () => {},
};

const collapse = new Collapse($targetEl, $triggerEl, options);



export default collapse