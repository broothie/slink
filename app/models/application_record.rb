class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  MATCH_LISTS = %i[hate profanity sex violence].freeze
  EXCEPTION_LIST = %w[gay].freeze

  def filter_content(content)
    @filters ||= MATCH_LISTS.map do |matchlist|
      LanguageFilter::Filter.new matchlist: matchlist, exceptionlist: EXCEPTION_LIST, replacement: :garbled
    end

    @filters.reduce(content) { |c, f| f.sanitize(c) }
  end

  def check_content(content)
    @filters ||= MATCH_LISTS.map do |matchlist|
      LanguageFilter::Filter.new matchlist: matchlist, exceptionlist: EXCEPTION_LIST, replacement: :garbled
    end

    @filters.any? { |f| f.match?(content) }
  end
end
