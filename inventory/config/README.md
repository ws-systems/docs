# Deployment

The Video Inventory Management system is packaged as a ready to deploy WAR file, which can be deployed to any modern Tomcat container. VIMS uses environment variables to load in the Vault server URL, App Role, and App Secret.

## Tomcat Configuration

To set environment variables in Tomcat, you will need to define them in either the `setenv.sh` or `setenv.bat` file. The script is placed either into CATALINA\_BASE/bin or into CATALINA\_HOME/bin directory and is named setenv.bat \(on Windows\) or setenv.sh \(on \*nix\). The file has to be readable.

By default the setenv script file is absent. If the script file is present both in CATALINA\_BASE and in CATALINA\_HOME, the one in CATALINA\_BASE is preferred.

In that file, you can define environment variables as you would on the base system \(linux, windows, etc.\). For example on Debian Linux, we would have `export VAULT_ADDR="https://url:port"`.

## Vault Configuration

You will need to create two secrets in the vault, one that will have the information for your production system, the other with your testing configuration. Information on how to setup Vault and AppRoles can be found in the [Vault Documentation](/vault/).

### DB Configuration

You will need to configure a MySQL Database with the [DDL provided](./erd.md). It is recommended that you create a user that has all permissions, however is restricted to only the database you just created. You can also implement IP restrictions if you desire.

### Environment Variables

| Name | Value |
| :--- | :--- |
| VAULT\_ADDR | Vault URL, including protocol and port number |
| VAULT\_ROLE | App Role ID |
| VAULT\_SECRET | App Role Secret |

### Vault Secrets

| Name | Value |
| :--- | :--- |
| db-url | jdbc:mysql://db\_host:3306/db\_name |
| db-url | Database Username |
| db-password | Database Password |
| project\_token | Unique Project Identifier for Session Tokens, If changed, all tokens will become invalid. |
| token\_cypher | Token Encryption Cypher. If changed, all tokens will become invalid. |
| token\_ttl | Token Longevity \(How long will a user stay logged in\) in Milliseconds Recommended Value: 86400000 -&gt; 24 Hours. |

Be sure to replace db\_host, db\_name and possibly the port with your MySQL server info

## Default Credentials

On the first run, provided there are no users in your User's table, a default Admin user will be created.

Username: `admin`

Password: `admin`

It is highly recommended that you either delete the admin user, or at a minimum change the admin password.
