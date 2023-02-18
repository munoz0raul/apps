FROM hub.foundries.io/ew2023-customer1/0ydotool AS ydotool
FROM karsten13/magicmirror:latest
#FROM registry.gitlab.com/khassel/magicmirror:develop_debug

USER root

ENV DEBIAN_FRONTEND noninteractive

ENV WAYLAND_USER="fio"
ENV XDG_RUNTIME_DIR="/run/user/1000"
ENV WAYLAND_DISPLAY="wayland-1"

ENV FIO_HOME /home/node
ENV FIO_USERID 1000
ENV FIO_USERNAME node

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
      libatk-bridge2.0-0 \
      libatk1.0-dev \
      libnss3 \
      libglib2.0-0 \
      libdrm-dev \
      libgtk-3-0 \
      libgbm1 \
      libasound2 \
      sway \
      fontconfig-config && \
    apt-get clean && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install -y --no-install-recommends sway && \
    rm -rf /var/lib/apt/lists/*

ENV LC_ALL="en_US.UTF-8"

COPY --chown=1000:1000 package.json /opt/magic_mirror/package.json
COPY --chown=1000:1000 electron.js /opt/magic_mirror/js/

USER node

WORKDIR /opt/magic_mirror

RUN npm install -no-audit --no-fund --no-update-notifier --omit=dev

USER root

RUN npm install -g npm@9.3.1

COPY --from=ydotool --chown=${FIO_USERNAME} /ydotool/build/ydotool /usr/bin/
COPY --chown=${FIO_USERNAME} entrypoint.sh /opt/magic_mirror/entrypoint.sh

WORKDIR /opt/magic_mirror/