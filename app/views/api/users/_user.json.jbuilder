user.attributes.each do |(key, value)|
  next if ['password_digest', 'session_token'].include?(key)
  json.key_format! camelize: :lower
  json.set! key, value
end
