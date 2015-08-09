#!/bin/bash

sudo apt-get install vim git zsh nodejs npm golang chromium-browser terminator wget 

sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

git clone https://github.com/stuki/dotfiles.git

cp ~/dotfiles/.* ~/

cp -r ~/dotfiles/.config ~/
