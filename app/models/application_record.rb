class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def filter_content(content)
    @filters ||= %i[hate profanity sex].map do |matchlist|
      LanguageFilter::Filter.new matchlist: matchlist, replacement: :stars
    end

    @filters.reduce(content) { |c, f| f.sanitize(c) }
  end

  def check_content(content)
    @filters ||= %i[hate profanity sex].map do |matchlist|
      LanguageFilter::Filter.new matchlist: matchlist, replacement: :stars
    end

    @filters.any? { |f| f.match?(content) }
  end
end
