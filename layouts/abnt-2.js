((render) => {
  const defaultKeyStyle = {
    width: '40px',
    height: '40px',
  };

  const layout = {
    container: {
      style: {
        width: '800px',
        height: '400px',
      },
    },

    keys: {
      'Tab': {
        style: {
          ...defaultKeyStyle,
          width: 40 + 20 + 4 + 'px',
          top: 0 + 'px',
          left: 0 + 'px',
        },
        content: 'Tab',
        keyCode: 9,
        location: 0,
      },
      'Q': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + 'px',
        },
        content: 'Q',
        keyCode: 81,
        location: 0,
      },
      'W': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + 40 + 4 + 'px',
        },
        content: 'W',
        keyCode: 87,
        location: 0,
      },
      'E': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 2 + 'px',
        },
        content: 'E',
        keyCode: 69,
        location: 0,
      },
      'R': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 3 + 'px',
        },
        content: 'R',
        keyCode: 82,
        location: 0,
      },
      'T': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 4 + 'px',
        },
        content: 'T',
        keyCode: 84,
        location: 0,
      },
      'Y': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 5 + 'px',
        },
        content: 'Y',
        keyCode: 89,
        location: 0,
      },
      'U': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 6 + 'px',
        },
        content: 'U',
        keyCode: 85,
        location: 0,
      },
      'I': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 7 + 'px',
        },
        content: 'I',
        keyCode: 73,
        location: 0,
      },
      'O': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 8 + 'px',
        },
        content: 'O',
        keyCode: 79,
        location: 0,
      },
      'P': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 9 + 'px',
        },
        content: 'P',
        keyCode: 80,
        location: 0,
      },
      '´': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 10 + 'px',
        },
        content: '´',
        keyCode: 219,
        location: 0,
      },
      '[': {
        style: {
          ...defaultKeyStyle,
          top: 0 + 'px',
          left: 40 * 1.5 + 4 * 2 + (40 + 4) * 11 + 'px',
        },
        content: '[',
        keyCode: 221,
        location: 0,
      },
      'CapsLock': {
        style: {
          ...defaultKeyStyle,
          width: 40 + 20 + 4 + 10 + 'px',
          top: 40 + 4 + 'px',
          left: 0 + 'px',
        },
        content: 'CapsLock',
        keyCode: 20,
        location: 0,
      },
      'A': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + 'px',
        },
        content: 'A',
        keyCode: 65,
        location: 0,
      },
      'S': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + 40 + 4 + 'px',
        },
        content: 'S',
        keyCode: 83,
        location: 0,
      },
      'D': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 2 + 'px',
        },
        content: 'D',
        keyCode: 68,
        location: 0,
      },
      'F': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 3 + 'px',
        },
        content: 'F',
        keyCode: 70,
        location: 0,
      },
      'G': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 4 + 'px',
        },
        content: 'G',
        keyCode: 71,
        location: 0,
      },
      'H': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 5 + 'px',
        },
        content: 'H',
        keyCode: 72,
        location: 0,
      },
      'J': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 6 + 'px',
        },
        content: 'J',
        keyCode: 74,
        location: 0,
      },
      'K': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 7 + 'px',
        },
        content: 'K',
        keyCode: 75,
        location: 0,
      },
      'L': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 8 + 'px',
        },
        content: 'L',
        keyCode: 76,
        location: 0,
      },
      'Ç': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 9 + 'px',
        },
        content: 'Ç',
        keyCode: 186,
        location: 0,
      },
      '^': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 10 + 'px',
        },
        content: '^',
        keyCode: 222,
        location: 0,
      },
      ']': {
        style: {
          ...defaultKeyStyle,
          top: 40 + 4 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 11 + 'px',
        },
        content: ']',
        keyCode: 220,
        location: 0,
        code: 'Backslash',
      },
      'Enter': {
        style: {
          ...defaultKeyStyle,
          height: 40 + 4 + 40 + 'px',
          top: 0 + 'px',
          left: 40 + 20 + 4 + 10 + 4 + (40 + 4) * 12 + 'px',
        },
        content: 'Enter',
        keyCode: 13,
        location: 0,
      },
      'Left Shift': {
        style: {
          ...defaultKeyStyle,
          width: 54 + 'px',
          top: (40 + 4) * 2 + 'px',
          left: 0 + 'px',
        },
        content: 'Left Shift',
        keyCode: 16,
        location: 1,
      },
      '\\': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 14 + 4 + 'px',
        },
        content: '\\',
        keyCode: 220,
        location: 0,
        code: 'IntlBackslash',
      },
      'Z': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + 'px',
        },
        content: 'Z',
        keyCode: 90,
        location: 0,
      },
      'X': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + 40 + 4 + 'px',
        },
        content: 'X',
        keyCode: 88,
        location: 0,
      },
      'C': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 2 + 'px',
        },
        content: 'C',
        keyCode: 67,
        location: 0,
      },
      'V': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 3 + 'px',
        },
        content: 'V',
        keyCode: 86,
        location: 0,
      },
      'B': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 4 + 'px',
        },
        content: 'B',
        keyCode: 66,
        location: 0,
      },
      'N': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 5 + 'px',
        },
        content: 'N',
        keyCode: 78,
        location: 0,
      },
      'M': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 6 + 'px',
        },
        content: 'M',
        keyCode: 77,
        location: 0,
      },
      ',': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 7 + 'px',
        },
        content: ',',
        keyCode: 188,
        location: 0,
      },
      '.': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 8 + 'px',
        },
        content: '.',
        keyCode: 190,
        location: 0,
      },
      ';': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 9 + 'px',
        },
        content: ';',
        keyCode: 191,
        location: 0,
        code: 'Slash',
      },
      '/': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 10 + 'px',
        },
        content: '/',
        keyCode: 191,
        location: 0,
        code: 'IntlRo',
      },
      'Right Shift': {
        style: {
          ...defaultKeyStyle,
          width: 40 * 1.5 + 'px',
          top: (40 + 4) * 2 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 11 + 'px',
        },
        content: 'Right Shift',
        keyCode: 16,
        location: 2,
      },
      'Left Ctrl': {
        style: {
          ...defaultKeyStyle,
          width: 54 + 'px',
          top: (40 + 4) * 3 + 'px',
          left: 0 + 'px',
        },
        content: 'Left Ctrl',
        keyCode: 17,
        location: 1,
      },
      'Fn': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 3 + 'px',
          left: 40 + 14 + 4 + 'px',
        },
        content: 'Fn',
        disabled: true,
      },
      'Win': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + 'px',
        },
        content: 'Win',
        disabled: true,
      },
      'Alt': {
        style: {
          ...defaultKeyStyle,
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + 40 + 4 + 'px',
        },
        content: 'Alt',
        keyCode: 18,
        location: 1,
      },
      'Space': {
        style: {
          ...defaultKeyStyle,
          width: 40 * 5.5 + (4 * 5) + 'px',
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 2 + 'px',
        },
        content: 'Space',
        keyCode: 32,
        location: 0,
      },
      'Alt Gr': {
        style: {
          ...defaultKeyStyle,
          width: 54 + 'px',
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 2 + 40 * 5.5 + (4 * 5) + 4 + 'px',
        },
        content: 'Alt Gr',
        keyCode: 225,
        location: 2,
      },
      'Menu': {
        style: {
          ...defaultKeyStyle,
          width: 54 + 'px',
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 2 + 58 + 40 * 5.5 + (4 * 5) + 4 + 'px',
        },
        content: 'Menu',
        keyCode: 93,
        location: 0,
      },
      'Right Ctrl': {
        style: {
          ...defaultKeyStyle,
          width: 54 + 'px',
          top: (40 + 4) * 3 + 'px',
          left: 40 + 20 + 20 + (4 * 2) + 10 + 4 + (40 + 4) * 2 + 58 * 2 + 40 * 5.5 + (4 * 5) + 4 + 'px',
        },
        content: 'Right Ctrl',
        keyCode: 17,
        location: 2,
      },
    },
  };

  render(layout);

})(window.renderLayout ? window.renderLayout : () => {});