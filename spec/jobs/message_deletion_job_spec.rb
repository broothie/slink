require 'rails_helper'

RSpec.describe MessageDeletionJob, type: :job do
  let(:job) { MessageDeletionJob.new }
  let(:perform!) { job.perform }
  let(:channel) { FactoryBot.create(:channel) }
  let(:max) { 10 }
  let(:messages) { Array.new(count) { FactoryBot.create(:message, channel: channel) } }

  before do
    allow(ENV).to receive(:fetch).with('MAX_MESSAGE_COUNT', 9000).and_return(max)

    messages
  end

  context 'when no surplus' do
    let(:count) { 5 }

    it 'deletes nothing' do
      expect(Message).not_to receive(:destroy)

      expect { perform! }.not_to change { Message.count }
    end
  end

  context 'when surplus' do
    let(:count) { 15 }

    it 'deletes message surplus' do
      expect { perform! }.to change { Message.count }.from(count).to(max)
    end

    it 'deletes the earliest messages' do
      message_ids = messages.sort_by { |message| message.created_at }.map(&:id)
      ids_to_be_deleted = message_ids.take(count - max)

      expect { perform! }
        .to change { ids_to_be_deleted.all? { |id| Message.exists?(id) } }.from(true).to(false)
    end

    it 'does not delete other messages' do
      message_ids = messages.sort_by { |message| message.created_at }.map(&:id)
      ids_to_be_deleted = message_ids.drop(count - max)

      expect { perform! }
        .not_to change { ids_to_be_deleted.all? { |id| Message.exists?(id) } }
    end
  end
end
