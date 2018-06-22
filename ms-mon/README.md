# MediaSite Recorder Monitor

Mediasite Recorder Monitor is designed to keep an eye on your fleet of Mediasite recorders to ensure maximum uptime and peak performance. Ensuring that recorders are online and ready to record is critical to capturing content when the time comes, and Mediasite Recorder Monitor can take care of that for you.

Split into a Web Server and an Agent, Mediasite Recorder Monitor can be deployed outside of your organization's network will still maintaining access to the recorders and their internal APIs. Both are available as Docker Containers for quick and easy deployment.

Authentication with the Web UI is managed via [Hub](/hub/), via OpenIDConnect to reduce the account management overhead. You will need a installation of Hub (version 2017.2 or later) that is accessible to the Web Server, as well as a Hub User who has the ability to create new services.
