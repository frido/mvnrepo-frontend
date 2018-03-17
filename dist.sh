#!/bin/bash
ng build --prod --base-href "https://frido.github.io/"
rm ../frido.github.io/main*
cp dist/* ../frido.github.io/