FROM nodered/node-red:1.3.7-10

#USER node-red

# Copy package.json to the WORKDIR so npm builds all
# of your added nodes modules for Node-RED
#COPY package.json .
#RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production

# Copy _your_ Node-RED project files into place
# NOTE: This will only work if you DO NOT later mount /data as an external volume.
#       If you need to use an external volume for persistence then
#       copy your settings and flows files to that volume instead.


#RUN git clone https://github.com/munoz0raul/nodered.git
COPY settings.js /data/settings.js
COPY flows_cred.json /data/flows_cred.json
COPY flows.json /data/flows.json

# You should add extra nodes via your package.json file but you can also add them here:
RUN npm install node-red-node-serialport@0.15.0

RUN npm install node-red-contrib-influxdb@0.6.1

RUN npm install node-red-contrib-device-stats@1.1.2

RUN npm install @candy-line/node-red-contrib-omron-2jcie-bu@1.0.1

RUN npm install node-red-node-random@0.4.0