class DashboardController < ApplicationController
  require 'cryptocompare'
  require 'json'

  def index
    coins = []
    hashes = []
    Cryptocompare::Price.full(['BTC', 'ETH', 'LTC', 'ETC', 'BTH', 'BCH', 'BAT'], 'USD').each do |hash|
      hashes << hash[1]
    end
    hashes[0].each do |sub|
      coin = Hash.new
      sub[1].each do |h|
        coin["Name"] = sub[0]
        coin["Details"] = h[1]
      end
      fromVolume = coin["Details"]["TOTALVOLUME24H"].to_i
      toVolume = coin["Details"]["TOTALVOLUME24HTO"].to_i
      coin["Details"]["TOTALVOLUMEPERC24H"] = (((toVolume.to_f - fromVolume.to_f) / toVolume.to_f) * 100).round
      coin["Details"]["CHANGEPCTDAY"] = coin["Details"]["CHANGEPCTDAY"] === 0 ? 0 : coin["Details"]["CHANGEPCTDAY"].truncate(2).to_f
      coins << coin
    end
    @coins = coins
  end

end
