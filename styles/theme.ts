import { theme, DefaultTheme } from '@chakra-ui/core'

const curtomTheme: DefaultTheme = {
    ...theme,
    fonts: {
        body: "Roboto, system-ui, sans-serif",
        heading: "Roboto, system-ui, sans-serif",
        mono: "Menlo, monospace"
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700
    },
    fontSizes: {
        ...theme.fontSizes,
        "6xl": "54px"
    }
}

export default curtomTheme