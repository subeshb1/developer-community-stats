import React, { useState, useEffect } from 'react'
import Popover from '../Popover'
import Tooltip from '../ToolTip'
import { GiPaintBucket } from 'react-icons/gi'
import { ChromePicker } from 'react-color'
import { useLocalStorage } from 'react-use'
import { If } from '../utils'

const codeTheme = {
  // Any CSS selector will work!
  'code-dark-plus': 'Dark+ (default dark)',
  'code-light-plus': 'Light+ (default light)',
  'code-tomorrow-night-blue': 'Tomorrow Night Blue',
  'code-red': 'Red',
  'code-abyss': 'Abyss',
  'code-dark-visual-studio': 'Dark (Visual Studio)',
  'code-light-visual-studio': 'Light (Visual Studio)',
  'code-high-contrast': 'High Contrast',
  'code-kimbie-dark': 'Kimbie Dark',
  'code-monokai-dimmed': 'Monokai Dimmed',
  'code-monokai': 'Monokai',
  'code-quiet-light': 'Quiet Light',
  'code-solarized-dark': 'Solarized Dark',
  'code-solarized-light': 'Solarized Light',
  'code-synth-wave-84': `SynthWave '84`,
}
const excludeVariables = ['--theme-picker-box-shadow']

const themes = [
  {
    name: 'Light',
    value: 'theme-light code-light-plus',
    color: '#ffffff',
  },
  {
    name: 'Dark',
    value: 'theme-dark code-dark-plus',
    color: '#2a2c35',
  },
]

const variableMap = {
  '--theme-primary-bg': 'Primary BG',
  '--theme-primary-color': 'Primary Color',
  '--theme-secondary-color': 'Secondary Color',
  '--theme-secondary-bg': 'Secondary BG',
  '--theme-primary-hover': 'Primary Hover',
}

const primaryColors = [
  {
    name: 'White',
    variables: {
      '--theme-primary-bg': '#ffffff',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#000000',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#e0e0e096',
      '--theme-picker-box-shadow':
        'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
    },
  },
  {
    name: 'Black',
    variables: {
      '--theme-primary-bg': '#2a2c35',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#424653',
      '--theme-picker-box-shadow':
        'rgb(0, 0, 0) 0px 4px 8px -2px,rgba(0, 0, 0, 0.31) 0px 0px 1px',
    },
  },
  {
    name: 'Blue',
    variables: {
      '--theme-primary-bg': '#1d5baf',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#000000',
      '--theme-primary-hover': '#3068b7',
      '--theme-picker-box-shadow':
        'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
    },
  },
  {
    name: 'Red',
    variables: {
      '--theme-primary-bg': '#af1d4c',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#e4316a96',
      '--theme-picker-box-shadow':
        'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px',
    },
  },
  {
    name: 'DarkBlue',
    variables: {
      '--theme-primary-bg': '#083575',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#0b479c',
      '--theme-picker-box-shadow':
        'rgb(0, 0, 0) 0px 4px 8px -2px,rgba(0, 0, 0, 0.31) 0px 0px 1px',
    },
  },
  {
    name: 'DarkRed',
    variables: {
      '--theme-primary-bg': '#7a1522',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#a01a2c',
      '--theme-picker-box-shadow':
        'rgb(0, 0, 0) 0px 4px 8px -2px,rgba(0, 0, 0, 0.31) 0px 0px 1px',
    },
  },
]

const ThemeButton = ({ name, onClick, background }) => (
  <button className="theme-picker__item" onClick={onClick}>
    <div className="theme-picker__object" style={{ background }}></div>
    {name}
  </button>
)
function ThemeChanger({
  setPrimaryColor,
  primaryColor,
  setThemeMode,
  themeMode,
  mobile = false,
}) {
  const [show, setShow] = useState(false)
  return (
    <div className="theme-picker">
      <div className="theme-picker__theme">
        <div className="theme-picker__header">Primary Colors</div>
        <div className="theme-picker__content">
          {primaryColors.map((x, i) => {
            return (
              <ThemeButton
                key={i}
                onClick={() => setPrimaryColor(x.variables)}
                background={x.variables['--theme-primary-bg']}
                name={x.name}
              />
            )
          })}
        </div>
        <div className="theme-picker__header">Theme</div>
        <div className="theme-picker__content">
          {themes.map((x, i) => {
            return (
              <ThemeButton
                key={i}
                onClick={() => setThemeMode(x.value)}
                background={x.color}
                name={x.name}
              />
            )
          })}
        </div>

        <div className="theme-picker__input-group">
          <div className="theme-picker__header">Code Snippet Theme</div>
          <select
            value={themeMode.split(' ')[1]}
            onChange={({ target }) =>
              setThemeMode(`${themeMode.split(' ')[0]} ${target.value}`)
            }
          >
            {Object.entries(codeTheme).map(([key, value], i) => (
              <option key={i} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <If condition={!mobile}>
          <button className="button" onClick={() => setShow(!show)}>
            {!show ? 'Show more' : 'Hide'}
          </button>
          {show &&
            Object.entries(primaryColor).map(([key, value], i) => {
              return (
                !excludeVariables.includes(key) && (
                  <div className="theme-picker__input-group" key={i}>
                    <div className="theme-picker__header">
                      {variableMap[key]}
                    </div>
                    <Popover
                      key={i}
                      elementAs="input"
                      value={value}
                      readOnly
                      placement="bottom"
                    >
                      <ChromePicker
                        color={value}
                        onChange={color => {
                          setPrimaryColor({
                            ...primaryColor,
                            [key]: color.hex,
                          })
                        }}
                      />
                    </Popover>
                  </div>
                )
              )
            })}
        </If>
      </div>
    </div>
  )
}
export default function ThemePicker({ offset = [0, 10], mobile }) {
  const [primaryColor, setPrimaryColor, remove] = useLocalStorage(
    'color-theme',
    {
      '--theme-primary-bg': '#2a2c35',
      '--theme-primary-color': '#000000',
      '--theme-secondary-color': '#ffffff',
      '--theme-secondary-bg': '#f4f4f4',
      '--theme-primary-hover': '#424653',
      '--theme-picker-box-shadow':
        'rgb(0, 0, 0) 0px 4px 8px -2px,rgba(0, 0, 0, 0.31) 0px 0px 1px',
    }
  )

  const [themeMode, setThemeMode, removeTheme] = useLocalStorage(
    'theme',
    'theme-light code-light-plus'
  )

  useEffect(() => {
    Object.entries(primaryColor).map(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }, [primaryColor])

  useEffect(() => {
    document.body.className = themeMode
  }, [themeMode])

  return (
    <Popover
      offset={offset}
      elementAs={React.forwardRef((props, ref) => (
        <Tooltip
          elementAs="button"
          aria-label="Open Theme picker"
          closeOnClick
          ref={ref}
          {...props}
          placement="left"
          text={'Change website theme'}
          className="lg-navbar__item lg-navbar__item--right lg-navbar__item--circular"
        >
          <GiPaintBucket />
        </Tooltip>
      ))}
    >
      <ThemeChanger
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        themeMode={themeMode}
        mobile={mobile}
        setThemeMode={setThemeMode}
      />
    </Popover>
  )
}
