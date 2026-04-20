export default function Page() {
  const keyword = "niche-bot-007"; // ここが自動で 200 個の単語に変わります

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      {/* ヒーローセクション: Apple風のインパクト */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            AI Niche Solution ✨
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            {keyword} の未来を、<br />AIで再定義する。
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {keyword} に特化した最新のAIエンジンを搭載。あなたのワークフローを、かつてないほどスマートに、そして劇的に加速させます。
          </p>
          
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://buy.stripe.com/test_aFaaEY6CZbezgUNeANgA800"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] text-center no-underline"
            >
              無料で試してみる
            </a>
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl border border-white/10 hover:bg-gray-800 transition-all">
              プレミアムプラン詳細
            </button>
          </div>
        </div>
      </section>

      {/* 広告セクション（ダミー表示） */}
      <div className="container mx-auto px-6 mb-20">
        <div className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-500 italic">
          [ 広告スペース：ここにGoogle AdSenseが自動挿入されます ]
        </div>
      </div>

      {/* AI対話・機能セクション（ここに石井さんボットの機能を後で流し込む） */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-16 backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{keyword} AI に質問する</h2>
          <div className="max-w-xl mx-auto space-y-6">
            <div className="h-40 bg-black/40 rounded-2xl border border-white/5 p-4 text-gray-500 text-sm">
              AI: {keyword} について何かお困りですか？ 下の入力欄から何でも聞いてください。
            </div>
            <div className="relative">
              <input type="text" placeholder="ここに悩みを入力してください..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              <button className="absolute right-2 top-2 px-6 py-2 bg-blue-600 rounded-lg text-sm font-bold">送信</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}