#!/bin/bash
#
# install.sh
#
# script criado para criar o comando myboilerplate usando alias
#

cp ./myboilerplate.js ~/ &&
echo "alias myboilerplate='node ~/myboilerplate.js'" >> ~/.bashrc 