// src/components/PoemSection.tsx
'use client';

const PoemSection = () => (
  <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn">
    <h3 className="text-2xl font-[KaiTi] font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
      水调歌头
    </h3>
    <h4 className="text-lg font-[KaiTi] font-semibold mb-4 text-center text-gray-600 dark:text-gray-300">
      苏轼
    </h4>
    
    <div className="space-y-6">
      {/* 中文诗句 */}
      <div className="text-lg leading-relaxed tracking-wide font-[KaiTi] text-center text-gray-700 dark:text-gray-300">
        <p>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。</p>
        <p className="mt-4 text-xl">
          明月几时有，把酒问青天。<br />
          不知天上宫阙，今夕是何年。<br />
          我欲乘风归去，又恐琼楼玉宇，高处不胜寒。<br />
          起舞弄清影，何似在人间。
        </p>
        <p className="mt-6 text-xl">
          转朱阁，低绮户，照无眠。<br />
          不应有恨，何事长向别时圆？<br />
          人有悲欢离合，月有阴晴圆缺，此事古难全。<br />
          但愿人长久，千里共婵娟。
        </p>
      </div>

      {/* 英文翻译 */}
      <div className="italic text-lg leading-relaxed tracking-wide mt-6 font-serif text-center text-gray-600 dark:text-gray-400">
        <p className="font-bold">Tune: Prelude to Water Melody</p>
        <p className="font-semibold mt-2">Su Shi (1037-1101)</p>
        <p className="mt-2">
          (Mid-Autumn Festival, 1076,<br />
          Drinking till dawn, intoxicated with cheer,<br />
          I pen this verse, missing my brother Ziyou dear.)
        </p>
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
      </div>
    </div>
  </div>
);

export default PoemSection;