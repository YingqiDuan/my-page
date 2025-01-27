'use client'
import { useState, useEffect } from 'react'

// 定义时间状态的接口
interface TimeState {
  sanJose: string
  shanghai: string
  montreal: string
}

// 定义加密货币价格状态的接口
interface CryptoPrice {
  [key: string]: {
    price: string
    change: string
  }
}

// 定义 CoinCap API 返回的数据结构
interface CoinCapData {
  id: string
  priceUsd: string
  changePercent24Hr: string
}

const Home: React.FC = () => {
  const cryptoList = ['bitcoin', 'ethereum', 'solana']

  const [time, setTime] = useState<TimeState>({
    sanJose: '',
    shanghai: '',
    montreal: '',
  })

  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrice>({
    bitcoin: { price: 'Loading...', change: '' },
    ethereum: { price: 'Loading...', change: '' },
    solana: { price: 'Loading...', change: '' },
  })

  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime({
        sanJose: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' }),
        shanghai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' }),
        montreal: now.toLocaleTimeString('en-US', { timeZone: 'America/Toronto' }),
      })
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    const fetchCryptoPrices = async () => {
      try {
        const cryptoIds = cryptoList.join(',')

        const response = await fetch(
          `https://api.coincap.io/v2/assets?ids=${cryptoIds}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        const data: CoinCapData[] = json.data

        const updatedPrices: CryptoPrice = {}
        cryptoList.forEach((crypto) => {
          const coin = data.find((c) => c.id === crypto)
          if (coin) {
            updatedPrices[crypto] = {
              price: `$${parseFloat(coin.priceUsd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              change: `${parseFloat(coin.changePercent24Hr).toFixed(2)}%`,
            }
          } else {
            updatedPrices[crypto] = { price: 'Price not available', change: '' }
          }
        })

        setCryptoPrices(updatedPrices)
        setLastUpdated(new Date().toLocaleTimeString())
      } catch (error) {
        console.error('Error fetching crypto prices:', error)
        const errorPrices: CryptoPrice = {}
        cryptoList.forEach((crypto) => {
          errorPrices[crypto] = { price: 'Error fetching price', change: '' }
        })
        setCryptoPrices(errorPrices)
        setLastUpdated('Error')
      }
    }

    fetchCryptoPrices()
    const priceInterval = setInterval(fetchCryptoPrices, 60000)

    return () => {
      clearInterval(timeInterval)
      clearInterval(priceInterval)
    }
  }, [])

  return (
    <section className="text-center p-4 min-h-screen">
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Current Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md ">
            <h4 className="text-xl font-bold">San Jose</h4>
            <p className="text-lg mt-2">{time.sanJose}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md ">
            <h4 className="text-xl font-bold">Shanghai</h4>
            <p className="text-lg mt-2">{time.shanghai}</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md ">
            <h4 className="text-xl font-bold">Montreal</h4>
            <p className="text-lg mt-2">{time.montreal}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Cryptocurrency Prices</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cryptoList.map((crypto) => (
            <div
              key={crypto}
              className="p-4 border rounded-lg shadow-md"
            >
              <h4 className="text-xl font-bold capitalize">
                {crypto.charAt(0).toUpperCase() + crypto.slice(1)}
              </h4>
              <p className="text-lg mt-2">{cryptoPrices[crypto].price}</p>
              {cryptoPrices[crypto].change && (
                <p
                  className={`text-sm mt-1 ${
                    parseFloat(cryptoPrices[crypto].change) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {cryptoPrices[crypto].change}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm mt-2 text-gray-700">Last Updated: {lastUpdated}</p>
      </div>

      {/* 诗句部分 */}
      <div className="mt-12 p-6  rounded-lg shadow-md">
        <h3 className="text-2xl font-[KaiTi] font-bold mb-4 text-center">水调歌头</h3>
        <h4 className="text-lg font-[KaiTi] font-semibold mb-4 text-center">苏轼</h4>
        {/* 中文诗句 */}
        <p className="text-lg leading-relaxed tracking-wide font-[KaiTi]">
          丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。<br />
          <span className="block mt-2 text-xl font-[KaiTi]">
            明月几时有，把酒问青天。<br />
            不知天上宫阙，今夕是何年。<br />
            我欲乘风归去，又恐琼楼玉宇，高处不胜寒。<br />
            起舞弄清影，何似在人间。
          </span>
          <span className="block mt-4 text-xl font-[KaiTi]">
            转朱阁，低绮户，照无眠。<br />
            不应有恨，何事长向别时圆？<br />
            人有悲欢离合，月有阴晴圆缺，此事古难全。<br />
            但愿人长久，千里共婵娟。
          </span>
        </p>
        {/* 英文翻译 */}
        <p className="italic text-lg leading-relaxed  tracking-wide mt-6 font-serif">
          <span className="block mt-2 font-bold">
            Tune: Prelude to Water Melody
          </span>
          <span className="block mt-2 font-semibold ">
            Su Shi (1037-1101)
          </span>
          <span className="block mt-2 ">
            (Mid-Autumn Festival, 1076,<br />
            Drinking till dawn, intoxicated with cheer,<br />
            I pen this verse, missing my brother Ziyou dear.)
          </span>
          <span className="block mt-2">
            When did this bright moon first grace the night?<br />
            Raising my cup, I question heaven's height.<br />
            In those lunar palaces of purest white,<br />
            What calendar marks their celestial date?
          </span>
          <span className="block mt-4">
            I yearn to ride the wind, ascend the spheres,<br />
            Yet fear those jade-carved towers through the years—<br />
            Their frosty zeniths chill the bold.<br />
            Dancing with shadows, light and free—<br />
            What compares to mortal revelry?
          </span>
          <span className="block mt-4">
            You glide past crimson towers aglow,<br />
            Dip through carved lattices, watch my sorrow,<br />
            Your beams caress the sleepless below.<br />
            Why, Moon, when loved ones part, must you shine whole?
          </span>
          <span className="block mt-4">
            Men taste joy and grief, meetings, farewells' sting;<br />
            You wax and wane through shadowed cycles swing.<br />
            Since ancient times, perfection's fleeting thing.<br />
            Let us pray for health and lasting breath,<br />
            To share your glow across miles of deathless depth.
          </span>
          <span>(Translated by DeepSeek R1)</span>
        </p>
      </div>
    </section>
  )
}

export default Home
