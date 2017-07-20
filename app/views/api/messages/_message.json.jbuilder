message.attributes.each do |(key, value)|
  json.key_format! camelize: :lower
  json.set! key, value
end
json.author_screenname message.author.screenname
