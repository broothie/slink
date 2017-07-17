# API Endpoints

## `root`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `/` | `static_pages#root`

## `users`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `api/users` | `api/users#index`
POST | `api/users` | `api/users#create`
GET | `api/users/:id` | `api/users#show`
PATCH | `api/users/:id` | `api/users#update`

## `teams`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `api/teams` | `api/teams#index`
POST | `api/teams` | `api/teams#create`
GET | `api/teams/:id` | `api/teams#show`
PATCH | `api/teams/:id` | `api/teams#update`

## `channels`
Verb | URI Pattern | Controller#Action
-|-|-
GET | `api/channels` | `api/channels#index`
POST | `api/channels` | `api/channels#create`
GET | `api/channels/:id` | `api/channels#show`
PATCH | `api/channels/:id` | `api/channels#update`

 ## `messages`
Verb | URI Pattern | Controller#Action
 -|-|-
GET | `api/messages` | `api/messages#index`
POST | `api/messages` | `api/messages#create`
GET | `api/messages/:id` | `api/messages#show`
PATCH | `api/messages/:id` | `api/messages#update`
