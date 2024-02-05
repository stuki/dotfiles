#!/usr/bin/env python3
import os, yaml

home_dir = os.environ['HOME']
home_config_file = f"{home_dir}/.amethyst.yml"
xdg_config_file = f"{home_dir}/.config/amethyst/amethyst.yml"
mod1 = ['option', 'shift']
mod2 = ['option', 'shift', 'control']
keycodes = {
    'enter': 36,
    'return': 36,
    'space': 49,
    'left': 123,
    'right': 124,
    'down': 125,
    'up': 126,
}

script_template = """#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.packageName Amethyst
# @raycast.title <<title>>
# @raycast.mode silent

# Optional parameters:
# @raycast.icon images/amethyst.png
# @raycast.author jbarr21
# @raycast.authorURL https://twitter.com/jbarr21
# @raycast.description Keyboard shortcuts for Amethyst app

tell application "System Events" 
    <<command>> using {<<mods>>}
end tell
"""

# mod1|mod2 -> option down, shift down
def mods_csv(mod):
    if mod != 'mod1' and mod != 'mod2':
        raise ValueError(f"invalid mod: {mod}")

    mods = mod1 if mod == 'mod1' else mod2
    return ', '.join([f"{mod} down" for mod in mods])

# h, j, k, l, space, return, left, right -> keystroke "h" | key code 49
def key_cmd(key):
    if len(key) == 1:
        return f"keystroke \"{key}\""
    elif key in keycodes:
        code = keycodes[key]
        return f"key code {code}"
    else:
        raise ValueError(f"invalid key: {key}")

def to_sentence(name):
    title = name.replace('-', ' ')
    title = title.replace('ccw', 'CCW')
    title = title.replace('cw', 'CW')
    title = title[0].upper() + title[1:]
    return title

def generate_script(name, mod, key):
    try:
        title = to_sentence(name)
        mods = mods_csv(mod)
        command = key_cmd(key)
        script = script_template.replace('<<title>>', title).replace('<<command>>', command).replace('<<mods>>', mods)
        
        __location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
        filepath = os.path.join(__location__, f"{name}.applescript")
        with open(filepath, 'w') as f:
            f.write(script)
    except ValueError:
        print(f"Unable to generate script for key (name: {name}, mod: {mod}, key: {key})")

def generate_scripts(data):
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, dict) and value.get('key') is not None and value.get('mod') is not None:
                print(f"Generating script for {key}")
                generate_script(key, value['mod'], value['key'])

def main():
    if not os.path.isfile(home_config_file) and not os.path.isfile(xdg_config_file):
        exit(f"No config file found in {home_config_file} or {xdg_config_file}")

    yaml_file = home_config_file if os.path.isfile(home_config_file) else xdg_config_file
    with open(yaml_file, "r") as f:
        yaml_data = f.read()

    data = yaml.safe_load(yaml_data)
    generate_scripts(data)

main()
