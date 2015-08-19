# Efergy-E2-linux
Efergy E2 Linux using RTL_SDR, gnuplot, logroate

Use Efergy E2 on a linux server to display energy usage. It uses RTL_SDR to capture the energy output wireless. Gnuplot to create 
daily charts. Logroate for keeping the energy output cvs file in daily files. Last use apache on data/main.html do show it on a
webserver.

crontab:

0,30  *   * * *   root    /usr/bin/gnuplot /opt/efergy/plotter.gpl
TODO: change crontab on daily for logroate.


