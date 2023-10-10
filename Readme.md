# Ticket Tracker

## Installation

-- Server

```
cd server && npm install
```

-- Web Application

```
cd app && npm install
```

## Server

### .env Settings

```
NODE_ENV
WEB_SERVER_DOMAIN
WEB_SERVER_PORT
NODE_TLS_REJECT_UNAUTHORIZED=0
GOOGLE_AUTH_CLIENT_ID
DEV_DATABASE_URL
DEV_DATABASE_USER=postgres
DEV_DATABASE_PASSWORD=
DATABASE_URL
POSTGRAPHILE_VISITOR
WEB_CLIENT_TOKEN
; EXPERT CONNECT
EXPERT_CONNECT_COMPANY_ID
EXPERT_CONNECT_X_SUBSCRIPTION_KEY
EXPRESS_CONNECT_TOKEN_TYPE=Bearer
EXPERT_CONNECT_ACCESS_TOKEN=NULL
EXPERT_CONNECT_AUTHORIZATION
EXPERT_TEAM_ID
EXPERT_CUSTOMER_ID
EXPERT_CONNECT_CLIENT_ID
EXPERT_CONNECT_ADVISOR_ID
EXPERT_CONNECT_CLIENT_SECRET
EXPERT_CONNECT_AUTH_URL=https://idt.expertconnect.deere.com/connect/token
EXPERT_CONNECT_REQUEST_URL=https://service-api.expertconnect.deere.com/api/v1/companies
EXPERT_CONNECT_APP_URL=https://app.expertconnect.deere.com/
EXPERT_CONNECT_SCOPE_WRITE=ec.partnerapi.client.write
EXPERT_CONNECT_SCOPE_READ=ec.partnerapi.client.read
EXPERT_CONNECT_WEBHOOK_AUTHORIZATION
; FORMANT
FORMANT_API_URL=https://api.formant.io
FORMANT_EMAIL
FORMANT_PASSWORD
FORMANT_USER_ID=NULL
FORMANT_ORGANIZATION_ID=NULL
FORMANT_WEBHOOK_AUTHORIZATION
FORMANT_ROLE_DEPLOYMENT
FORMANT_DEPLOYMENT_SERVICE_EMAIL
FORMANT_DEPLOYMENT_SERVICE_PASSWORD
FORMANT_REFRESH_TOKEN_EXPIRATION=0
FORMANT_REFRESH_TOKEN=NULL
FORMANT_UPLOAD_URL=https://upload.formant.io
;BEAR FLAG
BEAR_FLAG_RELAY_TOKEN
;JIRA
JIRA_TOKEN_TYPE=Basic
JIRA_TOKEN
JIRA_URL=https://bluerivertechnology.atlassian.net
JIRA_API=https://bluerivertechnology.atlassian.net/rest/api/2/issue/
JIRA_SANDBOX_URL=https://bluerivertechnology-sandbox-651.atlassian.net
JIRA_SANDBOX_API=https://bluerivertechnology-sandbox-651.atlassian.net/rest/api/2/issue/
; ATHENA
ATHENA_WEBHOOK_AUTHORIZATION
ATHENA_DB=jupiter
ATHENA_CATALOG=AwsDataCatalog
;AWS S3
STORAGE_ENDPOINT=blueriver-jupiter-deployment.s3.us-west-2.amazonaws.com
STORAGE_ACCESS_KEY_ID
STORAGE_SECRET_ACCESS_KEY
STORAGE_PACKAGES_BUCKET=blueriver-jupiter-device-metrics/ticket_tracker_status
;GMAIL
GMAIL_USER=blue.river.ticket.tracker@gmail.com
GMAIL_PASSWORD
GMAIL_TO
;BAG MONITORING
BAG_MONITORING_AUTHORIZATION
; InOrbit
IN_ORBIT_API_KEY
IN_ORBIT_WEBHOOK_KEY
IN_ORBIT_URI=api.inorbit.ai

```

### Start & Testing

-- Start

```
cd server && npm run start

```

-- Watch

```
cd server && npm run dev
```

-- Test

```
cd server && npm run test
```

### RESTful API

> server/api-routes

-- Tickets Endpoints & Handlers

> server/api-routes/tickets

-- Rules Endpoints & Handlers

> server/api-routes/rules

-- Scheduled Tasks Endpoints & Handlers

> server/api-routes/scheduled-tasks

## Web Application

-- Start

```
cd app && npm run start
```

-- Watch

```
cd app && npm run watch
```

-- Build

```
cd app && npm run build
```

## Deployment

-- Build Web Application

```
cd app && npm run build
```

-- Commit & Push

```
cd server && git add . && git commit -m "< Git Message>" && git push heroku master
```
