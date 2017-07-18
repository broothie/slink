# View Endpoints


## `root`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `/` | `static_pages#root`


# API Endpoints
*All API endpoints are rendered in JSON format*


## `users`
Verb | URI Pattern | Controller#Action
-|-|-
POST | `/api/users` | `api/users#create`


## `session`
Verb | URI Pattern | Controller#Action
-|-|-
POST | `/api/session` | `api/session#create`
DELETE | `/api/session/:id` | `api/session#destroy`


## `teams`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `/api/users/:user_id/teams` | `api/teams#index`
GET | `/api/teams` | `api/teams#index`
POST | `/api/teams` | `api/teams#create`


## `memberships`
Verb | URI Pattern | Controller#Action
-|-|-
POST | `/api/memberships` | `api/memberships#create`
DELETE | `/api/memberships/:id` | `api/memberships#destroy`


## `channels`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `/api/teams/:team_id/channels` | `api/channels#index`
POST | `/api/teams/:team_id/channels` | `api/channels#create`
GET | `/api/channels/:id` | `api/channels#show`


## `subscriptions`
Verb | URI Pattern | Controller#Action
-|-|-
POST | `/api/subscriptions` | `api/subscriptions#create`
DELETE | `/api/subscriptions/:id` | `api/subscriptions#destroy`


## `messages`
Verb | URI Pattern | Controller#Action
 -|-|-
POST | `/api/channels/:channel_id/messages` | `api/messages#create`
