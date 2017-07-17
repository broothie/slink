# API Endpoints

## `root`
Prefix | Verb | URI Pattern | Controller#Action
-|-|-|-
`root` | GET | `/` | `static_pages#root`

## `users`
Prefix | Verb | URI Pattern | Controller#Action
-|-|-|-
`api_users` | GET | `api/users` | `api/users#index`
 | POST | `api/users` | `api/users#create`
`api_user` | GET | `api/users/:id` | `api/users#show`
 | PATCH | `api/users/:id` | `api/users#update`

 ## `teams`
 Prefix | Verb | URI Pattern | Controller#Action
 -|-|-|-
`api_teams` | GET | `api/teams` | `api/teams#index`
 | POST | `api/teams` | `api/teams#create`
`api_team` | GET | `api/teams/:id` | `api/teams#show`
 | PATCH | `api/teams/:id` | `api/teams#update`

 ## `channels`
 Prefix | Verb | URI Pattern | Controller#Action
 -|-|-|-
`api_channels` | GET | `api/channels` | `api/channels#index`
 | POST | `api/channels` | `api/channels#create`
`api_channel` | GET | `api/channels/:id` | `api/channels#show`
 | PATCH | `api/channels/:id` | `api/channels#update`

 ## `messages`
 Prefix | Verb | URI Pattern | Controller#Action
 -|-|-|-
`api_messages` | GET | `api/messages` | `api/messages#index`
| POST | `api/messages` | `api/messages#create`
`api_message` | GET | `api/messages/:id` | `api/messages#show`
| PATCH | `api/messages/:id` | `api/messages#update`
