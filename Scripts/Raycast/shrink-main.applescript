#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.packageName Amethyst
# @raycast.title Shrink main (option + shift + H)
# @raycast.mode silent

# Optional parameters:
# @raycast.icon images/amethyst.png
# @raycast.author jbarr21
# @raycast.authorURL https://twitter.com/jbarr21
# @raycast.description Keyboard shortcuts for Amethyst app

tell application "System Events" 
    keystroke "h" using {option down, shift down}
end tell
