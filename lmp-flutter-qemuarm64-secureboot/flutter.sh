#!/bin/bash

TIMER="${TIMER-0}"
WIDTH="${WIDTH-1280}"
HEIGHT="${HEIGHT-720}"

echo "Sleeping for $TIMER"
sleep $TIMER


flutter-auto --b=/usr/share/flutter/gallery/3.3.10/release/ --w=$WIDTH --h=$HEIGHT
