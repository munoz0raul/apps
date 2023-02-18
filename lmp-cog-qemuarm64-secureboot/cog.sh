#!/bin/bash

TIMER="${TIMER-0}"
COG_PLATFORM_WL_VIEW_FULLSCREEN="${COG_PLATFORM_WL_VIEW_FULLSCREEN-0}"
COG_PLATFORM_WL_VIEW_WIDTH="${COG_PLATFORM_WL_VIEW_WIDTH-1280}"
COG_PLATFORM_WL_VIEW_HEIGHT="${COG_PLATFORM_WL_VIEW_HEIGHT-768}"

echo "Sleeping for $TIMER"
sleep $TIMER

# Execute all the rest
echo "Starting Cog: $@"
/usr/bin/cog "$@"