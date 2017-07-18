# Schema


## `users`
Column Name | Data Type | Details
-|-|-
`id` | integer | `null: false`, primary key
`username` | string | `null: false`, unique
`password_digest` | string | `null: false`
`session_token` | string | `null: false`, unique
`icon_url` | string |

**Model Associations**
- `has_many`
  - `teams`
  - `channels`
  - `messages`
  - owned_teams (`team` model through `owner_id`)


## `memberships` (join table)
Column Name | Data Type | Details
-|-|-
`user_id` | integer | `null: false`, foreign key
`team_id` | integer | `null: false`, foreign key

*Joins the users and teams tables*


## `subscriptions` (join table)
Column Name | Data Type | Details
-|-|-
`user_id` | integer | `null: false`, foreign key
`channel_id` | integer | `null: false`, foreign key

*Joins the users and channels tables*


## `teams`
Column Name | Data Type | Details
-|-|-
`id` | integer | `null: false`, primary key
`name` | string |`null: false`
`owner_id` | integer | foreign key

**Model Associations**
- `has_many`
  - `users`
  - `channels`
- `belongs_to`
  - owner (`user` model)


## `channels`
Column Name | Data Type | Details
-|-|-
`id` | integer | `null: false`, primary key
`name` | string | `null: false`
`team_id` | integer | `null: false`, foreign key

**Model Associations**
- `has_many`
  - `messages`
  - `users`
- `belongs_to`
  - `team`


## `messages`
Column Name | Data Type | Details
-|-|-
`id` | integer | `null: false`, primary key
`body` | string | `null: false`
`timestamp` | datetime | `null:false`, indexed
`author_id` | integer | `null: false`, foreign key
`channel_id` | integer | `null: false`, foreign key

**Model Associations**
- `belongs_to`
  - `user`
  - `channel`
