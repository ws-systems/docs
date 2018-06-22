# Web Server Installation

Mediasite Recorder Monitor is split into two main components: the Web Server which manages the scheduling of jobs, sending notifications, and providing a UI for administrators to manage the installation; and an agent which runs jobs on the same network as the Mediasite Recorders. Before we can deploy any agents, we need to setup the Web Server, which orchestrates the agents.

## Vault Configuration
The deployment configuration is stored in a Vault Secret, and should contain all of the following information:
Key                   | Value
:-------------------- | :----------------------------------------------------------------
db-password         	| { DB PASSWORD }
db-url              	| jdbc:mysql://{ DB HOST }:{ DB PORT }/{ DB NAME }
db-user             	| { DB USER }
debug.showStacktrace	| false
issues.hideLink     	| true
issues.link         	| https://support.whitestar.systems/
odic.callbackURL    	| http://{ FQDN of Monitor Server }/auth/callback
oidc.clientId       	| { OPENID CLIENT ID }
oidc.discoveryURL   	| https://{ HUB URL }/hub/.well-known/openid-configuration
oidc.secret         	| { OPENID SECRET }
sso.update-info-URL 	| https://{ HUB URL }/hub/users/me

For the database, it simply needs to exist (and should be empty) with the specified DB User having all privileges on the requisite DB. The DB tables and relationships will be configured on first run by the ORM.

You will also need to register the Web Server as a service within Hub to obtain the Client ID and Secret. Remember to replace the `{ HUB URL }` with the FQDN of your hub installation to allow the server to pull the OpenID configuration, as well as to set the correct URL in the UI for the user to update their own information (which is how they would change their name, email, etc.). When setting the `odic.callbackURL`, it should point to the Web Server you are configuring; this tells Hub where to send users after they have logged-in. You will also need to whitelist this callback URL in the Service in Hub.

If you want users to be able to report issues, you can enable the *Report Issue Link* which is shown in the footer of the UI, as well as on the Error Pages by setting `issues.hideLink` to `false`, and specifying `issues.link` to the link reference, which could be to your ticketing system, or even a `mailto:` link.

## Docker Container Deployment
Once you have setup the Vault Secret, you are ready to deploy the docker container (assuming that you have already installed Docker on your host). The image is available in the Docker Store for free and can be pulled via the Docker CLI.
```sh
docker pull wssystems/mms
```

We can then create and run the container, being sure to set the Vault Environment Variables correctly.
```sh
docker create --name mms \
  -e VAULT_ADDR="{ VAULT URL }" \
  -e VAULT_ROLE="{ VAULT APP ROLE }" \
  -e VAULT_SECRET="{ VAULT APP ROLE SECRET }" \
  -e MS_APP="{ VAULT SECRET NAME }" \
  -p 7000:8080 \
  --restart=always \
  wssystems/mms

docker start mms
```

The Mediasite Recorder Monitor Service is now running on port 7000!

::: tip
If you want to host the service on a different port you can either change the configuration to have the service run on port 80 (HTTP); however, it is recommended that you use a reverse proxy (like Nginx) to reverse proxy the service, while providing support for HTTPS. HTTPS should be used, since the agents will obtain the Mediasite credentials via the API, as well as any external integrations you configure will be otherwise sent via Plain-Text.
:::
