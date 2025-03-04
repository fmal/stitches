export const set = (id) => `\x1b[${id}m`
export const color = (string, id) => set(id) + string.replace(RegExp(set(0).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), set(0) + set(id)) + set(0)

export const bold = (string) => color(string, 1)
export const dim = (string) => color(string, 2)
export const underline = (string) => color(string, 4)
export const invert = (string) => color(string, 7)

export const black = (string) => color(string, 30)
export const red = (string) => color(string, 31)
export const green = (string) => color(string, 32)
export const yellow = (string) => color(string, 33)
export const blue = (string) => color(string, 34)
export const magenta = (string) => color(string, 35)
export const cyan = (string) => color(string, 36)
export const white = (string) => color(string, 37)

export const bgBlack = (string) => color(string, 40)
export const bgRed = (string) => color(string, 41)
export const bgGreen = (string) => color(string, 42)
export const bgYellow = (string) => color(string, 43)
export const bgBlue = (string) => color(string, 44)
export const bgMagenta = (string) => color(string, 45)
export const bgCyan = (string) => color(string, 46)
export const bgWhite = (string) => color(string, 47)

export const passIcon = green('✔')
export const failIcon = red('✖')

export const passText = (text = 'PASS') => invert(green(bold(` ${text} `)))
export const failText = (text = 'FAIL') => invert(red(bold(` ${text} `)))
export const infoText = (text = 'INFO') => dim(text)
