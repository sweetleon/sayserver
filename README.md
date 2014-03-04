sayserver
=========
This tiny Node app takes user input (CGI variable `message`) and speaks it aloud. This is only useful for servers in
loocations where their speakers can be heard. For example, I use this when I'm playing ping pong while my builds/tests
run. After they complete, I `curl` the URL of a server near the ping pong tables and it tells me to get back to work.

`
curl http://servername:8888/?message=Get+back+to+work
`

Requirements
============

A server that has the [say (Mac)](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/say.1.html) or [espeak (Linux/Windows)](http://espeak.sourceforge.net/) commands. If you use another text-to-speech package it should be pretty easy to add that.