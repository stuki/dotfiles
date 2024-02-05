if status is-interactive
    # Commands to run in interactive sessions can go here
end


set TREE_IGNORE "cache|log|logs|node_modules|vendor"

alias ls=' exa --group-directories-first'
alias la=' ls -a'
alias ll=' ls --git -l'
alias lt=' ls --tree -D -L 2 -I $TREE_IGNORE'
alias ltt=' ls --tree -D -L 3 -I $TREE_IGNORE'
alias lttt=' ls --tree -D -L 4 -I $TREE_IGNORE'
alias ltttt=' ls --tree -D -L 5 -I $TREE_IGNORE'

export PATH="$PATH:$HOME/.local/bin"

string match -q "$TERM_PROGRAM" "vscode"
and . (code --locate-shell-integration-path fish)
