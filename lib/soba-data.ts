export interface SobaTerm {
  id: string;
  reading: string;
  term: string;
  description: string;
  imageUrl?: string;
}

export interface KanaGroup {
  kana: string;
  terms: SobaTerm[];
}

export interface RowGroup {
  row: string;
  kanaList: string[];
}

export const ROWS: RowGroup[] = [
  { row: 'あ行', kanaList: ['あ', 'い', 'う', 'え', 'お'] },
  { row: 'か行', kanaList: ['か', 'き', 'く', 'け', 'こ'] },
  { row: 'さ行', kanaList: ['さ', 'し', 'す', 'せ', 'そ'] },
  { row: 'た行', kanaList: ['た', 'ち', 'つ', 'て', 'と'] },
  { row: 'な行', kanaList: ['な', 'に', 'ぬ', 'ね', 'の'] },
  { row: 'は行', kanaList: ['は', 'ひ', 'ふ', 'へ', 'ほ'] },
  { row: 'ま行', kanaList: ['ま', 'み', 'む', 'め', 'も'] },
  { row: 'や行', kanaList: ['や', 'ゆ', 'よ'] },
  { row: 'ら行', kanaList: ['ら', 'り', 'る', 'れ', 'ろ'] },
  { row: 'わ行', kanaList: ['わ', 'を', 'ん'] },
];

