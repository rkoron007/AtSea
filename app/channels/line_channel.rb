class LineChannel < ApplicationCable::Channel
  # def subscribed
  #   # stream_from "some_channel"
  #   @line = Line.find_by(id: params[:room])
  #   stream_for @line
  # end

  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end

  # def received(data)
  #       LineChannel.broadcast_to(@line, {line: @line, users:
  #   @line.waiting_users})
  # end
end
