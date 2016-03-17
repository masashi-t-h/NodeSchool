#!/bin/sh
echo -n "Number? "
read num

echo -n "me? "
read me

echo -n "filename? "
read filename


if [ ! -d "$PWD/$num" ]; then
	mkdir $PWD/$num
fi
if [ ! -d "$PWD/$num/$me" ]; then
	mkdir $PWD/$num/$me
fi
cp $filename $PWD/$num/$me/$filename