export const SOBA_TERMS: SobaTerm[] = [
  // あ行
  { id: 'aozora-soba', reading: 'あおぞらそば', term: '青空蕎麦', description: '屋外で食べる蕎麦のこと。野外イベントや縁日などで提供されることが多い。開放的な雰囲気の中で食べる蕎麦は格別の味わいがある。' },
  { id: 'agemaki-soba', reading: 'あげまきそば', term: '揚げ巻蕎麦', description: '蕎麦を薄く伸ばして巻き、油で揚げたもの。サクサクとした食感が特徴で、おやつや酒の肴として親しまれている。' },
  { id: 'asagiri-soba', reading: 'あさぎりそば', term: '朝霧蕎麦', description: '朝霧が立ち込める涼しい気候で栽培された蕎麦。寒暖差が大きい環境で育つため、甘みと香りが強いとされる。' },
  { id: 'ajimu-soba', reading: 'あじむそば', term: '安心院蕎麦', description: '大分県宇佐市安心院町で生産される蕎麦。火山灰土壌で栽培され、風味豊かな味わいが特徴。' },
  { id: 'atsumori-soba', reading: 'あつもりそば', term: '熱盛り蕎麦', description: '茹でたての蕎麦を冷水で締めずにそのまま盛り付けたもの。蕎麦本来の香りと甘みを楽しめる。' },
  
  { id: 'izumo-soba', reading: 'いずもそば', term: '出雲蕎麦', description: '島根県出雲地方の郷土料理。殻ごと挽いたそば粉を使用し、黒っぽい色と強い香りが特徴。割子そばや釜揚げそばが有名。' },
  { id: 'inaka-soba', reading: 'いなかそば', term: '田舎蕎麦', description: '殻を多く含んだそば粉で打った蕎麦。太めで黒っぽく、素朴で力強い風味が特徴。' },
  { id: 'itasoba', reading: 'いたそば', term: '板蕎麦', description: '山形県の郷土料理。長い木箱に盛り付けられた蕎麦で、大人数で分け合って食べる。' },
  { id: 'ichibansoba', reading: 'いちばんそば', term: '一番蕎麦', description: '製粉の最初に出る最も上質な部分のそば粉で打った蕎麦。白く上品な味わいが特徴。' },
  { id: 'irimame-soba', reading: 'いりまめそば', term: '炒り豆蕎麦', description: '炒った大豆をトッピングした蕎麦。香ばしさと食感のアクセントが楽しめる。' },
  
  { id: 'udon-soba', reading: 'うどんそば', term: 'うどんそば', description: 'うどんと蕎麦を合わせた麺。両方の良さを併せ持つ。' },
  { id: 'uzura-soba', reading: 'うずらそば', term: '鶉蕎麦', description: 'うずらの卵を添えた蕎麦。まろやかな味わいが楽しめる。' },
  { id: 'umegae-soba', reading: 'うめがえそば', term: '梅枝蕎麦', description: '梅を練り込んだ変わり蕎麦。ほのかな酸味と香りが特徴。' },
  { id: 'uwajima-soba', reading: 'うわじまそば', term: '宇和島蕎麦', description: '愛媛県宇和島市の郷土蕎麦。独特の風味がある。' },
  { id: 'usu-soba', reading: 'うすそば', term: '薄蕎麦', description: '薄く切った蕎麦。喉越しが良く繊細な味わい。' },
  
  { id: 'echizen-soba', reading: 'えちぜんそば', term: '越前蕎麦', description: '福井県の郷土料理。大根おろしを添えて食べる「おろしそば」が有名。辛み大根の爽やかな辛さが蕎麦の風味を引き立てる。' },
  { id: 'edo-soba', reading: 'えどそば', term: '江戸蕎麦', description: '江戸時代に発展した蕎麦文化の総称。二八蕎麦や藪蕎麦、更科蕎麦など様々な流派がある。' },
  { id: 'ebi-tempura-soba', reading: 'えびてんぷらそば', term: '海老天蕎麦', description: '海老の天ぷらをのせた蕎麦。カリッとした天ぷらと蕎麦の組み合わせが人気。' },
  { id: 'enoki-soba', reading: 'えのきそば', term: 'えのき蕎麦', description: 'えのき茸をトッピングした蕎麦。さっぱりとした味わい。' },
  { id: 'eboshi-soba', reading: 'えぼしそば', term: '烏帽子蕎麦', description: '烏帽子型に盛り付けた見た目が美しい蕎麦。' },
  
  { id: 'ooiri-soba', reading: 'おおいりそば', term: '大入り蕎麦', description: '劇場・寄席などで客の大入りの祝いに、従業員に渡されるそば。最初は現物支給だったが、明治中頃から「大入袋」に現金を入れて渡すようになった。' },
  { id: 'oomisoka-soba', reading: 'おおみそかそば', term: '大晦日そば', description: '大晦日に食べる年越しそば。一年の厄を断ち切り、長寿を願って食べる習慣がある。細く長い蕎麦にあやかり、長寿や家運長命を願う。' },
  { id: 'oohiramori', reading: 'おおひらもり', term: '大平盛り', description: '大きな平皿に蕎麦を盛り付けたもの。宴会や大人数での食事に用いられる。見た目にも華やかで、取り分けやすい。' },
  { id: 'oyako-nanban', reading: 'おやこなんばん', term: '親子南蛮', description: '鶏肉と卵を使った南蛮蕎麦。親子丼のように鶏肉と卵の組み合わせを蕎麦で楽しむ。' },
  { id: 'oharagi-soba', reading: 'おはらぎそば', term: '大原木蕎麦', description: '水で練ったそば粉に五分立ての卵白を加えて木枠に入れて蒸したものを細長く切り、それを6本程度にまとめて海苔でくくったもの。京都の大原女（おはらめ）が売る薪に似ていることから名づけられた。5束ずつ器に盛り、そばつゆと薬味で食べる。', imageUrl: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=400&fit=crop' },
  
  // か行
  { id: 'kake-soba', reading: 'かけそば', term: 'かけ蕎麦', description: '温かいつゆをかけた最もシンプルな蕎麦。蕎麦本来の味を楽しめる基本の一品。' },
  { id: 'kamo-nanban', reading: 'かもなんばん', term: '鴨南蛮', description: '鴨肉とねぎを使った温かい蕎麦。鴨の旨みがつゆに溶け出し、深い味わいを生む。' },
  { id: 'kaeshi', reading: 'かえし', term: '返し', description: '醤油、みりん、砂糖を合わせて寝かせた蕎麦つゆのベース。熟成させることで味がまろやかになる。' },
  { id: 'kake-seiro', reading: 'かけせいろ', term: 'かけせいろ', description: 'せいろに盛った蕎麦に温かいつゆをかけて食べるスタイル。' },
  { id: 'kamaboko-soba', reading: 'かまぼこそば', term: '蒲鉾蕎麦', description: '蒲鉾をトッピングした蕎麦。彩りが美しい。' },
  
  { id: 'kitsune-soba', reading: 'きつねそば', term: 'きつね蕎麦', description: '甘く煮た油揚げをのせた蕎麦。関西では「たぬき」と呼ばれることも。' },
  { id: 'kiji-soba', reading: 'きじそば', term: '雉蕎麦', description: '雉肉を使った贅沢な蕎麦。野趣あふれる味わい。' },
  { id: 'kiku-soba', reading: 'きくそば', term: '菊蕎麦', description: '食用菊を添えた季節の蕎麦。秋の風情を感じる一品。' },
  { id: 'kinoko-soba', reading: 'きのこそば', term: 'きのこ蕎麦', description: '様々なきのこをトッピングした蕎麦。秋の味覚を楽しめる。' },
  { id: 'kibi-soba', reading: 'きびそば', term: '黍蕎麦', description: '黍を練り込んだ変わり蕎麦。黄色い色と独特の風味。' },
  
  { id: 'kurumi-soba', reading: 'くるみそば', term: '胡桃蕎麦', description: 'くるみを使ったつゆで食べる蕎麦。長野県の郷土料理で、くるみの香ばしさとコクが特徴。' },
  { id: 'kuro-soba', reading: 'くろそば', term: '黒蕎麦', description: '殻を多く含んだそば粉で打った色の濃い蕎麦。風味が強い。' },
  { id: 'kuzu-soba', reading: 'くずそば', term: '葛蕎麦', description: '葛粉を加えたなめらかな蕎麦。つるりとした食感。' },
  { id: 'kuwai-soba', reading: 'くわいそば', term: '慈姑蕎麦', description: 'くわいを添えた正月向けの蕎麦。縁起物として。' },
  { id: 'kuki-soba', reading: 'くきそば', term: '茎蕎麦', description: '蕎麦の茎を使った珍しい蕎麦。' },
  
  { id: 'keshikiri', reading: 'けしきり', term: 'けしきり', description: 'けしの実を練り込んだ変わり蕎麦。香ばしい風味が特徴。' },
  
  { id: 'korokke-soba', reading: 'ころっけそば', term: 'コロッケ蕎麦', description: 'コロッケをのせた蕎麦。駅蕎麦の人気メニュー。つゆを吸ったコロッケが美味。' },
  { id: 'konbu-soba', reading: 'こんぶそば', term: '昆布蕎麦', description: '昆布を練り込んだ蕎麦。旨みと風味が加わる。' },
  { id: 'ko-soba', reading: 'こそば', term: '粉蕎麦', description: '細かく挽いたそば粉で作る蕎麦。' },
  { id: 'kogane-soba', reading: 'こがねそば', term: '黄金蕎麦', description: '卵黄を練り込んだ黄色い蕎麦。' },
  { id: 'kori-soba', reading: 'こおりそば', term: '氷蕎麦', description: '氷を添えた冷たい蕎麦。真夏に最適。' },
  
  // さ行
  { id: 'sarashina-soba', reading: 'さらしなそば', term: '更科蕎麦', description: 'そばの実の中心部分だけを使った白い蕎麦。上品でのど越しが良く、繊細な風味が特徴。' },
  { id: 'sansai-soba', reading: 'さんさいそば', term: '山菜蕎麦', description: 'わらび、ぜんまいなど山菜をのせた蕎麦。春の味覚を楽しめる。' },
  { id: 'saru-soba', reading: 'さるそば', term: 'ざる蕎麦', description: '竹ざるに盛った冷たい蕎麦。海苔がのっているものも多い。' },
  { id: 'sanban-soba', reading: 'さんばんそば', term: '三番蕎麦', description: '製粉で三番目に出る部分のそば粉。風味が強い。' },
  { id: 'sakura-soba', reading: 'さくらそば', term: '桜蕎麦', description: '桜の花や葉を練り込んだ春らしい蕎麦。' },
  
  { id: 'shinshu-soba', reading: 'しんしゅうそば', term: '信州蕎麦', description: '長野県（信州）の蕎麦。冷涼な気候で育った蕎麦は香り高く、日本三大蕎麦の一つ。' },
  { id: 'shippoku-soba', reading: 'しっぽくそば', term: 'しっぽく蕎麦', description: '様々な具材をのせた贅沢な蕎麦。かまぼこ、しいたけ、三つ葉などが入る。' },
  { id: 'shio-soba', reading: 'しおそば', term: '塩蕎麦', description: '塩だけで味付けした蕎麦。蕎麦本来の味を楽しむ。' },
  { id: 'shiro-soba', reading: 'しろそば', term: '白蕎麦', description: 'そばの実の中心部で作る白い蕎麦。上品な味わい。' },
  { id: 'shimeji-soba', reading: 'しめじそば', term: 'しめじ蕎麦', description: 'しめじをトッピングした蕎麦。' },
  
  { id: 'su-soba', reading: 'すそば', term: '素蕎麦', description: '何も具のない蕎麦。シンプルに蕎麦を味わう。' },
  { id: 'sudachi-soba', reading: 'すだちそば', term: 'すだち蕎麦', description: 'すだちを添えた爽やかな蕎麦。夏に人気。' },
  { id: 'sunomono-soba', reading: 'すのものそば', term: '酢の物蕎麦', description: '酢で味付けした冷たい蕎麦。' },
  { id: 'suji-soba', reading: 'すじそば', term: '筋蕎麦', description: '牛すじをトッピングした蕎麦。' },
  { id: 'suzu-soba', reading: 'すずそば', term: '鈴蕎麦', description: '錫の器で供される蕎麦。' },
  
  { id: 'seiro-soba', reading: 'せいろそば', term: 'せいろ蕎麦', description: '蒸籠（せいろ）に盛り付けた蕎麦。ざる蕎麦との違いは海苔の有無など諸説あり。' },
  { id: 'seri-soba', reading: 'せりそば', term: '芹蕎麦', description: '芹を添えた香り高い蕎麦。春の七草の一つ。' },
  { id: 'senryo-soba', reading: 'せんりょうそば', term: '千両蕎麦', description: '縁起の良い名前の蕎麦。' },
  { id: 'senbei-soba', reading: 'せんべいそば', term: '煎餅蕎麦', description: '蕎麦粉で作った煎餅を添えた蕎麦。' },
  { id: 'semi-soba', reading: 'せみそば', term: '蝉蕎麦', description: '蝉の形に切った蕎麦。' },
  
  { id: 'soba-gaki', reading: 'そばがき', term: 'そばがき', description: 'そば粉を熱湯で練った素朴な料理。蕎麦本来の風味を最も感じられる食べ方の一つ。' },
  { id: 'soba-yu', reading: 'そばゆ', term: '蕎麦湯', description: '蕎麦を茹でた湯。栄養豊富で、つゆを割って飲むのが一般的。' },
  { id: 'soba-miso', reading: 'そばみそ', term: '蕎麦味噌', description: '蕎麦の実を味噌と合わせた調味料。' },
  { id: 'soba-cha', reading: 'そばちゃ', term: '蕎麦茶', description: '蕎麦の実を焙煎して作るお茶。香ばしい風味。' },
  { id: 'soba-zushi', reading: 'そばずし', term: '蕎麦寿司', description: '蕎麦を酢飯代わりに使った巻き寿司。' },
  
  // た行
  { id: 'tanuki-soba', reading: 'たぬきそば', term: 'たぬき蕎麦', description: '揚げ玉（天かす）をのせた蕎麦。関西では「ハイカラ」とも呼ばれる。' },
  { id: 'tamagotoji-soba', reading: 'たまごとじそば', term: '卵とじ蕎麦', description: '溶き卵でとじた温かい蕎麦。優しい味わい。' },
  { id: 'take-soba', reading: 'たけそば', term: '竹蕎麦', description: '竹の器で供される風流な蕎麦。' },
  { id: 'tai-soba', reading: 'たいそば', term: '鯛蕎麦', description: '鯛をのせた高級な蕎麦。祝い事に。' },
  { id: 'taki-soba', reading: 'たきそば', term: '滝蕎麦', description: '滝のように盛り付けた見た目が美しい蕎麦。' },
  
  { id: 'chikara-soba', reading: 'ちからそば', term: '力蕎麦', description: '餅を入れた蕎麦。力がつくことからこの名がある。正月や寒い時期に人気。' },
  { id: 'chirashi-soba', reading: 'ちらしそば', term: 'ちらし蕎麦', description: '様々な具材を散らした華やかな蕎麦。' },
  { id: 'cha-soba', reading: 'ちゃそば', term: '茶蕎麦', description: '抹茶を練り込んだ緑色の蕎麦。宇治が有名。' },
  { id: 'chidori-soba', reading: 'ちどりそば', term: '千鳥蕎麦', description: '千鳥模様の器で供される蕎麦。' },
  { id: 'chikuwa-soba', reading: 'ちくわそば', term: '竹輪蕎麦', description: 'ちくわをのせた蕎麦。' },
  
  { id: 'tsukimi-soba', reading: 'つきみそば', term: '月見蕎麦', description: '生卵をのせた蕎麦。黄身が満月に見えることから。' },
  { id: 'tsuke-soba', reading: 'つけそば', term: 'つけ蕎麦', description: '蕎麦をつゆにつけて食べるスタイル。' },
  { id: 'tsumire-soba', reading: 'つみれそば', term: 'つみれ蕎麦', description: 'つみれ（魚のすり身団子）入りの蕎麦。' },
  { id: 'tsuyu', reading: 'つゆ', term: '蕎麦つゆ', description: '蕎麦を食べるためのつゆ。だしと返しで作る。' },
  { id: 'tsuru-soba', reading: 'つるそば', term: '鶴蕎麦', description: '縁起の良い鶴にちなんだ蕎麦。' },
  
  { id: 'tempura-soba', reading: 'てんぷらそば', term: '天ぷら蕎麦', description: '天ぷらをのせた蕎麦。海老天が定番だが、野菜天も人気。' },
  { id: 'teuchi-soba', reading: 'てうちそば', term: '手打ち蕎麦', description: '機械を使わず手で打った蕎麦。職人の技が光る。' },
  { id: 'tenseiro', reading: 'てんせいろ', term: '天せいろ', description: '天ぷらとせいろ蕎麦のセット。' },
  { id: 'tendon-soba', reading: 'てんどんそば', term: '天丼蕎麦', description: '天丼と蕎麦のセット。' },
  { id: 'teppan-soba', reading: 'てっぱんそば', term: '鉄板蕎麦', description: '鉄板で焼いた蕎麦。' },
  
  { id: 'togakushi-soba', reading: 'とがくしそば', term: '戸隠蕎麦', description: '長野県戸隠の蕎麦。ぼっち盛りという独特の盛り方が特徴。日本三大蕎麦の一つ。' },
  { id: 'tororo-soba', reading: 'とろろそば', term: 'とろろ蕎麦', description: 'すりおろした山芋をかけた蕎麦。滋養強壮に良いとされる。' },
  { id: 'tofu-soba', reading: 'とうふそば', term: '豆腐蕎麦', description: '豆腐をのせたヘルシーな蕎麦。' },
  { id: 'toji-soba', reading: 'とじそば', term: 'とじ蕎麦', description: '具材を卵でとじた蕎麦。' },
  { id: 'tomoe-soba', reading: 'ともえそば', term: '巴蕎麦', description: '巴紋のように盛り付けた蕎麦。' },
];

export function getTermsByKana(kana: string): SobaTerm[] {
  return SOBA_TERMS.filter(term => term.reading.startsWith(kana));
}

export function getTermCountByKana(kana: string): number {
  return getTermsByKana(kana).length;
}

export function getRowByKana(kana: string): RowGroup | undefined {
  return ROWS.find(row => row.kanaList.includes(kana));
}

export function getTotalTermCount(): number {
  return SOBA_TERMS.length;
}

export function getTermById(id: string): SobaTerm | undefined {
  return SOBA_TERMS.find(term => term.id === id);
}

export function getRandomTerm(): SobaTerm {
  return SOBA_TERMS[Math.floor(Math.random() * SOBA_TERMS.length)];
}
