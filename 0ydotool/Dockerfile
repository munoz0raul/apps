FROM debian:bullseye-20220316-slim

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
    fi && \
    apt-get update -y && \
    apt-get install -y --no-install-recommends \
                       git \
                       pkg-config \
                       cmake \
                       scdoc \
                       build-essential \
                       ca-certificates && \
    apt-get clean && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*


RUN git clone  https://github.com/ReimuNotMoe/ydotool
RUN cd ydotool; mkdir build && cd build ; cmake .. ; make -j `nproc`

COPY --chown=${FIO_USERNAME} start.sh /
RUN cp /ydotool/build/ydotool /usr/bin/

USER ${FIO_USERNAME}
WORKDIR ${FIO_HOME}

ENTRYPOINT ["/start.sh"]