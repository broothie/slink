user.attributes.each do |(key, value)|
  json.key_format! camelize: :lower
  json.set! key, value
end
