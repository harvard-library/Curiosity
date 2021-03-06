# frozen_string_literal: true

FactoryBot.define do
  factory :role, class: Spotlight::Role do
    resource { FactoryBot.build(:exhibit) }
    role { 'curator' }
    user
  end
end
