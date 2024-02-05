#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.packageName Amethyst
# @raycast.title Display current layout
# @raycast.mode silent

# Optional parameters:
# @raycast.icon images/amethyst.png
# @raycast.author jbarr21
# @raycast.authorURL https://twitter.com/jbarr21
# @raycast.description Keyboard shortcuts for Amethyst app

tell application "System Events" 
    keystroke "i" using {option down, shift down}
end tell
