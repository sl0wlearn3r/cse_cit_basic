import type { RecallCard } from "../types/content";

export const starterDeck: RecallCard[] = [
  {
    id: "oversight_gensoru_removed",
    deckId: "constitutional_confusions",
    topic: "TBMM denetim yolları",
    tags: ["tbmm", "denetim", "gensoru", "güncel-kural"],
    customerFacing: {
      prompt: "Gensoru güncel sistemde TBMM denetim yollarından biri midir?",
      answer: "Hayır. Gensoru kaldırılmıştır.",
      explanation:
        "Güncel sistemde TBMM'nin bilgi edinme ve denetim yolları; Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı sorudur.",
      mnemonic:
        "Meclis panosunda 'Gensoru' levhası sökülür, yerine 'Yazılı Soru' dosyası takılır.",
    },
    internal: {
      confusionPair: ["gensoru", "yazılı soru"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "written_question_target",
    deckId: "constitutional_confusions",
    topic: "Yazılı soru",
    tags: ["tbmm", "denetim", "yazılı-soru", "güncel-kural"],
    customerFacing: {
      prompt: "Milletvekilleri yazılı soruyu Cumhurbaşkanına mı yöneltir?",
      answer: "Hayır. Yazılı soru Cumhurbaşkanı yardımcılarına ve bakanlara yöneltilir.",
      explanation:
        "Yazılı soru, TBMM üyelerinin yürütmeden bilgi isteme yoludur; hedef kişi Cumhurbaşkanı değil, Cumhurbaşkanı yardımcıları ve bakanlardır.",
      mnemonic:
        "Soru zarfı saraya değil, bakanlık koridorundaki iki kutuya bırakılır: yardımcılar ve bakanlar.",
    },
    internal: {
      confusionPair: ["Cumhurbaşkanı", "Cumhurbaşkanı yardımcıları ve bakanlar"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "presidential_decree_rights_limit",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanlığı kararnamesi",
    tags: ["yürütme", "kararname", "haklar", "güncel-kural"],
    customerFacing: {
      prompt: "Cumhurbaşkanlığı kararnamesi temel haklar alanını serbestçe düzenleyebilir mi?",
      answer: "Hayır. Temel haklar, kişi hakları ve siyasi haklar kararnameyle düzenlenemez.",
      explanation:
        "Kararname yetkisi sınırlıdır. Kanunla düzenlenmesi gereken veya kanunda açıkça düzenlenen konularda kararname çıkarılamaz.",
      mnemonic:
        "Kararname kalemi haklar kapısına gelince altın bariyer kapanır.",
    },
    internal: {
      confusionPair: ["kanun", "Cumhurbaşkanlığı kararnamesi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "decree_law_old_rule",
    deckId: "constitutional_confusions",
    topic: "KHK ve kararname ayrımı",
    tags: ["khk", "kararname", "eski-yeni", "eski-kural"],
    customerFacing: {
      prompt: "Kanun hükmünde kararname, güncel olağan dönem sisteminin ana aracı mıdır?",
      answer: "Hayır. Olağan dönem için güncel başlık Cumhurbaşkanlığı kararnamesidir.",
      explanation:
        "Eski sistemde KHK sık sorulurdu. Güncel sistemde olağan dönem yürütme düzenlemesi için Cumhurbaşkanlığı kararnamesi ayrımı öne çıkar.",
      mnemonic:
        "Eski dosyada 'KHK' mührü kalır; yeni dosyada 'CBK' etiketi parlar.",
    },
    internal: {
      confusionPair: ["KHK", "Cumhurbaşkanlığı kararnamesi"],
      ruleStatus: "old-rule",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "legislative_term_five_years",
    deckId: "constitutional_confusions",
    topic: "Seçim dönemi",
    tags: ["tbmm", "seçim", "süre", "güncel-kural"],
    customerFacing: {
      prompt: "TBMM ve Cumhurbaşkanlığı seçimleri için güncel dönem kaç yıldır?",
      answer: "Beş yıl olarak uygulanır.",
      explanation:
        "Güncel sistemde TBMM seçimleri ve Cumhurbaşkanlığı seçimleri aynı gün yapılır ve dönem süresi beş yıldır.",
      mnemonic:
        "Meclis takviminde beş altın yaprak aynı gün çevrilir.",
    },
    internal: {
      confusionPair: ["4 yıl", "5 yıl"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_term_limit",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanı görev süresi",
    tags: ["cumhurbaşkanı", "süre", "seçim", "güncel-kural"],
    customerFacing: {
      prompt: "Cumhurbaşkanı normal kural olarak en fazla kaç dönem seçilebilir?",
      answer: "En fazla iki dönem seçilebilir.",
      explanation:
        "Görev süresi beş yıldır ve normal kural iki dönemdir. Erken seçim istisnası ayrıca çalışılması gereken ayrı bir ayrıntıdır.",
      mnemonic:
        "Kürsüde iki altın rozet yanar; üçüncü rozet için özel seçim kapısı aranır.",
    },
    internal: {
      confusionPair: ["tek dönem", "iki dönem"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitutional_amendment_referendum",
    deckId: "constitutional_confusions",
    topic: "Anayasa değişikliği",
    tags: ["anayasa", "referandum", "tbmm", "eşik"],
    customerFacing: {
      prompt: "Anayasa değişikliğinde 360 ile 399 oy arası sonuç neye gider?",
      answer: "Zorunlu halkoylamasına gider.",
      explanation:
        "Teklif yeter sayısı ile kabul yeter sayısı karıştırılır. 360-399 arası kabul edilirse halkoylaması yolu zorunludur.",
      mnemonic:
        "360 kapısından geçen dosya doğrudan sandık salonuna yönelir.",
    },
    internal: {
      confusionPair: ["360-399", "400 ve üzeri"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitutional_court_yuce_divan",
    deckId: "constitutional_confusions",
    topic: "Yüce Divan",
    tags: ["anayasa-mahkemesi", "yüce-divan", "yargı"],
    customerFacing: {
      prompt: "Yüce Divan görevi hangi yüksek mahkemeyle karıştırılır?",
      answer: "Yüce Divan görevi Anayasa Mahkemesine aittir.",
      explanation:
        "Yargıtay ceza yargısında yüksek mahkemedir, ancak Yüce Divan sıfatıyla yargılama Anayasa Mahkemesi başlığı altında sorulur.",
      mnemonic:
        "Yüce Divan salonunun kapısında büyük AYM harfleri vardır.",
    },
    internal: {
      confusionPair: ["Yargıtay", "Anayasa Mahkemesi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "ombudsman_not_court",
    deckId: "constitutional_confusions",
    topic: "Kamu Denetçiliği Kurumu",
    tags: ["idare", "ombudsman", "yargı-değil"],
    customerFacing: {
      prompt: "Kamu Denetçiliği Kurumu mahkeme gibi bağlayıcı karar verir mi?",
      answer: "Hayır. Tavsiye niteliğinde karar verir.",
      explanation:
        "Ombudsman idarenin işleyişini inceler; yargı organı değildir ve mahkeme kararı gibi bağlayıcı hüküm kurmaz.",
      mnemonic:
        "Denetçi tokmak taşımaz; not defterine tavsiye yıldızı koyar.",
    },
    internal: {
      confusionPair: ["tavsiye", "bağlayıcı hüküm"],
      ruleStatus: "current",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "sayistay_audits_for_tbmm",
    deckId: "constitutional_confusions",
    topic: "Sayıştay",
    tags: ["sayıştay", "tbmm", "denetim", "mali"],
    customerFacing: {
      prompt: "Sayıştay denetimini kimin adına yapar diye sorulursa hangi cevap öne çıkar?",
      answer: "TBMM adına denetim yapar.",
      explanation:
        "Sayıştay mali denetim ve kesin hesap incelemesi başlıklarında TBMM ile birlikte düşünülür; klasik yüksek mahkeme listesiyle karıştırılmamalıdır.",
      mnemonic:
        "Mali dosyalar Meclis sıralarına doğru mavi bir ray üzerinde akar.",
    },
    internal: {
      confusionPair: ["yüksek mahkeme", "TBMM adına denetim"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "hsk_name_current",
    deckId: "constitutional_confusions",
    topic: "HSK adı",
    tags: ["hsk", "eski-yeni", "yargı"],
    customerFacing: {
      prompt: "Güncel ad HSYK mı, HSK mı?",
      answer: "Güncel ad Hâkimler ve Savcılar Kurulu, yani HSK'dır.",
      explanation:
        "Eski kaynaklarda HSYK adı görülebilir. Güncel sınav dilinde HSK adını tanımak gerekir.",
      mnemonic:
        "Eski tabeladaki Y harfi sökülür; kurul kapısında HSK kalır.",
    },
    internal: {
      confusionPair: ["HSYK", "HSK"],
      ruleStatus: "old-rule",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "regulation_not_tuzuk",
    deckId: "constitutional_confusions",
    topic: "Düzenleyici işlemler",
    tags: ["tüzük", "yönetmelik", "eski-yeni"],
    customerFacing: {
      prompt: "Tüzük güncel sistemde aktif düzenleyici işlem başlığı olarak mı çalışılır?",
      answer: "Hayır. Tüzük eski sistem başlığıdır; yönetmelik güncel başlık olarak kalır.",
      explanation:
        "Eski-yeni ayrımında tüzük kavramı kaldırılan başlıklar arasında, yönetmelik ise idarenin düzenleyici işlemi olarak sorulabilir.",
      mnemonic:
        "Tüzük klasörü arşive kalkar; yönetmelik dosyası masada kalır.",
    },
    internal: {
      confusionPair: ["tüzük", "yönetmelik"],
      ruleStatus: "old-rule",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "individual_application_scope",
    deckId: "constitutional_confusions",
    topic: "Bireysel başvuru",
    tags: ["anayasa-mahkemesi", "haklar", "başvuru"],
    customerFacing: {
      prompt: "Bireysel başvuru her türlü hukuki şikayet için mi yapılır?",
      answer: "Hayır. Anayasal ve Avrupa İnsan Hakları Sözleşmesi kapsamındaki temel hak ihlalleri için yapılır.",
      explanation:
        "Bireysel başvuru genel bir temyiz yolu değildir; temel hak ihlali iddiası ve olağan yolların tüketilmesi ayrımı önemlidir.",
      mnemonic:
        "Başvuru kartı sadece temel hak kapısındaki turnikeden geçer.",
    },
    internal: {
      confusionPair: ["temyiz", "bireysel başvuru"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "ordinary_admin_high_courts",
    deckId: "constitutional_confusions",
    topic: "Yüksek mahkemeler",
    tags: ["yargıtay", "danıştay", "yargı"],
    customerFacing: {
      prompt: "Yargıtay ile Danıştay ayrımında adli-idari eşleşme nasıldır?",
      answer: "Yargıtay adli yargı, Danıştay idari yargı yüksek mahkemesidir.",
      explanation:
        "Benzer isimli yüksek mahkemeler karıştırılır. Adli uyuşmazlıkta Yargıtay, idari uyuşmazlıkta Danıştay düşünülür.",
      mnemonic:
        "Adli dosya Yargıtay merdivenine, idari dosya Danıştay koridoruna çıkar.",
    },
    internal: {
      confusionPair: ["Yargıtay", "Danıştay"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "election_threshold_seven",
    deckId: "constitutional_confusions",
    topic: "Seçim barajı",
    tags: ["seçim", "baraj", "güncel-kural"],
    customerFacing: {
      prompt: "Milletvekili seçimlerinde ülke barajı güncel notlarda yüzde kaç olarak karıştırılır?",
      answer: "Güncel notlarda yüzde 7 olarak takip edilir.",
      explanation:
        "Eski kaynaklarda yüzde 10 görülebilir. Bu kart, eski-yeni ayrımını hatırlatmak için özellikle işaretlenmiştir.",
      mnemonic:
        "Baraj göstergesindeki 10 rakamı iner, 7 rakamı altın renkle sabitlenir.",
    },
    internal: {
      confusionPair: ["%10", "%7"],
      ruleStatus: "current",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_first_three_unamendable",
    deckId: "constitutional_confusions",
    topic: "Değiştirilemez hükümler",
    tags: ["anayasa", "değiştirilemez", "ilk-üç-madde"],
    customerFacing: {
      prompt: "Anayasanın ilk üç maddesi değiştirilebilir mi?",
      answer: "Hayır. İlk üç madde değiştirilemez ve değiştirilmesi teklif edilemez.",
      explanation:
        "Cumhuriyet, devletin nitelikleri, başkent-bayrak-milli marş-resmi dil gibi temel hükümler özel koruma altındadır.",
      mnemonic:
        "Meclis kapısında ilk üç madde altın kilitle korunur; teklif zarfı içeri alınmaz.",
    },
    internal: {
      confusionPair: ["değiştirilebilir", "teklif dahi edilemez"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "article_four_proposal_lock",
    deckId: "constitutional_confusions",
    topic: "Anayasa madde 4",
    tags: ["anayasa", "madde-4", "değiştirilemez"],
    customerFacing: {
      prompt: "İlk üç maddeyi koruyan hüküm hangi maddeyle hatırlanır?",
      answer: "Dördüncü maddeyle hatırlanır.",
      explanation:
        "Dördüncü madde, ilk üç maddenin değiştirilemeyeceğini ve değiştirilmesinin teklif edilemeyeceğini söyler.",
      mnemonic:
        "Dördüncü madde, ilk üç kapının önünde duran güvenlik görevlisidir.",
    },
    internal: {
      confusionPair: ["ilk üç madde", "dördüncü madde"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "sovereignty_nation_no_person",
    deckId: "constitutional_confusions",
    topic: "Egemenlik",
    tags: ["anayasa", "egemenlik", "millet"],
    customerFacing: {
      prompt: "Egemenlik bir kişiye, zümreye veya sınıfa bırakılabilir mi?",
      answer: "Hayır. Egemenlik kayıtsız şartsız milletindir.",
      explanation:
        "Egemenliğin kullanılması Anayasanın koyduğu esaslara göre yetkili organlar aracılığıyla olur; kaynak millet olarak hatırlanır.",
      mnemonic:
        "Egemenlik mührü tek bir kişide değil, millet salonunun ortasındadır.",
    },
    internal: {
      confusionPair: ["kişi egemenliği", "millet egemenliği"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "legislative_power_non_delegable",
    deckId: "constitutional_confusions",
    topic: "Yasama yetkisi",
    tags: ["tbmm", "yasama", "devredilemez"],
    customerFacing: {
      prompt: "Yasama yetkisi başka bir organa devredilebilir mi?",
      answer: "Hayır. Yasama yetkisi TBMM'nindir ve devredilemez.",
      explanation:
        "Yasama-yürütme ayrımında en temel ezber budur: kanun yapma merkezinde TBMM bulunur.",
      mnemonic:
        "Kanun kalemi Meclis kürsüsüne zincirlenmiştir.",
    },
    internal: {
      confusionPair: ["yasama", "yürütme"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "executive_power_president",
    deckId: "constitutional_confusions",
    topic: "Yürütme yetkisi",
    tags: ["cumhurbaşkanı", "yürütme", "güncel-kural"],
    customerFacing: {
      prompt: "Güncel sistemde yürütme yetkisi ve görevi kime aittir?",
      answer: "Cumhurbaşkanına aittir.",
      explanation:
        "Parlamenter sistemdeki Bakanlar Kurulu dili eski kaynaklarda kalabilir. Güncel sistemde yürütme Cumhurbaşkanı başlığında toplanır.",
      mnemonic:
        "Yürütme dosyaları eski kurul masasından tek Cumhurbaşkanı kürsüsüne taşınır.",
    },
    internal: {
      confusionPair: ["Bakanlar Kurulu", "Cumhurbaşkanı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "judiciary_independent_impartial",
    deckId: "constitutional_confusions",
    topic: "Yargı yetkisi",
    tags: ["yargı", "mahkemeler", "bağımsızlık"],
    customerFacing: {
      prompt: "Yargı yetkisini hangi mahkemeler kullanır?",
      answer: "Bağımsız ve tarafsız mahkemeler kullanır.",
      explanation:
        "Güncel anayasa dilinde yalnız bağımsızlık değil, tarafsızlık vurgusu da birlikte hatırlanmalıdır.",
      mnemonic:
        "Yargı salonunda iki tabela yanar: bağımsızlık ve tarafsızlık.",
    },
    internal: {
      confusionPair: ["bağımsız", "bağımsız ve tarafsız"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "equality_positive_discrimination",
    deckId: "constitutional_confusions",
    topic: "Eşitlik ilkesi",
    tags: ["eşitlik", "pozitif-ayrımcılık", "haklar"],
    customerFacing: {
      prompt: "Kadınlar, çocuklar, yaşlılar ve engelliler için alınan özel tedbirler eşitliğe aykırı mıdır?",
      answer: "Hayır. Bu tedbirler eşitlik ilkesine aykırı sayılmaz.",
      explanation:
        "Eşitlik sorularında özel koruma tedbirleri ile ayrımcılık yasağı karıştırılır. Anayasa bu tedbirleri ayrı tutar.",
      mnemonic:
        "Eşitlik terazisinin yanında koruma kalkanı vardır.",
    },
    internal: {
      confusionPair: ["ayrımcılık", "pozitif tedbir"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "rights_limit_only_by_law",
    deckId: "constitutional_confusions",
    topic: "Hakların sınırlanması",
    tags: ["temel-haklar", "sınırlama", "kanun"],
    customerFacing: {
      prompt: "Temel hak ve hürriyetler yönetmelikle serbestçe sınırlanabilir mi?",
      answer: "Hayır. Sınırlama kanunla ve Anayasadaki ölçütlere uygun yapılır.",
      explanation:
        "Sınırlama sorularında yönetmelik, kararname ve kanun ayrımı önemlidir. Ana eşik kanundur.",
      mnemonic:
        "Hak kapısına sadece kanun anahtarı uyar; yönetmelik anahtarı kapıyı açmaz.",
    },
    internal: {
      confusionPair: ["yönetmelik", "kanun"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "emergency_core_rights",
    deckId: "constitutional_confusions",
    topic: "Olağanüstü hâlde çekirdek haklar",
    tags: ["ohal", "temel-haklar", "çekirdek-haklar"],
    customerFacing: {
      prompt: "Olağanüstü hâlde tüm temel haklar sınırsız biçimde durdurulabilir mi?",
      answer: "Hayır. Çekirdek haklar ve ölçülülük sınırı ayrıca korunur.",
      explanation:
        "OHAL sorularında 'her şey durur' gibi genellemeler tuzaktır. Yaşam hakkı, suç ve cezaların geriye yürümemesi gibi çekirdek alanlar ayrıca çalışılır.",
      mnemonic:
        "OHAL sireni çalsa da çekirdek haklar kilitli kasada kalır.",
    },
    internal: {
      confusionPair: ["tam durdurma", "çekirdek koruma"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "citizenship_turkish_state_bond",
    deckId: "constitutional_confusions",
    topic: "Vatandaşlık tanımı",
    tags: ["vatandaşlık", "anayasa", "tanım"],
    customerFacing: {
      prompt: "Anayasal vatandaşlık tanımında bağ hangi devlete kurulur?",
      answer: "Türk Devletine vatandaşlık bağı ile bağlı olan herkes Türk'tür.",
      explanation:
        "Bu ifade etnik değil, anayasal vatandaşlık bağını anlatır. Soru köklerinde tanım cümlesi sık karıştırılır.",
      mnemonic:
        "Kimlik kartındaki bağ çizgisi kişiden Türk Devletine uzanır.",
    },
    internal: {
      confusionPair: ["etnik tanım", "vatandaşlık bağı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "election_secret_vote_open_count",
    deckId: "constitutional_confusions",
    topic: "Seçim ilkeleri",
    tags: ["seçim", "oy", "sayım"],
    customerFacing: {
      prompt: "Seçimlerde oy verme ve sayım ilkesi nasıl eşleşir?",
      answer: "Oy verme gizli, sayım ve döküm açıktır.",
      explanation:
        "Gizli-açık sıralaması sık ters çevrilir. Sandıkta gizlilik, sonuçta açıklık aranır.",
      mnemonic:
        "Oy kabini kapalıdır; sayım masası ışık altındadır.",
    },
    internal: {
      confusionPair: ["gizli sayım", "açık sayım"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "tbmm_member_count_600",
    deckId: "constitutional_confusions",
    topic: "Milletvekili sayısı",
    tags: ["tbmm", "milletvekili", "sayı"],
    customerFacing: {
      prompt: "Güncel TBMM milletvekili sayısı kaçtır?",
      answer: "600 milletvekilidir.",
      explanation:
        "Eski kaynaklarda 550 sayısı görülebilir. Güncel kartta 600 sayısı sabitlenir.",
      mnemonic:
        "Meclis oturma planındaki 550 etiketi kalkar, 600 rozeti takılır.",
    },
    internal: {
      confusionPair: ["550", "600"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "mp_age_18_current",
    deckId: "constitutional_confusions",
    topic: "Milletvekili seçilme yaşı",
    tags: ["tbmm", "seçilme-yaşı", "eski-yeni"],
    customerFacing: {
      prompt: "Milletvekili seçilme yaşı güncel olarak kaçtır?",
      answer: "18 yaş olarak uygulanır.",
      explanation:
        "Eski notlarda 25 ya da 30 yaş bilgisiyle karşılaşılabilir. Güncel ayrımda 18 yaş hatırlanır.",
      mnemonic:
        "Seçilme yaşı merdiveninde 30 ve 25 basamakları silinir, 18 basamağı parlar.",
    },
    internal: {
      confusionPair: ["25", "18"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "legislative_nonliability_immunity",
    deckId: "constitutional_confusions",
    topic: "Yasama sorumsuzluğu ve dokunulmazlığı",
    tags: ["tbmm", "dokunulmazlık", "sorumsuzluk"],
    customerFacing: {
      prompt: "Kürsüdeki oy ve söz nedeniyle sorumlu olmama hangi kavramdır?",
      answer: "Yasama sorumsuzluğudur.",
      explanation:
        "Yasama dokunulmazlığı yakalama-tutuklama-yargılama korumasıyla; sorumsuzluk ise oy ve söz açıklamalarıyla ilişkilidir.",
      mnemonic:
        "Kürsü mikrofonu sorumsuzluğu, adliye kapısı dokunulmazlığı hatırlatır.",
    },
    internal: {
      confusionPair: ["yasama sorumsuzluğu", "yasama dokunulmazlığı"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "law_proposal_only_mps",
    deckId: "constitutional_confusions",
    topic: "Kanun teklifi",
    tags: ["tbmm", "kanun-teklifi", "eski-yeni"],
    customerFacing: {
      prompt: "Güncel sistemde kanun teklifi kimler tarafından verilir?",
      answer: "Milletvekilleri tarafından verilir.",
      explanation:
        "Eski sistemdeki tasarı-teklif ayrımı kaldırılmıştır. Güncel sınav dilinde kanun teklifi milletvekilleriyle eşleşir.",
      mnemonic:
        "Tasarı dosyası arşive kalkar; teklif zarfı milletvekili sırasından çıkar.",
    },
    internal: {
      confusionPair: ["kanun tasarısı", "kanun teklifi"],
      ruleStatus: "old-rule",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "budget_president_submits_tbmm_approves",
    deckId: "constitutional_confusions",
    topic: "Bütçe süreci",
    tags: ["bütçe", "cumhurbaşkanı", "tbmm"],
    customerFacing: {
      prompt: "Bütçe kanun teklifini kim sunar, kim kabul eder?",
      answer: "Cumhurbaşkanı sunar, TBMM kabul eder.",
      explanation:
        "Bütçe sorularında yürütmenin hazırlama/sunma rolü ile TBMM'nin kabul etme rolü karıştırılır.",
      mnemonic:
        "Bütçe çantası Cumhurbaşkanından gelir, Meclis mühürüyle kapanır.",
    },
    internal: {
      confusionPair: ["sunma", "kabul etme"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_returns_law_once",
    deckId: "constitutional_confusions",
    topic: "Kanunların geri gönderilmesi",
    tags: ["cumhurbaşkanı", "kanun", "tbmm"],
    customerFacing: {
      prompt: "Cumhurbaşkanı yayımlanmasını uygun bulmadığı kanunu TBMM'ye kaç kez geri gönderebilir?",
      answer: "Bir kez geri gönderebilir.",
      explanation:
        "TBMM kanunu aynen kabul ederse Cumhurbaşkanı kanunu yayımlar; geri gönderme sınırsız veto gibi düşünülmemelidir.",
      mnemonic:
        "Kanun dosyasının üzerinde tek dönüş bileti vardır.",
    },
    internal: {
      confusionPair: ["sınırsız veto", "bir kez geri gönderme"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "war_declaration_tbmm",
    deckId: "constitutional_confusions",
    topic: "Savaş ilanı",
    tags: ["tbmm", "savaş", "yetki"],
    customerFacing: {
      prompt: "Savaş ilanına karar verme yetkisi kime aittir?",
      answer: "TBMM'ye aittir.",
      explanation:
        "Dış politika ve yürütme yetkileriyle karıştırılsa da savaş ilanı klasik TBMM yetkileri arasında çalışılır.",
      mnemonic:
        "Savaş kararı dosyası Meclis genel kurulunda kırmızı mühür bekler.",
    },
    internal: {
      confusionPair: ["Cumhurbaşkanı", "TBMM"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "parliamentary_inquiry_information",
    deckId: "constitutional_confusions",
    topic: "Meclis araştırması",
    tags: ["tbmm", "denetim", "meclis-araştırması"],
    customerFacing: {
      prompt: "Meclis araştırması ceza yargılaması mıdır, bilgi edinme yolu mudur?",
      answer: "Bilgi edinme ve inceleme yoludur.",
      explanation:
        "Meclis araştırması ile Meclis soruşturması karıştırılır. Araştırma genel inceleme; soruşturma belirli kişiler hakkında sorumluluk yoludur.",
      mnemonic:
        "Araştırma komisyonu büyüteç taşır, mahkeme tokmağı taşımaz.",
    },
    internal: {
      confusionPair: ["Meclis araştırması", "Meclis soruşturması"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "general_debate_public_topic",
    deckId: "constitutional_confusions",
    topic: "Genel görüşme",
    tags: ["tbmm", "denetim", "genel-görüşme"],
    customerFacing: {
      prompt: "Genel görüşme hangi amaçla yapılır?",
      answer: "Toplumu ve devlet faaliyetlerini ilgilendiren bir konunun görüşülmesi için yapılır.",
      explanation:
        "Genel görüşme bilgi edinme ve denetim yollarındandır; belirli bir bakanı düşürme aracı değildir.",
      mnemonic:
        "Genel görüşmede büyük pano açılır, konu bütün salonla tartışılır.",
    },
    internal: {
      confusionPair: ["genel görüşme", "gensoru"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "parliamentary_investigation_yuce_divan",
    deckId: "constitutional_confusions",
    topic: "Meclis soruşturması",
    tags: ["tbmm", "denetim", "yüce-divan"],
    customerFacing: {
      prompt: "Meclis soruşturması sonunda Yüce Divan yargılaması hangi mahkemede olur?",
      answer: "Anayasa Mahkemesinde olur.",
      explanation:
        "Meclis soruşturması TBMM'de başlar; Yüce Divan sıfatıyla yargılama Anayasa Mahkemesiyle eşleşir.",
      mnemonic:
        "Soruşturma dosyası Meclisten çıkar, AYM kapısındaki Yüce Divan tabelasına gider.",
    },
    internal: {
      confusionPair: ["TBMM", "Anayasa Mahkemesi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_party_membership_current",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanının parti üyeliği",
    tags: ["cumhurbaşkanı", "parti", "eski-yeni"],
    customerFacing: {
      prompt: "Güncel sistemde Cumhurbaşkanının parti üyeliği zorunlu olarak sona erer mi?",
      answer: "Hayır. Bu, eski sistemle karıştırılan bir bilgidir.",
      explanation:
        "2017 sonrası sistemde Cumhurbaşkanının siyasi parti üyeliği bakımından eski tarafsızlık ezberi aynen kullanılmaz.",
      mnemonic:
        "Eski rozet kutusu kapanır; güncel notta parti rozeti ayrıca kontrol edilir.",
    },
    internal: {
      confusionPair: ["parti üyeliği sona erer", "parti üyeliği mümkündür"],
      ruleStatus: "old-rule",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_candidate_age_education",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanı adaylığı",
    tags: ["cumhurbaşkanı", "adaylık", "yaş"],
    customerFacing: {
      prompt: "Cumhurbaşkanı adayı için yaş ve öğrenim şartı nasıl hatırlanır?",
      answer: "Kırk yaşını doldurmuş ve yükseköğrenim yapmış olmak gerekir.",
      explanation:
        "Milletvekili seçilme yaşıyla Cumhurbaşkanı adaylığı şartları karıştırılır. Cumhurbaşkanı için 40 yaş ve yükseköğrenim birlikte düşünülür.",
      mnemonic:
        "Adaylık kürsüsünde 40 yazan diploma çerçevesi durur.",
    },
    internal: {
      confusionPair: ["18 yaş", "40 yaş"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "cb_decree_law_conflict",
    deckId: "constitutional_confusions",
    topic: "CB kararnamesi ve kanun çatışması",
    tags: ["kararname", "kanun", "cumhurbaşkanı"],
    customerFacing: {
      prompt: "Kanun ile Cumhurbaşkanlığı kararnamesi çatışırsa hangisi uygulanır?",
      answer: "Kanun uygulanır.",
      explanation:
        "Kararname-kanun ilişkisinde kanun üstünlüğü kritik ayrımdır. Aynı konuda kanun varsa kararname geri planda kalır.",
      mnemonic:
        "Kanun zili çalınca kararname dosyası kenara çekilir.",
    },
    internal: {
      confusionPair: ["kararname üstün", "kanun üstün"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "cb_decree_law_area_limit",
    deckId: "constitutional_confusions",
    topic: "CB kararnamesi alan sınırı",
    tags: ["kararname", "kanun", "yasama"],
    customerFacing: {
      prompt: "Kanunda açıkça düzenlenen bir konuda Cumhurbaşkanlığı kararnamesi çıkarılabilir mi?",
      answer: "Hayır. Kanunda açıkça düzenlenen konuda kararname çıkarılamaz.",
      explanation:
        "Soru kökü 'zaten kanun var' diyorsa kararname yetkisi sınırlanır. Bu ayrım zor sorularda sık kullanılır.",
      mnemonic:
        "Kanun dolabı doluysa kararname klasörü o rafa sığmaz.",
    },
    internal: {
      confusionPair: ["kanun bulunan alan", "kararname alanı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_appoints_ministers",
    deckId: "constitutional_confusions",
    topic: "Bakanların atanması",
    tags: ["cumhurbaşkanı", "bakan", "yürütme"],
    customerFacing: {
      prompt: "Güncel sistemde bakanları kim atar ve görevlerine son verir?",
      answer: "Cumhurbaşkanı atar ve görevlerine son verir.",
      explanation:
        "Bakanlar Kurulu güvenoyu gibi eski parlamenter sistem kavramlarıyla karıştırılmamalıdır.",
      mnemonic:
        "Bakan koltuklarının anahtarı Cumhurbaşkanı masasındadır.",
    },
    internal: {
      confusionPair: ["güvenoyu", "Cumhurbaşkanı ataması"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "state_of_emergency_president_tbmm",
    deckId: "constitutional_confusions",
    topic: "Olağanüstü hâl",
    tags: ["ohal", "cumhurbaşkanı", "tbmm"],
    customerFacing: {
      prompt: "Olağanüstü hâli kim ilan eder ve hangi organ onay denetimi yapar?",
      answer: "Cumhurbaşkanı ilan eder; TBMM onay sürecinde rol alır.",
      explanation:
        "OHAL başlığında yürütmenin ilan yetkisi ile TBMM'nin onay-denetim rolü birlikte hatırlanmalıdır.",
      mnemonic:
        "OHAL sireni Cumhurbaşkanlığı düğmesiyle çalar, Meclis panosunda onay ışığı aranır.",
    },
    internal: {
      confusionPair: ["ilan", "onay"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "aym_member_count_15",
    deckId: "constitutional_confusions",
    topic: "Anayasa Mahkemesi üye sayısı",
    tags: ["anayasa-mahkemesi", "üye-sayısı", "yargı"],
    customerFacing: {
      prompt: "Anayasa Mahkemesi güncel olarak kaç üyeden oluşur?",
      answer: "15 üyeden oluşur.",
      explanation:
        "Yüksek yargı üye sayıları ezberinde AYM için 15 sayısı ayrı sabitlenmelidir.",
      mnemonic:
        "AYM salonunda 15 turkuaz koltuk yanar.",
    },
    internal: {
      confusionPair: ["AYM üye sayısı", "HSK üye sayısı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "aym_individual_application_not_appeal",
    deckId: "constitutional_confusions",
    topic: "Bireysel başvurunun niteliği",
    tags: ["anayasa-mahkemesi", "bireysel-başvuru", "temyiz-değil"],
    customerFacing: {
      prompt: "Bireysel başvuru, davayı yeniden başlatan genel bir temyiz yolu mudur?",
      answer: "Hayır. Temel hak ihlali iddiasına bağlı ikincil bir başvuru yoludur.",
      explanation:
        "AYM bireysel başvurusu, her hatalı kararın yeniden incelendiği olağan bir kanun yolu gibi düşünülmemelidir.",
      mnemonic:
        "AYM kapısında 'temyiz kuyruğu' değil, 'hak ihlali turnikesi' vardır.",
    },
    internal: {
      confusionPair: ["temyiz", "hak ihlali başvurusu"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "aym_amendment_form_review",
    deckId: "constitutional_confusions",
    topic: "Anayasa değişikliği denetimi",
    tags: ["anayasa-mahkemesi", "anayasa-değişikliği", "şekil-denetimi"],
    customerFacing: {
      prompt: "AYM anayasa değişikliklerini esas bakımından denetler mi?",
      answer: "Hayır. Anayasa değişikliklerinde şekil denetimiyle sınırlı düşünülür.",
      explanation:
        "Kanunların esas denetimi ile anayasa değişikliklerinin sınırlı şekil denetimi karıştırılır.",
      mnemonic:
        "AYM büyüteci değişiklik dosyasında sadece şekil etiketine yaklaşır.",
    },
    internal: {
      confusionPair: ["esas denetimi", "şekil denetimi"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "hsk_member_count_13",
    deckId: "constitutional_confusions",
    topic: "HSK üye sayısı",
    tags: ["hsk", "üye-sayısı", "yargı"],
    customerFacing: {
      prompt: "Hâkimler ve Savcılar Kurulu kaç üyeden oluşur?",
      answer: "13 üyeden oluşur.",
      explanation:
        "HSK ile AYM üye sayıları karıştırılır. HSK için 13, AYM için 15 ayrı tutulur.",
      mnemonic:
        "HSK kapısında 13 numaralı kurul levhası asılıdır.",
    },
    internal: {
      confusionPair: ["HSK 13", "AYM 15"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "jurisdiction_disputes_court",
    deckId: "constitutional_confusions",
    topic: "Uyuşmazlık Mahkemesi",
    tags: ["uyuşmazlık-mahkemesi", "yargı", "görev-uyuşmazlığı"],
    customerFacing: {
      prompt: "Farklı yargı kolları arasındaki görev uyuşmazlığı hangi mahkemeyle hatırlanır?",
      answer: "Uyuşmazlık Mahkemesiyle hatırlanır.",
      explanation:
        "Uyuşmazlık Mahkemesi, özellikle adli-idari yargı görev ayrımı sorularında karşımıza çıkar.",
      mnemonic:
        "İki yargı koridoru kavga edince aradaki kapıda Uyuşmazlık Mahkemesi tabelası yanar.",
    },
    internal: {
      confusionPair: ["Danıştay", "Uyuşmazlık Mahkemesi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "military_courts_removed_current",
    deckId: "constitutional_confusions",
    topic: "Askeri yargı",
    tags: ["askeri-yargı", "eski-yeni", "yargı"],
    customerFacing: {
      prompt: "Güncel anayasa notlarında askeri mahkemeler genel yargı kolu gibi mi çalışılır?",
      answer: "Hayır. Askeri mahkemeler eski sistem bilgisiyle karıştırılır.",
      explanation:
        "2017 değişiklikleri sonrası askeri yargı başlığı eski kaynaklarda görülen en riskli ezberlerden biridir.",
      mnemonic:
        "Askeri mahkeme tabelası eski yargı koridorundan indirilir.",
    },
    internal: {
      confusionPair: ["askeri yargı", "güncel yargı düzeni"],
      ruleStatus: "old-rule",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "local_administrations_three",
    deckId: "constitutional_confusions",
    topic: "Mahalli idareler",
    tags: ["idare", "yerel-yönetim", "mahalli-idare"],
    customerFacing: {
      prompt: "Mahalli idareler denince üç temel örnek nasıl sıralanır?",
      answer: "İl özel idaresi, belediye ve köy.",
      explanation:
        "Yerel yönetim sorularında il özel idaresi ile valilik; belediye ile merkezi idare birimleri karıştırılır.",
      mnemonic:
        "Yerel yönetim panosunda üç rozet vardır: il özel idaresi, belediye, köy.",
    },
    internal: {
      confusionPair: ["merkezi idare", "mahalli idare"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "governor_vs_mayor",
    deckId: "constitutional_confusions",
    topic: "Vali ve belediye başkanı",
    tags: ["idare", "vali", "belediye"],
    customerFacing: {
      prompt: "Vali ile belediye başkanı ayrımında atanmış-seçilmiş eşleşme nasıldır?",
      answer: "Vali atanır; belediye başkanı seçilir.",
      explanation:
        "İl yönetiminde merkezi idarenin temsilcisi vali, yerel yönetimde seçilmiş organ belediye başkanıdır.",
      mnemonic:
        "Valinin dosyasında atama mührü, belediye başkanının sandığında seçim pusulası vardır.",
    },
    internal: {
      confusionPair: ["vali", "belediye başkanı"],
      ruleStatus: "current",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "district_governor_appointed",
    deckId: "constitutional_confusions",
    topic: "Kaymakam",
    tags: ["idare", "kaymakam", "ilçe"],
    customerFacing: {
      prompt: "Kaymakam seçilmiş yerel yönetim başkanı mıdır?",
      answer: "Hayır. Kaymakam atanmış merkezi idare görevlisidir.",
      explanation:
        "Kaymakam ilçe düzeyinde merkezi idareyi temsil eder; belediye başkanı gibi seçimle gelmez.",
      mnemonic:
        "Kaymakam odasında sandık değil, atama dosyası bulunur.",
    },
    internal: {
      confusionPair: ["kaymakam", "belediye başkanı"],
      ruleStatus: "current",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "hierarchy_vs_administrative_tutelage",
    deckId: "constitutional_confusions",
    topic: "Hiyerarşi ve idari vesayet",
    tags: ["idare", "hiyerarşi", "vesayet"],
    customerFacing: {
      prompt: "Merkezi idarenin yerel yönetimler üzerindeki sınırlı denetimi hangi kavramdır?",
      answer: "İdari vesayettir.",
      explanation:
        "Hiyerarşi aynı idari yapı içindeki ast-üst ilişkisini; idari vesayet ayrı kamu tüzel kişileri arasındaki sınırlı denetimi anlatır.",
      mnemonic:
        "Hiyerarşi aynı bina içi merdivendir; vesayet iki bina arasındaki denetim köprüsüdür.",
    },
    internal: {
      confusionPair: ["hiyerarşi", "idari vesayet"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "admin_act_five_elements",
    deckId: "constitutional_confusions",
    topic: "İdari işlemin unsurları",
    tags: ["idare-hukuku", "idari-işlem", "unsurlar"],
    customerFacing: {
      prompt: "İdari işlemin beş unsuru hangi kısaltmayla hatırlanabilir?",
      answer: "Yetki, şekil, sebep, konu ve maksat.",
      explanation:
        "Zor idare hukuku soruları genellikle bu unsurlardan hangisinin sakatlandığını sorar.",
      mnemonic:
        "İşlem dosyasının kapağında YESKM damgası vardır.",
    },
    internal: {
      confusionPair: ["sebep", "maksat"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "regulation_authority_current",
    deckId: "constitutional_confusions",
    topic: "Yönetmelik çıkarma",
    tags: ["yönetmelik", "idare", "düzenleyici-işlem"],
    customerFacing: {
      prompt: "Yönetmelik yalnızca TBMM tarafından mı çıkarılır?",
      answer: "Hayır. Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri kendi görev alanlarında yönetmelik çıkarabilir.",
      explanation:
        "Yönetmelik idarenin düzenleyici işlemleri arasındadır; kanunla aynı düzeyde düşünülmemelidir.",
      mnemonic:
        "Yönetmelik rafında Cumhurbaşkanı, bakanlık ve kamu tüzel kişisi etiketleri yan yana durur.",
    },
    internal: {
      confusionPair: ["kanun", "yönetmelik"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "public_legal_person_law_decree",
    deckId: "constitutional_confusions",
    topic: "Kamu tüzel kişiliği",
    tags: ["idare", "kamu-tüzel-kişiliği", "kanun"],
    customerFacing: {
      prompt: "Kamu tüzel kişiliği keyfi idari işlemle kurulabilir mi?",
      answer: "Hayır. Kanunla veya Cumhurbaşkanlığı kararnamesiyle kurulur.",
      explanation:
        "Kamu tüzel kişiliği sorularında kuruluş dayanağı aranır. Basit yönetmelik veya talimatla kurulmuş gibi düşünülmez.",
      mnemonic:
        "Kamu tüzel kişiliği kapısı kanun ya da kararname anahtarıyla açılır.",
    },
    internal: {
      confusionPair: ["yönetmelik", "kanun veya kararname"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "political_parties_prior_permission",
    deckId: "constitutional_confusions",
    topic: "Siyasi parti kurma",
    tags: ["siyasi-parti", "haklar", "izin"],
    customerFacing: {
      prompt: "Siyasi parti kurmak için önceden izin almak gerekir mi?",
      answer: "Hayır. Siyasi partiler önceden izin almadan kurulabilir.",
      explanation:
        "Dernek ve siyasi parti başlıklarında önceden izin almama ilkesi sık soru sinyalidir.",
      mnemonic:
        "Parti kuruluş kapısında izin gişesi yoktur; bildirim dosyası vardır.",
    },
    internal: {
      confusionPair: ["izin", "izin almadan kuruluş"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "party_closure_constitutional_court",
    deckId: "constitutional_confusions",
    topic: "Siyasi parti kapatma",
    tags: ["siyasi-parti", "anayasa-mahkemesi", "kapatma"],
    customerFacing: {
      prompt: "Siyasi partilerin kapatılması hangi mahkemeyle eşleşir?",
      answer: "Anayasa Mahkemesiyle eşleşir.",
      explanation:
        "Siyasi parti kapatma, idarenin basit bir işlemi gibi değil, Anayasa Mahkemesi başlığıyla hatırlanır.",
      mnemonic:
        "Parti kapatma dosyası AYM salonundaki özel rafa gider.",
    },
    internal: {
      confusionPair: ["idare", "Anayasa Mahkemesi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "petition_info_ombudsman_together",
    deckId: "constitutional_confusions",
    topic: "Dilekçe, bilgi edinme ve KDK",
    tags: ["dilekçe", "bilgi-edinme", "ombudsman"],
    customerFacing: {
      prompt: "Dilekçe hakkı, bilgi edinme ve Kamu Denetçiliği aynı anayasal başlıkta birlikte mi düşünülür?",
      answer: "Evet. Bu üçü birlikte çalışılan başlıklardır.",
      explanation:
        "Soru kökleri bu hakları ayrı ayrı değil, aynı vatandaş başvuru ailesi içinde karıştırabilir.",
      mnemonic:
        "Vatandaş başvuru masasında üç kutu vardır: dilekçe, bilgi edinme, denetçi.",
    },
    internal: {
      confusionPair: ["dilekçe", "Kamu Denetçiliği"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "tax_only_by_law",
    deckId: "constitutional_confusions",
    topic: "Verginin kanuniliği",
    tags: ["vergi", "kanunilik", "ödev"],
    customerFacing: {
      prompt: "Vergi, resim, harç ve benzeri mali yükümlülükler yönetmelikle konulabilir mi?",
      answer: "Hayır. Kanunla konulur, değiştirilir veya kaldırılır.",
      explanation:
        "Mali yükümlülüklerde kanunilik ilkesi aranır. Bu başlık yönetmelik-kararname ayrımıyla zorlaştırılabilir.",
      mnemonic:
        "Vergi kasasının üzerinde yalnız kanun anahtarı döner.",
    },
    internal: {
      confusionPair: ["yönetmelik", "kanun"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "expropriation_public_interest",
    deckId: "constitutional_confusions",
    topic: "Kamulaştırma",
    tags: ["mülkiyet", "kamulaştırma", "kamu-yararı"],
    customerFacing: {
      prompt: "Kamulaştırmada hangi amaç koşulu özellikle aranır?",
      answer: "Kamu yararı amacı aranır.",
      explanation:
        "Kamulaştırma, mülkiyet hakkı ile kamu yararı dengesinde sorulur. Kişisel yarar gibi düşünülmemelidir.",
      mnemonic:
        "Mülkiyet kapısında kamu yararı terazisi ölçüm yapar.",
    },
    internal: {
      confusionPair: ["özel yarar", "kamu yararı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "danistay_admin_high_court",
    deckId: "constitutional_confusions",
    topic: "Danıştay",
    tags: ["danıştay", "idari-yargı", "yüksek-mahkeme"],
    customerFacing: {
      prompt: "Danıştay adli yargı mı, idari yargı mı başlığıdır?",
      answer: "İdari yargı başlığıdır.",
      explanation:
        "Yargıtay adli yargı ile, Danıştay idari yargı ile eşleştirilir. İsim benzerliği zor sorularda kullanılır.",
      mnemonic:
        "Danıştay dosyasında idari mühür, Yargıtay dosyasında adli mühür vardır.",
    },
    internal: {
      confusionPair: ["adli yargı", "idari yargı"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "ysk_election_management",
    deckId: "constitutional_confusions",
    topic: "Yüksek Seçim Kurulu",
    tags: ["ysk", "seçim", "kurul"],
    customerFacing: {
      prompt: "Seçimlerin yönetimi ve denetimi denince hangi kurul öne çıkar?",
      answer: "Yüksek Seçim Kurulu öne çıkar.",
      explanation:
        "Seçim uyuşmazlıkları ve seçim sürecinin yönetimi YSK başlığıyla hatırlanır; genel mahkeme gibi düşünülmez.",
      mnemonic:
        "Sandık haritasının üstünde YSK pusulası durur.",
    },
    internal: {
      confusionPair: ["mahkemeler", "YSK"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "central_local_administration_split",
    deckId: "constitutional_confusions",
    topic: "İdarenin kuruluşu",
    tags: ["idare", "merkezi-idare", "yerinden-yönetim"],
    customerFacing: {
      prompt: "İdarenin kuruluşunda iki ana ilke hangi ayrımdır?",
      answer: "Merkezden yönetim ve yerinden yönetim ayrımıdır.",
      explanation:
        "İdare hukuku başlangıcında merkezi idare ile mahalli idare/kamu kurumları ayrımı sonraki soruların temelidir.",
      mnemonic:
        "İdare haritası iki renge ayrılır: merkez çizgisi ve yerinden yönetim adaları.",
    },
    internal: {
      confusionPair: ["merkezden yönetim", "yerinden yönetim"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "social_rights_positive_status",
    deckId: "constitutional_confusions",
    topic: "Hakların sınıflandırılması",
    tags: ["haklar", "sosyal-haklar", "pozitif-statü"],
    customerFacing: {
      prompt: "Sosyal ve ekonomik haklar hangi statü haklarıyla ilişkilendirilir?",
      answer: "Pozitif statü haklarıyla ilişkilendirilir.",
      explanation:
        "Kişi hakları negatif statü, siyasi haklar aktif statü, sosyal-ekonomik haklar pozitif statü şeklinde kodlanır.",
      mnemonic:
        "Sosyal hak kartında devletten destek isteyen artı işareti bulunur.",
    },
    internal: {
      confusionPair: ["negatif statü", "pozitif statü"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "political_rights_active_status",
    deckId: "constitutional_confusions",
    topic: "Siyasi haklar",
    tags: ["haklar", "siyasi-haklar", "aktif-statü"],
    customerFacing: {
      prompt: "Seçme, seçilme ve siyasi faaliyette bulunma hakları hangi statüyle kodlanır?",
      answer: "Aktif statü haklarıyla kodlanır.",
      explanation:
        "Aktif statü, kişinin devlet yönetimine katılma rolünü anlatır. Bu yüzden seçim hakları bu gruba bağlanır.",
      mnemonic:
        "Oy pusulası aktif statü kürsüsüne tırmanır.",
    },
    internal: {
      confusionPair: ["pozitif statü", "aktif statü"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "personal_rights_negative_status",
    deckId: "constitutional_confusions",
    topic: "Kişi hakları",
    tags: ["haklar", "kişi-hakları", "negatif-statü"],
    customerFacing: {
      prompt: "Kişi hakları ve ödevleri hangi statü haklarıyla ilişkilendirilir?",
      answer: "Negatif statü haklarıyla ilişkilendirilir.",
      explanation:
        "Negatif statü, devletin müdahale etmemesi gereken özgürlük alanını anlatır. Kişi dokunulmazlığı gibi haklar bu grupta düşünülür.",
      mnemonic:
        "Kişi hakları kapısında 'müdahale etme' yazan kırmızı çizgi vardır.",
    },
    internal: {
      confusionPair: ["kişi hakları", "sosyal haklar"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "referendum_360_400_split",
    deckId: "constitutional_confusions",
    topic: "Anayasa değişikliği eşikleri",
    tags: ["anayasa", "referandum", "eşik"],
    customerFacing: {
      prompt: "Anayasa değişikliğinde 400 ve üzeri oy olursa halkoylaması her zaman zorunlu mudur?",
      answer: "Hayır. 400 ve üzeri kabulde halkoylaması zorunlu değil, Cumhurbaşkanının tercihine bağlı olabilir.",
      explanation:
        "360-399 arası zorunlu halkoylamasıyla, 400 ve üzeri kabul sonrası ihtimaller karıştırılır.",
      mnemonic:
        "360 kapısı sandığa zorunlu gider; 400 kapısında tercih levhası çıkar.",
    },
    internal: {
      confusionPair: ["360-399", "400 ve üzeri"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "international_treaties_law_force",
    deckId: "constitutional_confusions",
    topic: "Milletlerarası antlaşmalar",
    tags: ["antlaşma", "kanun", "temel-haklar"],
    customerFacing: {
      prompt: "Usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar hangi güçte kabul edilir?",
      answer: "Kanun hükmündedir.",
      explanation:
        "Temel haklara ilişkin antlaşmalarla kanun çatışması ayrıca özel bir nottur; genel kural antlaşmaların kanun hükmünde olmasıdır.",
      mnemonic:
        "Antlaşma dosyası kanun rafına yerleştirilir.",
    },
    internal: {
      confusionPair: ["antlaşma", "kanun"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "fundamental_right_treaty_priority",
    deckId: "constitutional_confusions",
    topic: "Temel hak antlaşmaları",
    tags: ["antlaşma", "temel-haklar", "kanun-çatışması"],
    customerFacing: {
      prompt: "Temel haklara ilişkin antlaşma ile kanun çatışırsa hangi metin esas alınır?",
      answer: "Milletlerarası antlaşma hükümleri esas alınır.",
      explanation:
        "Genel antlaşma-kanun eşitliği ile temel hak antlaşmalarındaki öncelik kuralı karıştırılır.",
      mnemonic:
        "Temel hak antlaşması kanun rafında öne doğru çekilir.",
    },
    internal: {
      confusionPair: ["kanun", "temel hak antlaşması"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "right_to_property_not_absolute",
    deckId: "constitutional_confusions",
    topic: "Mülkiyet hakkı",
    tags: ["mülkiyet", "haklar", "sınırlama"],
    customerFacing: {
      prompt: "Mülkiyet hakkı kamu yararı amacıyla sınırlandırılamayan mutlak bir hak mıdır?",
      answer: "Hayır. Kamu yararı amacıyla kanunla sınırlanabilir.",
      explanation:
        "Mülkiyet hakkı korunur; fakat kamu yararı ve kanunilik şartlarıyla sınırlandırma mümkündür.",
      mnemonic:
        "Mülkiyet tapusunun yanında kamu yararı cetveli durur.",
    },
    internal: {
      confusionPair: ["mutlak hak", "sınırlanabilir hak"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "no_crime_punishment_without_law",
    deckId: "constitutional_confusions",
    topic: "Suç ve cezada kanunilik",
    tags: ["ceza", "kanunilik", "haklar"],
    customerFacing: {
      prompt: "Kanunsuz suç ve ceza olur mu?",
      answer: "Hayır. Suç ve ceza kanuniliği esastır.",
      explanation:
        "Ceza hukukuna girişte en temel anayasal güvence budur. Geriye yürüme ve kıyas gibi ayrıntılar bu çekirdeğe bağlanır.",
      mnemonic:
        "Ceza kapısının üzerinde 'kanun yoksa ceza yok' tabelası asılıdır.",
    },
    internal: {
      confusionPair: ["idari keyfilik", "kanunilik"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "presumption_of_innocence",
    deckId: "constitutional_confusions",
    topic: "Masumiyet karinesi",
    tags: ["ceza", "haklar", "yargı"],
    customerFacing: {
      prompt: "Suçluluğu hükmen sabit oluncaya kadar kişi nasıl kabul edilir?",
      answer: "Suçsuz kabul edilir.",
      explanation:
        "Masumiyet karinesi ceza yargılaması haklarında temel güvence olarak sorulabilir.",
      mnemonic:
        "Yargı terazisi karar kesinleşmeden suçlu etiketi basmaz.",
    },
    internal: {
      confusionPair: ["şüpheli", "suçlu"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "right_to_legal_judge",
    deckId: "constitutional_confusions",
    topic: "Kanuni hâkim güvencesi",
    tags: ["yargı", "haklar", "mahkeme"],
    customerFacing: {
      prompt: "Bir kişi sonradan özel olarak kurulmuş mahkemede yargılanabilir mi?",
      answer: "Kanuni hâkim güvencesi buna karşı koruma sağlar.",
      explanation:
        "Mahkemenin önceden kanunla belirlenmiş olması, yargı güvencelerinin klasik başlığıdır.",
      mnemonic:
        "Mahkeme kapısı olaydan sonra değil, kanunla önceden çizilir.",
    },
    internal: {
      confusionPair: ["özel sonradan mahkeme", "kanuni hâkim"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "state_supervisory_council_not_court",
    deckId: "constitutional_confusions",
    topic: "Devlet Denetleme Kurulu",
    tags: ["ddk", "denetim", "yargı-değil"],
    customerFacing: {
      prompt: "Devlet Denetleme Kurulu mahkeme midir?",
      answer: "Hayır. Denetim organıdır, mahkeme değildir.",
      explanation:
        "Denetim, soruşturma ve yargılama kavramları karıştırılır. DDK yargı organı gibi düşünülmemelidir.",
      mnemonic:
        "DDK masasındaki büyüteç yargıç tokmağına dönüşmez.",
    },
    internal: {
      confusionPair: ["denetim organı", "mahkeme"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "court_of_accounts_not_constitutional_court",
    deckId: "constitutional_confusions",
    topic: "Sayıştay ve mali denetim",
    tags: ["sayıştay", "mali-denetim", "tbmm"],
    customerFacing: {
      prompt: "Kamu hesaplarının mali denetimi denince AYM mi, Sayıştay mı öne çıkar?",
      answer: "Sayıştay öne çıkar.",
      explanation:
        "AYM anayasal yargı; Sayıştay mali denetim ve hesap incelemesi başlığıyla hatırlanır.",
      mnemonic:
        "Mali hesap makinesi Sayıştay masasındadır, AYM kürsüsünde değil.",
    },
    internal: {
      confusionPair: ["AYM", "Sayıştay"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "civil_servant_dm_kamu_hizmeti",
    deckId: "constitutional_confusions",
    topic: "Kamu hizmetine girme",
    tags: ["kamu-hizmeti", "memurluk", "haklar"],
    customerFacing: {
      prompt: "Kamu hizmetine girme hakkı yalnız sosyal haklar başlığında mı düşünülür?",
      answer: "Hayır. Siyasi haklar ve ödevler bölümünde çalışılır.",
      explanation:
        "Memurlukla ilgili olduğu için sosyal hak sanılabilir; anayasal sınıflamada kamu hizmetine girme siyasi haklar arasında yer alır.",
      mnemonic:
        "Memur dosyası sosyal hak rafına değil, siyasi haklar bölümüne konur.",
    },
    internal: {
      confusionPair: ["sosyal hak", "siyasi hak"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "education_right_social_right",
    deckId: "constitutional_confusions",
    topic: "Eğitim hakkı",
    tags: ["eğitim", "sosyal-hak", "haklar"],
    customerFacing: {
      prompt: "Eğitim ve öğrenim hakkı hangi hak grubunda düşünülür?",
      answer: "Sosyal ve ekonomik haklar grubunda düşünülür.",
      explanation:
        "Hak sınıflandırması sorularında eğitim hakkı pozitif statü/sosyal haklar tarafına bağlanır.",
      mnemonic:
        "Okul tahtası sosyal haklar koridorunda durur.",
    },
    internal: {
      confusionPair: ["kişi hakkı", "sosyal hak"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "personal_liberty_security_personal_right",
    deckId: "constitutional_confusions",
    topic: "Kişi hürriyeti ve güvenliği",
    tags: ["kişi-hakları", "özgürlük", "haklar"],
    customerFacing: {
      prompt: "Kişi hürriyeti ve güvenliği sosyal hak mı, kişi hakkı mı?",
      answer: "Kişi hakkıdır.",
      explanation:
        "Hak gruplarında isim çağrışımına değil, anayasal bölümlemeye göre düşünmek gerekir.",
      mnemonic:
        "Özgürlük anahtarı kişi hakları cebindedir.",
    },
    internal: {
      confusionPair: ["sosyal hak", "kişi hakkı"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "association_prior_permission",
    deckId: "constitutional_confusions",
    topic: "Dernek kurma hürriyeti",
    tags: ["dernek", "haklar", "izin"],
    customerFacing: {
      prompt: "Dernek kurmak için önceden izin alınması şart mıdır?",
      answer: "Hayır. Önceden izin almadan dernek kurulabilir.",
      explanation:
        "Dernek kurma hürriyeti siyasi parti kurma sorularıyla benzer biçimde izin almama ilkesi üzerinden sorulabilir.",
      mnemonic:
        "Dernek kapısında izin penceresi değil, kuruluş bildirimi kutusu vardır.",
    },
    internal: {
      confusionPair: ["izin", "izin almadan kuruluş"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "union_right_social_economic",
    deckId: "constitutional_confusions",
    topic: "Sendika hakkı",
    tags: ["sendika", "sosyal-hak", "haklar"],
    customerFacing: {
      prompt: "Sendika hakkı hangi hak bölümünde kodlanır?",
      answer: "Sosyal ve ekonomik haklar bölümünde kodlanır.",
      explanation:
        "Sendika, toplantı ve dernek haklarıyla karıştırılabilir. Sınavda bölüm sınıflandırması önemlidir.",
      mnemonic:
        "Sendika rozeti sosyal haklar panosuna takılır.",
    },
    internal: {
      confusionPair: ["dernek hakkı", "sendika hakkı"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "right_to_health_social_right",
    deckId: "constitutional_confusions",
    topic: "Sağlık hakkı",
    tags: ["sağlık", "sosyal-hak", "haklar"],
    customerFacing: {
      prompt: "Sağlık hakkı hangi hak grubuyla ilişkilidir?",
      answer: "Sosyal ve ekonomik haklarla ilişkilidir.",
      explanation:
        "Devletin olumlu edim yükümlülüğü çağrıştıran sağlık, sosyal haklar içinde çalışılır.",
      mnemonic:
        "Sağlık çantasında sosyal haklar etiketi bulunur.",
    },
    internal: {
      confusionPair: ["kişi hakkı", "sosyal hak"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "trial_publicity_exception",
    deckId: "constitutional_confusions",
    topic: "Duruşmaların açıklığı",
    tags: ["yargı", "duruşma", "haklar"],
    customerFacing: {
      prompt: "Duruşmalar kural olarak gizli mi yapılır?",
      answer: "Hayır. Duruşmalar kural olarak alenidir.",
      explanation:
        "Genel kural açıklıktır; kapalı duruşma istisnaları ayrıca düşünülür.",
      mnemonic:
        "Mahkeme salonunun ana ışığı açıktır; perde yalnız istisnada çekilir.",
    },
    internal: {
      confusionPair: ["gizlilik", "aleniyet"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "administrative_judicial_review_open",
    deckId: "constitutional_confusions",
    topic: "İdarenin yargısal denetimi",
    tags: ["idare", "yargı-denetimi", "hukuk-devleti"],
    customerFacing: {
      prompt: "İdarenin her türlü eylem ve işlemine karşı yargı yolu kural olarak açık mıdır?",
      answer: "Evet. Hukuk devleti ilkesinin temel güvencelerindendir.",
      explanation:
        "İdarenin yargısal denetimi idare hukuku ve anayasa hukukunun ortak zor başlığıdır.",
      mnemonic:
        "İdare dosyasından mahkeme koridoruna açık bir yol çizilir.",
    },
    internal: {
      confusionPair: ["idari kesinlik", "yargı denetimi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "kanuni_esasi_first_constitution",
    deckId: "constitutional_confusions",
    topic: "Türk anayasa tarihi",
    tags: ["anayasa-tarihi", "kanuni-esasi", "ilk-anayasa"],
    customerFacing: {
      prompt: "Türk anayasa tarihinde ilk anayasa hangi metindir?",
      answer: "1876 Kanun-i Esasi ilk anayasa olarak hatırlanır.",
      explanation:
        "Anayasa tarihi sorularında ilk anayasa, ilk meclis, egemenlik anlayışı ve güçler ayrılığı ayrımları birlikte karıştırılır.",
      mnemonic:
        "Anayasa tarihinin ilk kapısında 1876 Kanun-i Esasi tabelası vardır.",
    },
    internal: {
      confusionPair: ["1876 Kanun-i Esasi", "1921 Teşkilat-ı Esasiye"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_1921_national_sovereignty",
    deckId: "constitutional_confusions",
    topic: "1921 Anayasası",
    tags: ["anayasa-tarihi", "1921", "egemenlik"],
    customerFacing: {
      prompt: "1921 Anayasası denince egemenlik anlayışı nasıl hatırlanır?",
      answer: "Egemenlik kayıtsız şartsız milletindir ilkesiyle hatırlanır.",
      explanation:
        "1921 metni kısa, savaş dönemi ve milli egemenlik vurgusuyla bilinir. 1924 ve 1961 ayrımlarıyla karıştırılabilir.",
      mnemonic:
        "1921 kürsüsünde millet egemenliği yazılı büyük bir pankart asılıdır.",
    },
    internal: {
      confusionPair: ["1921", "1924"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_1921_assembly_government",
    deckId: "constitutional_confusions",
    topic: "Meclis hükümeti sistemi",
    tags: ["anayasa-tarihi", "1921", "meclis-hükümeti"],
    customerFacing: {
      prompt: "1921 Anayasası hangi hükümet sistemiyle birlikte anılır?",
      answer: "Meclis hükümeti sistemiyle birlikte anılır.",
      explanation:
        "Meclis hükümeti, parlamenter sistem ve başkanlık sistemi ayrımı anayasa tarihi sorularında zorlaştırılır.",
      mnemonic:
        "1921 salonunda yürütme dosyaları da Meclis sıralarının üstündedir.",
    },
    internal: {
      confusionPair: ["meclis hükümeti", "parlamenter sistem"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_1961_constitutional_court",
    deckId: "constitutional_confusions",
    topic: "1961 Anayasası",
    tags: ["anayasa-tarihi", "1961", "anayasa-mahkemesi"],
    customerFacing: {
      prompt: "Anayasa Mahkemesinin kuruluşu hangi anayasa döneminde öne çıkar?",
      answer: "1961 Anayasası döneminde öne çıkar.",
      explanation:
        "1961 Anayasası özgürlükçü yapı, çift meclis ve Anayasa Mahkemesi gibi kurumlarla sınavda ayırt edilir.",
      mnemonic:
        "1961 panosunda AYM tabelası ilk kez ışık yakar.",
    },
    internal: {
      confusionPair: ["1961", "1982"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_1961_bicameral",
    deckId: "constitutional_confusions",
    topic: "Çift meclis",
    tags: ["anayasa-tarihi", "1961", "çift-meclis"],
    customerFacing: {
      prompt: "Cumhuriyet Senatosu ile çift meclisli yapı hangi anayasa dönemine bağlanır?",
      answer: "1961 Anayasası dönemine bağlanır.",
      explanation:
        "TBMM'nin tek meclisli güncel yapısıyla 1961 dönemindeki Millet Meclisi ve Cumhuriyet Senatosu ayrımı karıştırılır.",
      mnemonic:
        "1961 Meclis binasında iki ayrı salon kapısı görünür.",
    },
    internal: {
      confusionPair: ["tek meclis", "çift meclis"],
      ruleStatus: "old-rule",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitution_1982_casuistic",
    deckId: "constitutional_confusions",
    topic: "1982 Anayasasının niteliği",
    tags: ["anayasa-tarihi", "1982", "kazuistik"],
    customerFacing: {
      prompt: "1982 Anayasası kısa ve çerçeve bir anayasa olarak mı bilinir?",
      answer: "Hayır. Daha ayrıntılı, kazuistik bir anayasa olarak bilinir.",
      explanation:
        "1921'in kısa metin niteliği ile 1982'nin ayrıntılı yapısı ters çevrilmemelidir.",
      mnemonic:
        "1982 dosyası kalın ve çok sekmeli bir klasör gibi durur.",
    },
    internal: {
      confusionPair: ["çerçeve anayasa", "kazuistik anayasa"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "law_norm_hierarchy_constitution_top",
    deckId: "constitutional_confusions",
    topic: "Normlar hiyerarşisi",
    tags: ["hukuk-başlangıcı", "normlar-hiyerarşisi", "anayasa"],
    customerFacing: {
      prompt: "Normlar hiyerarşisinde en üstte hangi metin bulunur?",
      answer: "Anayasa en üst norm olarak bulunur.",
      explanation:
        "Kanun, kararname ve yönetmelik ayrımı yapılırken üst norm-anayasa fikri temel başlangıç noktasıdır.",
      mnemonic:
        "Hukuk merdiveninin en üst basamağında Anayasa kitabı durur.",
    },
    internal: {
      confusionPair: ["kanun", "anayasa"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "positive_law_current_rules",
    deckId: "constitutional_confusions",
    topic: "Pozitif hukuk",
    tags: ["hukuk-başlangıcı", "pozitif-hukuk", "kavram"],
    customerFacing: {
      prompt: "Pozitif hukuk, olması gereken ideal kuralları mı anlatır?",
      answer: "Hayır. Yürürlükte olan hukuk kurallarını anlatır.",
      explanation:
        "Pozitif hukuk ile ideal/doğal hukuk ayrımı temel hukuk bilgisi sorularında sık karıştırılır.",
      mnemonic:
        "Pozitif hukuk panosunda 'şu anda yürürlükte' mührü vardır.",
    },
    internal: {
      confusionPair: ["pozitif hukuk", "doğal hukuk"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "public_private_law_split",
    deckId: "constitutional_confusions",
    topic: "Hukuk dalları",
    tags: ["hukuk-başlangıcı", "kamu-hukuku", "özel-hukuk"],
    customerFacing: {
      prompt: "Anayasa, idare ve ceza hukuku kamu hukuku mu, özel hukuk mu tarafındadır?",
      answer: "Kamu hukuku tarafındadır.",
      explanation:
        "Kamu gücü, devlet örgütlenmesi ve ceza ilişkileri kamu hukuku; eşit kişiler arası ilişkiler özel hukuk tarafında düşünülür.",
      mnemonic:
        "Devlet mührü taşıyan dosyalar kamu hukuku rafına gider.",
    },
    internal: {
      confusionPair: ["kamu hukuku", "özel hukuk"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "civil_law_private_law",
    deckId: "constitutional_confusions",
    topic: "Özel hukuk dalları",
    tags: ["hukuk-başlangıcı", "medeni-hukuk", "özel-hukuk"],
    customerFacing: {
      prompt: "Medeni hukuk kamu hukuku mu, özel hukuk mu içinde yer alır?",
      answer: "Özel hukuk içinde yer alır.",
      explanation:
        "Medeni hukuk, borçlar hukuku ve ticaret hukuku özel hukuk örnekleriyle birlikte kodlanır.",
      mnemonic:
        "Medeni hukuk dosyası özel hukuk masasında kişi ve aile kartlarıyla durur.",
    },
    internal: {
      confusionPair: ["medeni hukuk", "idare hukuku"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "sanction_penalty_vs_compensation",
    deckId: "constitutional_confusions",
    topic: "Yaptırım türleri",
    tags: ["hukuk-başlangıcı", "yaptırım", "ceza-tazminat"],
    customerFacing: {
      prompt: "Ceza ile tazminat yaptırımı aynı amaca mı yönelir?",
      answer: "Hayır. Ceza kamu düzeni, tazminat zararın giderilmesiyle ilişkilidir.",
      explanation:
        "Yaptırım türlerinde ceza, tazminat, cebri icra, iptal ve hükümsüzlük ayrımı ezberden çok eşleştirme gerektirir.",
      mnemonic:
        "Ceza tokmağı kamu düzenine, tazminat kesesi zarara bakar.",
    },
    internal: {
      confusionPair: ["ceza", "tazminat"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "sanction_nullity_invalidity",
    deckId: "constitutional_confusions",
    topic: "Hükümsüzlük",
    tags: ["hukuk-başlangıcı", "yaptırım", "hükümsüzlük"],
    customerFacing: {
      prompt: "Hukuki işlemin geçerli sonuç doğurmaması hangi yaptırım fikrine bağlanır?",
      answer: "Hükümsüzlük fikrine bağlanır.",
      explanation:
        "Hükümsüzlük ile iptal karıştırılır. Hükümsüzlük, işlemin geçerli hukuki sonuç doğurmaması yönünden düşünülür.",
      mnemonic:
        "Hükümsüz işlem dosyasında sonuç sayfası boş kalır.",
    },
    internal: {
      confusionPair: ["iptal", "hükümsüzlük"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "sanction_annulment_admin_act",
    deckId: "constitutional_confusions",
    topic: "İptal yaptırımı",
    tags: ["hukuk-başlangıcı", "idari-işlem", "iptal"],
    customerFacing: {
      prompt: "Hukuka aykırı idari işlemin yargı kararıyla ortadan kaldırılması hangi yaptırımdır?",
      answer: "İptal yaptırımıdır.",
      explanation:
        "İdari işlem-yargısal denetim sorularında iptal, hükümsüzlük ve tazminat ayrımı birlikte gelebilir.",
      mnemonic:
        "İdari işlem dosyasına mahkeme kırmızı iptal damgası basar.",
    },
    internal: {
      confusionPair: ["iptal", "tazminat"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "coercive_enforcement_sanction",
    deckId: "constitutional_confusions",
    topic: "Cebri icra",
    tags: ["hukuk-başlangıcı", "yaptırım", "cebri-icra"],
    customerFacing: {
      prompt: "Borçlunun borcunu devlet gücüyle yerine getirmeye zorlanması hangi yaptırımdır?",
      answer: "Cebri icra yaptırımıdır.",
      explanation:
        "Cebri icra, ceza gibi cezalandırma değil; borcun devlet gücüyle yerine getirilmesine yöneliktir.",
      mnemonic:
        "Cebri icra dosyasında devlet gücü borç kapısını çalar.",
    },
    internal: {
      confusionPair: ["ceza", "cebri icra"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "real_person_birth",
    deckId: "constitutional_confusions",
    topic: "Kişilik",
    tags: ["hukuk-başlangıcı", "gerçek-kişi", "kişilik"],
    customerFacing: {
      prompt: "Gerçek kişilik ne zaman başlar?",
      answer: "Tam ve sağ doğumla başlar.",
      explanation:
        "Kişilik, hak ehliyeti ve fiil ehliyeti sorularında başlangıç anı sık karıştırılır.",
      mnemonic:
        "Kişilik kapısı tam ve sağ doğum anahtarıyla açılır.",
    },
    internal: {
      confusionPair: ["cenin", "tam ve sağ doğum"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "legal_capacity_all_persons",
    deckId: "constitutional_confusions",
    topic: "Hak ehliyeti",
    tags: ["hukuk-başlangıcı", "hak-ehliyeti", "kişilik"],
    customerFacing: {
      prompt: "Hak ehliyeti ile fiil ehliyeti aynı şey midir?",
      answer: "Hayır. Hak ehliyeti haklara ve borçlara sahip olabilme ehliyetidir.",
      explanation:
        "Hak ehliyeti herkeste bulunur; fiil ehliyeti ayırt etme gücü, erginlik ve kısıtlı olmama gibi şartlarla düşünülür.",
      mnemonic:
        "Hak ehliyeti kimlik kartı gibidir; fiil ehliyeti ayrıca anahtar ister.",
    },
    internal: {
      confusionPair: ["hak ehliyeti", "fiil ehliyeti"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "act_capacity_conditions",
    deckId: "constitutional_confusions",
    topic: "Fiil ehliyeti",
    tags: ["hukuk-başlangıcı", "fiil-ehliyeti", "kişilik"],
    customerFacing: {
      prompt: "Tam fiil ehliyeti için hangi üç koşul birlikte aranır?",
      answer: "Ayırt etme gücü, erginlik ve kısıtlı olmama birlikte aranır.",
      explanation:
        "Fiil ehliyeti sorularında tek şart yeterli sanılabilir. Üçlü koşul birlikte kodlanmalıdır.",
      mnemonic:
        "Fiil ehliyeti kapısında üç kilit vardır: ayırt etme, erginlik, kısıtlı olmama.",
    },
    internal: {
      confusionPair: ["hak ehliyeti", "fiil ehliyeti"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "good_faith_honesty_rule",
    deckId: "constitutional_confusions",
    topic: "İyiniyet ve dürüstlük",
    tags: ["hukuk-başlangıcı", "iyiniyet", "dürüstlük"],
    customerFacing: {
      prompt: "İyiniyet ile dürüstlük kuralı aynı kavram mıdır?",
      answer: "Hayır. İyiniyet bilmemeyi; dürüstlük kuralı davranış ölçüsünü anlatır.",
      explanation:
        "İyiniyet subjektif bilgi durumuyla, dürüstlük kuralı objektif davranış standardıyla ilişkilendirilir.",
      mnemonic:
        "İyiniyet gözlük, dürüstlük ise davranış terazisidir.",
    },
    internal: {
      confusionPair: ["iyiniyet", "dürüstlük kuralı"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "absolute_relative_rights",
    deckId: "constitutional_confusions",
    topic: "Mutlak ve nispi haklar",
    tags: ["hukuk-başlangıcı", "hak-türleri", "mutlak-nispi"],
    customerFacing: {
      prompt: "Mülkiyet hakkı herkese karşı ileri sürülebilen mutlak hak mı, nispi hak mı?",
      answer: "Mutlak hak olarak düşünülür.",
      explanation:
        "Mutlak hak herkese karşı; nispi hak belirli kişilere karşı ileri sürülebilir. Borç ilişkisinden doğan alacak hakkı nispi hak örneğidir.",
      mnemonic:
        "Mülkiyet rozeti tüm salona gösterilir; alacak hakkı belirli kişiye uzatılır.",
    },
    internal: {
      confusionPair: ["mutlak hak", "nispi hak"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "admin_law_status_law",
    deckId: "constitutional_confusions",
    topic: "İdare hukukunun niteliği",
    tags: ["idare-hukuku", "statü-hukuku", "kavram"],
    customerFacing: {
      prompt: "İdare hukuku sözleşme serbestisine dayalı özel hukuk gibi mi işler?",
      answer: "Hayır. Büyük ölçüde statü hukukudur.",
      explanation:
        "İdare hukukunda kamu gücü, tek yanlı işlem ve statü ilişkisi özel hukuk serbestisinden ayrılır.",
      mnemonic:
        "İdare hukuku masasındaki dosyada statü mührü vardır.",
    },
    internal: {
      confusionPair: ["sözleşme serbestisi", "statü hukuku"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "admin_law_scattered_rules",
    deckId: "constitutional_confusions",
    topic: "İdare hukukunun kaynakları",
    tags: ["idare-hukuku", "dağınık", "kaynak"],
    customerFacing: {
      prompt: "İdare hukuku tek ve kapsamlı bir kanunda mı toplanmıştır?",
      answer: "Hayır. Kuralları dağınık kaynaklarda yer alır.",
      explanation:
        "İdare hukuku mevzuatı tek kod halinde değil; anayasa, kanun, kararname, yönetmelik ve içtihatlarla dağınık biçimde çalışılır.",
      mnemonic:
        "İdare hukuku dosyaları tek klasörde değil, birçok rafta dağınıktır.",
    },
    internal: {
      confusionPair: ["kodifiye tek metin", "dağınık kaynaklar"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "public_service_continuity",
    deckId: "constitutional_confusions",
    topic: "Kamu hizmeti ilkeleri",
    tags: ["idare-hukuku", "kamu-hizmeti", "süreklilik"],
    customerFacing: {
      prompt: "Kamu hizmeti keyfi aralıklarla durdurulabilen bir faaliyet midir?",
      answer: "Hayır. Süreklilik kamu hizmetinin temel ilkelerindendir.",
      explanation:
        "Kamu hizmetinde süreklilik, eşitlik, değişkenlik ve bedelsizlik tartışmaları sınavda karıştırılabilir.",
      mnemonic:
        "Kamu hizmeti saatinin akrebi durmadan döner.",
    },
    internal: {
      confusionPair: ["süreklilik", "keyfi kesinti"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "public_service_equality",
    deckId: "constitutional_confusions",
    topic: "Kamu hizmetinde eşitlik",
    tags: ["idare-hukuku", "kamu-hizmeti", "eşitlik"],
    customerFacing: {
      prompt: "Kamu hizmetinden yararlanmada aynı durumdaki kişilere farklı davranmak kural mıdır?",
      answer: "Hayır. Aynı durumdakilere eşit davranma ilkesi esastır.",
      explanation:
        "Kamu hizmetinde eşitlik, mutlak aynı muamele değil; aynı durumda olanlara aynı ölçütle yaklaşma fikridir.",
      mnemonic:
        "Kamu hizmeti gişesinde aynı durumda olanlara aynı sıra numarası verilir.",
    },
    internal: {
      confusionPair: ["eşitlik", "keyfi ayrım"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "admin_action_subject_element",
    deckId: "constitutional_confusions",
    topic: "İdari işlemin konusu",
    tags: ["idare-hukuku", "idari-işlem", "konu"],
    customerFacing: {
      prompt: "İdari işlemin doğurduğu hukuki sonuç hangi unsurla ilgilidir?",
      answer: "Konu unsuruyla ilgilidir.",
      explanation:
        "Yetki işlemi yapan makamı, sebep işlemin gerekçesini, konu ise işlemin hukuki sonucunu anlatır.",
      mnemonic:
        "İşlem dosyasının sonuç sayfasında konu unsuru yazılıdır.",
    },
    internal: {
      confusionPair: ["sebep", "konu"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "admin_action_purpose_public_interest",
    deckId: "constitutional_confusions",
    topic: "İdari işlemin maksadı",
    tags: ["idare-hukuku", "idari-işlem", "maksat"],
    customerFacing: {
      prompt: "İdari işlemin maksat unsuru hangi amaçla ilişkilidir?",
      answer: "Kamu yararı amacıyla ilişkilidir.",
      explanation:
        "Maksat unsurundaki sakatlık genellikle yetkinin kamu yararı dışında kullanılmasına bağlanır.",
      mnemonic:
        "Maksat pusulası her zaman kamu yararı yönünü göstermelidir.",
    },
    internal: {
      confusionPair: ["sebep", "maksat"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "discretionary_power_not_arbitrary",
    deckId: "constitutional_confusions",
    topic: "Takdir yetkisi",
    tags: ["idare-hukuku", "takdir-yetkisi", "keyfilik"],
    customerFacing: {
      prompt: "İdarenin takdir yetkisi keyfi davranma serbestisi midir?",
      answer: "Hayır. Takdir yetkisi hukuk sınırları içinde kullanılır.",
      explanation:
        "Takdir yetkisi ile keyfilik aynı şey değildir. İdare kamu yararı, eşitlik ve ölçülülük gibi sınırlarla bağlıdır.",
      mnemonic:
        "Takdir kaleminin etrafında hukuk çizgileri vardır.",
    },
    internal: {
      confusionPair: ["takdir yetkisi", "keyfilik"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "service_fault_admin_liability",
    deckId: "constitutional_confusions",
    topic: "Hizmet kusuru",
    tags: ["idare-hukuku", "sorumluluk", "hizmet-kusuru"],
    customerFacing: {
      prompt: "Kamu hizmetinin kötü işlemesi, geç işlemesi veya hiç işlememesi hangi kusur fikridir?",
      answer: "Hizmet kusuru fikridir.",
      explanation:
        "İdarenin sorumluluğunda hizmet kusuru ile kişisel kusur ayrımı özellikle idari yargı sorularında kullanılır.",
      mnemonic:
        "Kamu hizmeti saati bozulunca hizmet kusuru lambası yanar.",
    },
    internal: {
      confusionPair: ["hizmet kusuru", "kişisel kusur"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "administrative_court_danistay_appeal",
    deckId: "constitutional_confusions",
    topic: "İdari yargı",
    tags: ["idare-hukuku", "idari-yargı", "danıştay"],
    customerFacing: {
      prompt: "İdari uyuşmazlıklar genel olarak adli mahkemelerde mi çözülür?",
      answer: "Hayır. İdari yargı düzeninde çözülür.",
      explanation:
        "İdari yargı-adli yargı ayrımı Danıştay, idare mahkemesi ve vergi mahkemesi başlıklarıyla birlikte çalışılır.",
      mnemonic:
        "İdari dosya adliye koridorundan ayrılıp idari yargı kapısına gider.",
    },
    internal: {
      confusionPair: ["adli yargı", "idari yargı"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "tax_court_admin_judiciary",
    deckId: "constitutional_confusions",
    topic: "Vergi mahkemeleri",
    tags: ["idare-hukuku", "vergi", "idari-yargı"],
    customerFacing: {
      prompt: "Vergi uyuşmazlıkları idari yargı dışında tamamen ayrı bir yargı kolu mudur?",
      answer: "Hayır. Vergi mahkemeleri idari yargı düzeni içinde düşünülür.",
      explanation:
        "Vergi mahkemesi adı ayrı görünse de idari yargı düzeniyle birlikte kodlanır.",
      mnemonic:
        "Vergi dosyası idari yargı binasında özel bir gişeye gider.",
    },
    internal: {
      confusionPair: ["vergi mahkemesi", "idari yargı"],
      ruleStatus: "exam-note",
      sourceType: "curriculum",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "civil_servant_neutrality",
    deckId: "constitutional_confusions",
    topic: "Memurların tarafsızlığı",
    tags: ["kamu-görevlileri", "memur", "tarafsızlık"],
    customerFacing: {
      prompt: "Memurlar kamu hizmetinde siyasi taraf gibi davranabilir mi?",
      answer: "Hayır. Tarafsızlık ve devlete bağlılık ilkeleriyle hareket ederler.",
      explanation:
        "Kamu görevlileri başlığında ödevler, yasaklar ve disiplin sorumluluğu karıştırılır.",
      mnemonic:
        "Memur masasının üstünde tarafsızlık pusulası durur.",
    },
    internal: {
      confusionPair: ["siyasi tarafgirlik", "tarafsızlık"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "civil_servant_loyalty",
    deckId: "constitutional_confusions",
    topic: "Memurların sadakat ödevi",
    tags: ["kamu-görevlileri", "memur", "sadakat"],
    customerFacing: {
      prompt: "Memurların temel ödevleri arasında devlete sadakat fikri var mıdır?",
      answer: "Evet. Sadakat kamu görevlileri için temel ödevlerdendir.",
      explanation:
        "Memur ödevleri listesinde sadakat, tarafsızlık, özen, amire saygı ve mal bildirimi gibi başlıklar ayrı çalışılır.",
      mnemonic:
        "Memur kimliğinin arkasında sadakat mührü bulunur.",
    },
    internal: {
      confusionPair: ["sadakat", "tarafsızlık"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "civil_servant_collective_action_limit",
    deckId: "constitutional_confusions",
    topic: "Memur yasakları",
    tags: ["kamu-görevlileri", "memur", "yasak"],
    customerFacing: {
      prompt: "Memurlar kamu hizmetini aksatacak toplu eylemleri serbestçe yapabilir mi?",
      answer: "Hayır. Kamu hizmetini aksatan toplu eylemler yasak başlıklarıyla ilişkilidir.",
      explanation:
        "Kamu görevlilerinin sendikal hakları ile kamu hizmetini aksatan eylem yasakları karıştırılmamalıdır.",
      mnemonic:
        "Memur eylem kartının yanında kamu hizmeti sürekliliği uyarısı yanar.",
    },
    internal: {
      confusionPair: ["sendikal hak", "hizmeti aksatan eylem"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "discipline_warning_reprimand",
    deckId: "constitutional_confusions",
    topic: "Disiplin cezaları",
    tags: ["kamu-görevlileri", "disiplin", "uyarma-kınama"],
    customerFacing: {
      prompt: "Uyarma ve kınama disiplin cezası mıdır?",
      answer: "Evet. Memur disiplin cezaları arasında yer alır.",
      explanation:
        "Disiplin hukukunda uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve çıkarma gibi yaptırımlar karıştırılır.",
      mnemonic:
        "Disiplin panosunun ilk iki küçük kartı uyarma ve kınamadır.",
    },
    internal: {
      confusionPair: ["uyarma", "kınama"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "discipline_dismissal_heaviest",
    deckId: "constitutional_confusions",
    topic: "Devlet memurluğundan çıkarma",
    tags: ["kamu-görevlileri", "disiplin", "çıkarma"],
    customerFacing: {
      prompt: "Memur disiplin cezalarında en ağır sonuç hangi başlıktır?",
      answer: "Devlet memurluğundan çıkarma en ağır sonuçtur.",
      explanation:
        "Disiplin cezaları hafiften ağıra sıralanırken çıkarma cezası en uç yaptırım olarak hatırlanır.",
      mnemonic:
        "Disiplin merdiveninin en üst basamağında çıkarma kapısı vardır.",
    },
    internal: {
      confusionPair: ["kademe durdurma", "memurluktan çıkarma"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "administrative_guardianship_local_governments",
    deckId: "constitutional_confusions",
    topic: "Mahalli idareler üzerinde vesayet",
    tags: ["idare", "mahalli-idare", "vesayet"],
    customerFacing: {
      prompt: "Merkezi idare, mahalli idareler üzerinde tamamen hiyerarşik üst müdür gibi mi davranır?",
      answer: "Hayır. Mahalli idareler üzerinde idari vesayet denetimi söz konusudur.",
      explanation:
        "Ayrı kamu tüzel kişiliği nedeniyle hiyerarşi değil, kanunun öngördüğü vesayet denetimi kavramı kullanılır.",
      mnemonic:
        "Merkez bina ile yerel bina arasında hiyerarşi merdiveni değil, vesayet köprüsü vardır.",
    },
    internal: {
      confusionPair: ["hiyerarşi", "idari vesayet"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "municipality_local_public_entity",
    deckId: "constitutional_confusions",
    topic: "Belediye",
    tags: ["idare", "belediye", "mahalli-idare"],
    customerFacing: {
      prompt: "Belediye merkezi idarenin taşra teşkilatı mıdır?",
      answer: "Hayır. Belediye mahalli idare olarak yerinden yönetim tarafındadır.",
      explanation:
        "Valilik ve kaymakamlık merkezi idarenin taşra tarafında; belediye ise yerel yönetim tarafında kodlanır.",
      mnemonic:
        "Belediye binası merkezden yönetim haritasında değil, yerel yönetim adasında durur.",
    },
    internal: {
      confusionPair: ["belediye", "valilik"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "village_local_administration",
    deckId: "constitutional_confusions",
    topic: "Köy",
    tags: ["idare", "köy", "mahalli-idare"],
    customerFacing: {
      prompt: "Köy mahalli idare örneklerinden biri midir?",
      answer: "Evet. Köy mahalli idare örnekleri arasında sayılır.",
      explanation:
        "İl özel idaresi, belediye ve köy üçlüsü yerel yönetim sorularında birlikte hatırlanır.",
      mnemonic:
        "Mahalli idare panosunda köy tabelası belediye ve il özel idaresiyle yan yanadır.",
    },
    internal: {
      confusionPair: ["köy", "mahalle"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "province_special_administration",
    deckId: "constitutional_confusions",
    topic: "İl özel idaresi",
    tags: ["idare", "il-özel-idaresi", "mahalli-idare"],
    customerFacing: {
      prompt: "İl özel idaresi valilikle aynı şey midir?",
      answer: "Hayır. İl özel idaresi mahalli idaredir; valilik merkezi idare temsilidir.",
      explanation:
        "İl özel idaresi adı il düzeyini çağrıştırdığı için valilikle karıştırılır; fakat yerinden yönetim tarafındadır.",
      mnemonic:
        "İl haritasında valilik merkez mührü, il özel idaresi yerel rozet taşır.",
    },
    internal: {
      confusionPair: ["valilik", "il özel idaresi"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "capital_ankara_unamendable",
    deckId: "constitutional_confusions",
    topic: "Başkent",
    tags: ["anayasa", "başkent", "değiştirilemez"],
    customerFacing: {
      prompt: "Başkent Ankara hükmü değiştirilemez hükümlerle ilişkili midir?",
      answer: "Evet. Başkent Ankara ilk üç madde kapsamında korunur.",
      explanation:
        "Başkent, bayrak, milli marş ve resmi dil üçüncü madde içinde birlikte hatırlanır.",
      mnemonic:
        "Ankara tabelası ilk üç madde kalkanının altında durur.",
    },
    internal: {
      confusionPair: ["başkent", "değiştirilemez hükümler"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "official_language_turkish_unamendable",
    deckId: "constitutional_confusions",
    topic: "Resmi dil",
    tags: ["anayasa", "resmi-dil", "değiştirilemez"],
    customerFacing: {
      prompt: "Devletin dili Türkçedir hükmü hangi koruma alanında düşünülür?",
      answer: "İlk üç madde kapsamındaki değiştirilemez hükümlerle düşünülür.",
      explanation:
        "Bayrak, milli marş, başkent ve resmi dil üçüncü madde içinde sınavda birlikte kodlanır.",
      mnemonic:
        "Resmi dil levhası ilk üç madde vitrininin içinde durur.",
    },
    internal: {
      confusionPair: ["resmi dil", "değiştirilemez hükümler"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "secular_state_characteristic",
    deckId: "constitutional_confusions",
    topic: "Laiklik",
    tags: ["anayasa", "devletin-nitelikleri", "laiklik"],
    customerFacing: {
      prompt: "Laiklik devletin değiştirilemez nitelikleri arasında mıdır?",
      answer: "Evet. Devletin temel nitelikleri arasında yer alır.",
      explanation:
        "Laiklik, demokratik, sosyal hukuk devleti gibi ikinci madde nitelikleriyle birlikte çalışılır.",
      mnemonic:
        "İkinci madde panosunda laiklik ışığı diğer niteliklerle yanar.",
    },
    internal: {
      confusionPair: ["laiklik", "devletin nitelikleri"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "social_state_characteristic",
    deckId: "constitutional_confusions",
    topic: "Sosyal devlet",
    tags: ["anayasa", "devletin-nitelikleri", "sosyal-devlet"],
    customerFacing: {
      prompt: "Sosyal devlet ilkesi yalnız sosyal yardımlarla mı sınırlıdır?",
      answer: "Hayır. Devletin temel nitelikleri içinde geniş bir ilke olarak yer alır.",
      explanation:
        "Sosyal devlet, sosyal haklar ve pozitif statü haklarıyla bağlantılıdır; fakat yalnız yardım faaliyetinden ibaret değildir.",
      mnemonic:
        "Sosyal devlet panosunda haklar, hizmetler ve destekler birlikte görünür.",
    },
    internal: {
      confusionPair: ["sosyal devlet", "sosyal haklar"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "rule_of_law_requirements",
    deckId: "constitutional_confusions",
    topic: "Hukuk devleti",
    tags: ["anayasa", "hukuk-devleti", "devletin-nitelikleri"],
    customerFacing: {
      prompt: "Hukuk devleti denince idarenin yargısal denetimi önemli bir sonuç mudur?",
      answer: "Evet. İdarenin yargısal denetimi hukuk devletinin temel gereklerindendir.",
      explanation:
        "Hukuk devleti; kanunilik, yargı denetimi, temel hak güvenceleri ve belirlilik gibi ilkelerle birlikte sorulur.",
      mnemonic:
        "Hukuk devleti binasında idare kapısından mahkemeye açık koridor vardır.",
    },
    internal: {
      confusionPair: ["hukuk devleti", "idarenin yargı denetimi"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "unitary_state_not_federal",
    deckId: "constitutional_confusions",
    topic: "Üniter devlet",
    tags: ["anayasa", "devlet-yapısı", "üniter"],
    customerFacing: {
      prompt: "Türkiye federal devlet olarak mı, üniter devlet olarak mı kodlanır?",
      answer: "Üniter devlet olarak kodlanır.",
      explanation:
        "Devletin ülkesi ve milletiyle bölünmez bütünlüğü, üniter devlet yapısıyla birlikte hatırlanır.",
      mnemonic:
        "Türkiye haritası tek parça mavi mühürle işaretlenir.",
    },
    internal: {
      confusionPair: ["federal devlet", "üniter devlet"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "presidential_election_two_round",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanı seçimi",
    tags: ["cumhurbaşkanı", "seçim", "ikinci-tur"],
    customerFacing: {
      prompt: "Cumhurbaşkanlığı seçiminde ilk turda gerekli çoğunluk sağlanamazsa ne olur?",
      answer: "İkinci tur seçime gidilir.",
      explanation:
        "Milletvekili seçimlerinin tek turlu yapısıyla Cumhurbaşkanlığı seçimindeki ikinci tur ihtimali karıştırılır.",
      mnemonic:
        "Cumhurbaşkanı sandığında ikinci tur için yedek pusula durur.",
    },
    internal: {
      confusionPair: ["milletvekili seçimi", "Cumhurbaşkanlığı seçimi"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "parliamentary_election_single_round",
    deckId: "constitutional_confusions",
    topic: "Milletvekili seçimi",
    tags: ["tbmm", "seçim", "tek-tur"],
    customerFacing: {
      prompt: "Milletvekili genel seçimleri Cumhurbaşkanlığı seçimi gibi ikinci tura kalır mı?",
      answer: "Hayır. Milletvekili seçimleri tek tur mantığıyla yapılır.",
      explanation:
        "Cumhurbaşkanı seçimi ile TBMM seçimi aynı gün yapılabilir; fakat seçim mekanikleri aynı değildir.",
      mnemonic:
        "Meclis sandığında ikinci tur çekmecesi yoktur.",
    },
    internal: {
      confusionPair: ["tek tur", "ikinci tur"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "ysk_decisions_final_election",
    deckId: "constitutional_confusions",
    topic: "YSK kararları",
    tags: ["ysk", "seçim", "kesin-karar"],
    customerFacing: {
      prompt: "YSK kararları seçim sürecinde sıradan idari karar gibi mi temyiz edilir?",
      answer: "Hayır. YSK kararlarının kesinliği özel olarak hatırlanır.",
      explanation:
        "YSK seçim sürecinde yönetim ve denetim organıdır; kararlarının yargısal niteliği ve kesinliği karıştırılır.",
      mnemonic:
        "YSK karar kartının üzerinde 'kesin' mührü bulunur.",
    },
    internal: {
      confusionPair: ["idari karar", "YSK kesin kararı"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "deputy_oath_before_duty",
    deckId: "constitutional_confusions",
    topic: "Milletvekili andı",
    tags: ["tbmm", "milletvekili", "and"],
    customerFacing: {
      prompt: "Milletvekilleri göreve başlarken anayasal and içer mi?",
      answer: "Evet. Göreve başlarken and içme başlığıyla hatırlanır.",
      explanation:
        "Milletvekilliği kazanma, mazbata ve göreve başlama ayrımları and başlığıyla birlikte sorulabilir.",
      mnemonic:
        "Milletvekili sırasının üstünde and metni açık durur.",
    },
    internal: {
      confusionPair: ["seçilme", "göreve başlama"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_oath_before_tbmm",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanı andı",
    tags: ["cumhurbaşkanı", "tbmm", "and"],
    customerFacing: {
      prompt: "Cumhurbaşkanı göreve başlarken andı nerede içer?",
      answer: "TBMM önünde and içer.",
      explanation:
        "Cumhurbaşkanlığı seçimi, göreve başlama ve TBMM önünde and içme ayrımı birlikte karıştırılabilir.",
      mnemonic:
        "Cumhurbaşkanı and metni Meclis kürsüsünde açılır.",
    },
    internal: {
      confusionPair: ["seçim sonucu", "TBMM önünde and"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "minister_mp_incompatibility",
    deckId: "constitutional_confusions",
    topic: "Bakan ve milletvekilliği",
    tags: ["bakan", "milletvekili", "güncel-kural"],
    customerFacing: {
      prompt: "Güncel sistemde milletvekili bakan olarak atanırsa milletvekilliği devam eder mi?",
      answer: "Hayır. Bakan olarak atanırsa milletvekilliği sona erer.",
      explanation:
        "Eski parlamenter sistemde bakan-milletvekili ilişkisiyle güncel sistem ayrımı sık karıştırılır.",
      mnemonic:
        "Bakan koltuğuna oturan milletvekili rozeti Meclis sırasından çıkarılır.",
    },
    internal: {
      confusionPair: ["bakanlık", "milletvekilliği"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "vice_president_not_elected_directly",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanı yardımcısı",
    tags: ["cumhurbaşkanı-yardımcısı", "yürütme", "atama"],
    customerFacing: {
      prompt: "Cumhurbaşkanı yardımcıları halk tarafından ayrı bir seçimle mi seçilir?",
      answer: "Hayır. Cumhurbaşkanı tarafından atanır.",
      explanation:
        "Cumhurbaşkanı yardımcısı ile Cumhurbaşkanı seçimi ayrı düşünülmelidir; yardımcılar seçim pusulasında ayrı aday değildir.",
      mnemonic:
        "Yardımcı koltuğunda seçim pusulası değil, atama dosyası vardır.",
    },
    internal: {
      confusionPair: ["seçim", "atama"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "minister_question_written_only",
    deckId: "constitutional_confusions",
    topic: "Bakanlara soru",
    tags: ["tbmm", "bakan", "yazılı-soru"],
    customerFacing: {
      prompt: "Bakanlara sözlü soru güncel denetim yolu olarak mı çalışılır?",
      answer: "Hayır. Güncel sistemde yazılı soru başlığı öne çıkar.",
      explanation:
        "Sözlü soru ve gensoru eski kaynaklarda karşımıza çıkabilir; güncel denetim yollarında yazılı soru kodlanır.",
      mnemonic:
        "Sözlü soru mikrofonu kapanır, yazılı soru zarfı açılır.",
    },
    internal: {
      confusionPair: ["sözlü soru", "yazılı soru"],
      ruleStatus: "old-rule",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "court_of_accounts_final_account",
    deckId: "constitutional_confusions",
    topic: "Kesin hesap",
    tags: ["sayıştay", "bütçe", "kesin-hesap"],
    customerFacing: {
      prompt: "Kesin hesap sürecinde mali denetimle hangi kurum özellikle ilişkilidir?",
      answer: "Sayıştay özellikle ilişkilidir.",
      explanation:
        "Bütçe ve kesin hesap sorularında TBMM'nin kabul yetkisi ile Sayıştay'ın mali denetim rolü birlikte çalışılır.",
      mnemonic:
        "Kesin hesap defterinin yanında Sayıştay hesap makinesi durur.",
    },
    internal: {
      confusionPair: ["TBMM", "Sayıştay"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "universal_suffrage_general_equal",
    deckId: "constitutional_confusions",
    topic: "Seçim ilkeleri",
    tags: ["seçim", "genel-oy", "eşit-oy"],
    customerFacing: {
      prompt: "Genel oy ile eşit oy aynı ilke midir?",
      answer: "Hayır. Genel oy seçmen kapsamını, eşit oy her oyun eşit ağırlığını anlatır.",
      explanation:
        "Seçim ilkelerinde genel, eşit, gizli, açık sayım ve serbestlik kavramları ayrı anlam taşır.",
      mnemonic:
        "Genel oy kapıyı geniş açar; eşit oy teraziyi dengeler.",
    },
    internal: {
      confusionPair: ["genel oy", "eşit oy"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "free_elections_not_mandatory_choice",
    deckId: "constitutional_confusions",
    topic: "Serbest seçim",
    tags: ["seçim", "serbestlik", "oy"],
    customerFacing: {
      prompt: "Serbest seçim ilkesi seçmenin baskı altında oy vermesini kabul eder mi?",
      answer: "Hayır. Seçmenin özgür iradesiyle oy vermesini anlatır.",
      explanation:
        "Serbestlik ilkesi gizli oyla bağlantılıdır; fakat aynı kavram değildir.",
      mnemonic:
        "Seçmen kabinine baskı değil, özgür irade kartı girer.",
    },
    internal: {
      confusionPair: ["serbest seçim", "gizli oy"],
      ruleStatus: "exam-note",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "law_effective_date_promulgation",
    deckId: "constitutional_confusions",
    topic: "Kanunların yürürlüğü",
    tags: ["kanun", "yürürlük", "resmi-gazete"],
    customerFacing: {
      prompt: "Kanunlar yayımlanmadan uygulanır mı?",
      answer: "Hayır. Yayımlanma ve yürürlük tarihi ayrımı önemlidir.",
      explanation:
        "Kanun metninde yürürlük tarihi belirtilmiş olabilir; belirtilmemişse genel yürürlük kuralları ayrıca çalışılır.",
      mnemonic:
        "Kanun dosyası Resmi Gazete penceresinden görünmeden masaya inmez.",
    },
    internal: {
      confusionPair: ["kabul", "yayımlanma"],
      ruleStatus: "exam-note",
      sourceType: "law",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "official_gazette_publication",
    deckId: "constitutional_confusions",
    topic: "Resmi Gazete",
    tags: ["hukuk-başlangıcı", "resmi-gazete", "yürürlük"],
    customerFacing: {
      prompt: "Kanun ve birçok düzenleyici işlem kamuya hangi yayın kanalıyla duyurulur?",
      answer: "Resmi Gazete yayımıyla duyurulur.",
      explanation:
        "Yürürlük ve bilinirlik sorularında Resmi Gazete yayımı merkezi kavramdır.",
      mnemonic:
        "Hukuk duyuru panosunda Resmi Gazete logosu asılıdır.",
    },
    internal: {
      confusionPair: ["duyuru", "Resmi Gazete"],
      ruleStatus: "exam-note",
      sourceType: "manual",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "constitutional_supremacy_binding",
    deckId: "constitutional_confusions",
    topic: "Anayasanın bağlayıcılığı",
    tags: ["anayasa", "üstünlük", "bağlayıcılık"],
    customerFacing: {
      prompt: "Anayasa yalnız vatandaşları mı bağlar?",
      answer: "Hayır. Yasama, yürütme, yargı, idare ve kişileri bağlayan üstün normdur.",
      explanation:
        "Anayasanın üstünlüğü ve bağlayıcılığı normlar hiyerarşisinin pratik sonucudur.",
      mnemonic:
        "Anayasa kitabı tüm devlet organlarının masasının üstünde durur.",
    },
    internal: {
      confusionPair: ["vatandaş", "devlet organları ve kişiler"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "equality_state_organs_bound",
    deckId: "constitutional_confusions",
    topic: "Kanun önünde eşitlik",
    tags: ["anayasa", "eşitlik", "idare"],
    customerFacing: {
      prompt: "Eşitlik ilkesi yalnız mahkemeleri mi bağlar?",
      answer: "Hayır. Devlet organları ve idare makamları işlemlerinde eşitliğe uygun hareket eder.",
      explanation:
        "Eşitlik ilkesi yargı dışındaki idari ve devlet işlemleri için de temel ölçüttür.",
      mnemonic:
        "Eşitlik terazisi yalnız mahkeme salonunda değil, idare koridorunda da durur.",
    },
    internal: {
      confusionPair: ["mahkemeler", "devlet organları ve idare"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
  {
    id: "president_not_criminally_irresponsible",
    deckId: "constitutional_confusions",
    topic: "Cumhurbaşkanının sorumluluğu",
    tags: ["cumhurbaşkanı", "soruşturma", "sorumluluk"],
    customerFacing: {
      prompt: "Cumhurbaşkanının cezai sorumluluğu tamamen yok mudur?",
      answer: "Hayır. Anayasadaki özel soruşturma ve Yüce Divan süreci ayrıca vardır.",
      explanation:
        "Eski sorumsuzluk ezberleriyle güncel Cumhurbaşkanı sorumluluğu hükümleri karıştırılmamalıdır.",
      mnemonic:
        "Cumhurbaşkanı dosyasında özel soruşturma yolu için ayrı kilitli rota çizilir.",
    },
    internal: {
      confusionPair: ["sorumsuzluk", "özel sorumluluk süreci"],
      ruleStatus: "current",
      sourceType: "constitution",
      needsReviewBeforePublish: true,
    },
  },
];
