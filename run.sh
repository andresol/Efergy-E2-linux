#!/bin/sh

sudo rtl_fm -f 433550000 -s 200000 -r 96000 -g 19.7 2>/dev/null | /opt/efergy/EfergyRPI_001 >> /opt/efergy/data/energy.csv

