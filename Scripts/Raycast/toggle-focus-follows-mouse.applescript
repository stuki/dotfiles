#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.packageName Amethyst
# @raycast.title Toggle focus follows mouse
# @raycast.mode silent

# Optional parameters:
# @raycast.icon images/amethyst.png
# @raycast.author jbarr21
# @raycast.authorURL https://twitter.com/jbarr21
# @raycast.description Keyboard shortcuts for Amethyst app

tell application "System Events" 
    keystroke "x" using {option down, shift down, control down}
end tell
