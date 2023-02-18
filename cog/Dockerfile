# For local x86_64 testing
# docker run -it --rm --user=fio -v /tmp/.X11-unix:/tmp/.X11-unix -v /var/run/dbus:/var/dbus xkiosk www.FIO.cc

FROM hub.foundries.io/ew2023-customer1/0ydotool AS ydotool
FROM debian:sid

LABEL maintainer="Raul Munoz <raul@foundries.io>"

ENV DEBIAN_FRONTEND noninteractive

ENV WAYLAND_USER="weston"
ENV XDG_RUNTIME_DIR="/run/user/63"
ENV WAYLAND_DISPLAY="wayland-1"

ENV FIO_HOME /home/weston
ENV FIO_USERID 63
ENV FIO_USERNAME weston

RUN groupadd -g 61 render && \
    if [ ! "${FIO_USERID}" = "0" ]; then \
        groupadd -g ${FIO_USERID} ${FIO_USERNAME}; \
        useradd -d ${FIO_HOME} -s /bin/bash -m ${FIO_USERNAME} -u ${FIO_USERID} -g ${FIO_USERID} -G video,render; \
    fi

RUN apt-get update -y && \
    apt-get install -y --no-install-recommends \
                       libexpat1 \
                       libpciaccess-dev \
                       libnss3 \
                       libatk1.0-0  \
                       libatk-bridge2.0-0 \
                       libjpeg62-turbo \
                       libxkbcommon0 \
                       libasound2 \
                       libflac-dev \
                       libflac12 \
                       libxslt1.1 \
                       libwayland-cursor0 \
                       libwayland-client0 \
                       libwayland-egl1 \
                       libwayland-server0 \
                       sway \
                       cog \
                       vim \
                       ca-certificates \
                       fontconfig-config && \
    apt-get clean && apt-get autoremove -y && rm -rf /var/lib/apt/lists/* 

COPY --chown=${FIO_USERNAME} start.sh /

RUN ARCH=`uname -m` && ln -s /usr/lib/$ARCH-linux-gnu/libFLAC.so.12 /usr/lib/$ARCH-linux-gnu/libFLAC.so.8

COPY --from=ydotool --chown=${FIO_USERNAME} /ydotool/build/ydotool /usr/bin/

USER ${FIO_USERNAME}
WORKDIR ${FIO_HOME}

ENTRYPOINT ["/start.sh"]
