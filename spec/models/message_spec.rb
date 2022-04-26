require 'rails_helper'

RSpec.describe Message, type: :model do
  let(:message) { FactoryBot.build(:message, body: body) }

  describe '#sanitize_message' do
    let(:sanitize_message) { message.sanitize_message }

    context 'when message has swearz' do
      let(:body) { 'ur shit' }

      it 'sanitizes the message' do
        expect { sanitize_message }.to change { message.body }.from('ur shit').to(match(/ur [$@!#%]{4}/))
      end
    end

    context 'when message has gay' do
      let(:body) { 'ur gay' }

      it 'sanitizes the message' do
        expect { sanitize_message }.not_to change { message.body }
      end
    end
  end
end
