# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="avit"

export UPDATE_ZSH_DAYS=30

COMPLETION_WAITING_DOTS="true"

plugins=(git common-aliases node rails gem npm)

source $ZSH/oh-my-zsh.sh

# User configuration

. ~/.aliases
