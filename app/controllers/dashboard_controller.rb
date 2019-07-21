class DashboardController < ApplicationController
  require 'cryptocompare'
  require 'json'

  def index
    coins = []
    Cryptocompare::Price.full(['BTC', 'ETH', 'LTC', 'ETC', 'BTH', 'TRX', 'BAT', 'REQ', 'XRP', 'EOS'], 'USD')["DISPLAY"].map do |hash|
      hash[1].each do |sub|
        coin = Hash.new
        sub.each do |h|
          coin["Name"] = hash[0]
          coin["Details"] = h
        end
        coins << coin
      end
    end
    @coins = coins
  end

end
