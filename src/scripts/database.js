const firstRowButtons = [['`', '~', '`', '~', '“', '„', '“', '„'], ['1', '!', '1', '!', '1', '!', '1', '!'], ['2', '@', '2', '@', '2', '"', '2', '"'],
  ['3', '#', '3', '#', '3', '№', '3', '№'], ['4', '$', '4', '$', '4', '%', '4', '%'], ['5', '%', '5', '%', '5', ':', '5', ':'],
  ['6', '^', '6', '^', '6', ',', '6', ','], ['7', '&', '7', '&', '7', '.', '7', '.'], ['8', '*', '8', '*', '8', ';', '8', ';'],
  ['9', '(', '9', '(', '9', '(', '9', '('], ['0', ')', '0', ')', '0', ')', '0', ')'], ['-', '_', '-', '_', '-', '_', '=', '_'],
  ['=', '+', '=', '+', '=', '+', '»', '+'], ['delete', 'delete', 'delete', 'delete', 'delete', 'delete', 'delete', 'delete']];

const secondRowButtons = [['tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab', 'tab'], ['q', 'Q', 'Q', 'q', 'й', 'Й', 'Й', 'й'],
  ['w', 'W', 'W', 'w', 'ц', 'Ц', 'Ц', 'ц'], ['e', 'E', 'E', 'e', 'у', 'У', 'У', 'у'], ['r', 'R', 'R', 'r', 'к', 'К', 'К', 'к'],
  ['t', 'T', 'T', 't', 'е', 'Е', 'Е', 'е'], ['y', 'Y', 'Y', 'y', 'н', 'Н', 'Н', 'н'], ['u', 'U', 'U', 'u', 'г', 'Г', 'Г', 'г'],
  ['i', 'I', 'I', 'i', 'ш', 'Ш', 'Ш', 'ш'], ['o', 'O', 'O', 'o', 'ў', 'Ў', 'Ў', 'ў'], ['p', 'P', 'P', 'p', 'з', 'З', 'З', 'з'],
  ['[', '{', '[', '{', 'х', 'Х', 'Х', 'х'], [']', '}', ']', '}', '\'', '\'', '\'', '\''], ['\\', '|', '\\', '|', 'ё', 'Ё', 'Ё', 'ё']];

const thirdRowButtons = [['caps lock', 'caps lock', 'caps lock', 'caps lock', 'caps lock', 'caps lock', 'caps lock', 'caps lock'],
  ['a', 'A', 'A', 'a', 'ф', 'Ф', 'Ф', 'ф'], ['s', 'S', 'S', 's', 'ы', 'Ы', 'Ы', 'ы'], ['d', 'D', 'D', 'd', 'в', 'В', 'В', 'в'],
  ['f', 'F', 'F', 'f', 'а', 'А', 'А', 'а'], ['g', 'G', 'G', 'g', 'п', 'П', 'П', 'п'], ['h', 'H', 'H', 'h', 'р', 'Р', 'Р', 'р'],
  ['j', 'J', 'J', 'j', 'о', 'О', 'О', 'о'], ['k', 'K', 'K', 'k', 'л', 'Л', 'Л', 'л'], ['l', 'L', 'L', 'l', 'д', 'Д', 'Д', 'д'],
  [';', ':', ';', ':', 'ж', 'Ж', 'Ж', 'ж'], ['\'', '"', '\'', '"', 'э', 'Э', 'Э', 'э'],
  ['return', 'return', 'return', 'return', 'return', 'return', 'return', 'return']];

const fourthRowButtons = [['shift', 'shift', 'shift', 'shift', 'shift', 'shift', 'shift', 'shift'], ['z', 'Z', 'Z', 'z', 'я', 'Я', 'Я', 'я'],
  ['x', 'X', 'X', 'x', 'ч', 'Ч', 'Ч', 'ч'], ['c', 'C', 'C', 'c', 'с', 'С', 'С', 'с'], ['v', 'V', 'V', 'v', 'м', 'М', 'М', 'м'],
  ['b', 'B', 'B', 'b', 'i', 'I', 'I', 'i'], ['n', 'N', 'N', 'n', 'т', 'Т', 'Т', 'т'], ['m', 'M', 'M', 'm', 'ь', 'Ь', 'Ь', 'ь'],
  [',', '<', ',', '<', 'б', 'Б', 'Б', 'б'], ['.', '>', '.', '>', 'ю', 'Ю', 'Ю', 'ю'], ['/', '?', '/', '?', '/', '?', '/', '?'],
  ['▲', '▲', '▲', '▲', '▲', '▲', '▲', '▲'], ['shift', 'shift', 'shift', 'shift', 'shift', 'shift', 'shift', 'shift']];

const fifthRowButtons = [['fn', 'fn', 'fn', 'fn', 'fn', 'fn', 'fn', 'fn'],
  ['control', 'control', 'control', 'control', 'control', 'control', 'control', 'control'],
  ['option', 'option', 'option', 'option', 'option', 'option', 'option', 'option'],
  ['command', 'command', 'command', 'command', 'command', 'command', 'command', 'command'],
  ['space', 'space', 'space', 'space', 'space', 'space', 'space', 'space'],
  ['command', 'command', 'command', 'command', 'command', 'command', 'command', 'command'],
  ['option', 'option', 'option', 'option', 'option', 'option', 'option', 'option'], ['◀', '◀', '◀', '◀', '◀', '◀', '◀', '◀'],
  ['▼', '▼', '▼', '▼', '▼', '▼', '▼', '▼'], ['►', '►', '►', '►', '►', '►', '►', '►']];

const firstRowKeyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const secondRawKeyCodes = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const thirdRawKeyCodes = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const fourthRowKeyCodes = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const fifthRowKeyCodes = ['Fn', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

export {
  firstRowButtons, secondRowButtons, thirdRowButtons, fourthRowButtons, fifthRowButtons,
  firstRowKeyCodes, secondRawKeyCodes, thirdRawKeyCodes, fourthRowKeyCodes, fifthRowKeyCodes,
};
