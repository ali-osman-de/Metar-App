const WhatisApi = {
  data: [
    {
      id: 1,
      title: "METAR nedir ?",
      desp: "Meydan rutin hava raporu veya METAR (Meteorological Terminal Air Report), aeronatik amaçlar için belirlenen rutin ve güncel hava raporu. Uluslararası meydanlarda genellikle yarım saatte bir, diğer meydanlarda her saat başı yayınlanır. TAF'tan farklı olarak hava tahminini değil ilgili meydanın halihazırdaki aktüel hava durumunu özetler.",
    },
    {
      id: 2,
      title: "Hava Trafik Kontrolü",
      desp: "Hava trafik kontrolörleri, havaalanındaki güncel hava durumu koşullarını bilmek zorundadır. Bu bilgiler, iniş ve kalkışların düzenlenmesi, hava trafiğinin yönlendirilmesi ve güvenli bir havaalanı işletiminin sağlanması için önemlidir.",
    },
    {
      id: 3,
      title: "Acil Durum Yönetimi",
      desp: "Ani hava durumu değişiklikleri veya acil durumlar, havaalanı işletmecilerine ve uçuş ekiplerine hızlı bir şekilde iletilmelidir. METAR raporları, bu tür durumları önceden belirlemek ve gerektiğinde önlemler almak için kullanılır.",
    },
    {
      id: 4,
      title: "Havaalanı Operasyonları",
      desp: "Havaalanı işletmecileri, hava durumu koşullarına göre pist bakımını planlar. Örneğin, buzlanma durumunda ilgili önlemler alınmalıdır. METAR, havaalanı operasyonları için bu tür kararların alınmasına yardımcı olur.",
    },
    {
      id: 5,
      title: "Yolcu Bilgilendirmesi",
      desp: "Havaalanındaki yolcular, uçuşlarını etkileyebilecek hava durumu koşulları hakkında bilgi almak isterler. METAR raporları, havaalanındaki bilgi panoları ve çevrimiçi platformlar aracılığıyla yolculara hava durumu güncellemeleri sağlar.",
    },
    {
      id: 6,
      title: "METAR Nedir?",
      desp: "Meteorolojik Terminal Hava Raporu (METAR), meydanın güncel hava koşullarını belirten bir rapordur. Rüzgar, görüş mesafesi, bulutlar, sıcaklık gibi birçok unsuru içerir.",
    },
    {
      id: 7,
      title: "Otomatik Gözlemler",
      desp: "Birçok havaalanında METAR raporları otomatik meteorolojik istasyonlar tarafından otomatik olarak oluşturulur. Bu istasyonlar sensörler aracılığıyla hava koşullarını ölçer.",
    },
    {
      id: 8,
      title: "Raporun Formatı",
      desp: "METAR raporu belirli bir formatta gelir. Örneğin, rüzgar yönü ve hızı, bulut tipleri, sıcaklık ve çiy noktası gibi bilgiler belirli kısaltmalarla ifade edilir.",
    },
    {
      id: 9,
      title: "Notasyon Örnekleri",
      desp: "METAR raporunda sık kullanılan notasyonlara örnek olarak, 'KT' (knot) hız birimi, 'SM' (statute mile) görüş mesafesi birimi, 'CLR' (clear) açık gökyüzünü ifade eder.",
    },
    {
      id: 10,
      title: "İniş ve Kalkışlar",
      desp: "Pilotlar, METAR raporlarını inceleyerek hava koşullarını değerlendirirler. Raporlar, iniş ve kalkışlar için güvenli koşulların olup olmadığını belirlemede yardımcı olur.",
    },
    {
      id: 11,
      title: "Bulut Kategorileri",
      desp: "Bulut durumu, METAR raporlarında belirli kodlarla ifade edilir. Örneğin, 'FEW' (few) az miktarda bulut, 'BKN' (broken) parçalı bulutlar, 'OVC' (overcast) kapalı bulut tabakası anlamına gelir.",
    },
    {
      id: 12,
      title: "Uçuş Planlaması",
      desp: "Havayolu şirketleri ve pilotlar, uçuş planlaması yaparken METAR raporlarına başvururlar. Hava durumu koşulları uçuş rotasını etkileyebilir.",
    },
    {
      id: 13,
      title: "Uluslararası Standartlar",
      desp: "METAR raporları, uluslararası standartlara uygun olarak yayınlanır. Bu standartlar, farklı ülkelerdeki havaalanları arasında birleştirilebilir ve anlaşılabilir olmalarını sağlar.",
    },
    {
      id: 14,
      title: "Güncellenme Sıklığı",
      desp: "METAR raporları genellikle yarım saat ila bir saat arasında bir sıklıkla güncellenir. Bu sıklık, meydanın özelliklerine ve trafik yoğunluğuna bağlı olarak değişebilir.",
    },
    {
      id: 15,
      title: "Farklı Rapor Türleri",
      desp: "METAR'ın yanı sıra, SPECI (Special Weather Report) adı verilen özel raporlar da yayınlanabilir. Bu raporlar, beklenmedik hava durumu değişikliklerini bildirir.",
    },
    {
      id: 16,
      title: "Hava Trafiği Kontrolü",
      desp: "Hava trafik kontrolörleri, METAR raporlarına dayanarak iniş ve kalkışları düzenler ve hava trafiğini yönlendirir. Güvenli bir hava trafiği için bu bilgiler kritiktir.",
    },
    {
      id: 17,
      title: "Kritik Bilgiler",
      desp: "METAR raporları, sıcaklık, rüzgar, bulut durumu gibi kritik bilgiler içerir. Bu bilgiler, uçuş ekipleri, hava trafik kontrol ve havaalanı operasyonları için hayati öneme sahiptir.",
    },
    {
      id: 18,
      title: "Görüş Mesafesi",
      desp: "Görüş mesafesi, METAR raporlarında belirtilen önemli bir unsurdur. Pilotlar, görüş mesafesi bilgisi olmadan güvenli iniş ve kalkışlar gerçekleştiremezler.",
    },
    {
      id: 19,
      title: "Havaalanı Operasyonları",
      desp: "Havaalanı işletmecileri, METAR raporlarına dayanarak pist bakımı ve diğer operasyonel kararları planlarlar. Örneğin, karlı hava koşullarında gerekli önlemleri alabilirler.",
    },
    {
      id: 20,
      title: "Çiy Noktası",
      desp: "METAR raporlarında çiy noktası sıcaklığı da belirtilir. Çiy noktası, havadaki nemin doygunluğa ulaştığı sıcaklığı ifade eder. Bu, bulut oluşumu ve görüş mesafesi için önemlidir.",
    },
    {
      id: 21,
      title: "Karar Alma Süreci",
      desp: "Pilotlar, METAR raporlarına dayanarak uçuşlarını planlar ve kararlarını alır. Güvenli bir uçuş için mevcut hava koşullarını değerlendirmek kritik bir süreçtir.",
    },
    {
      id: 22,
      title: "Uçuş Güvenliği",
      desp: "METAR raporları, uçuş güvenliği için temel bilgiler sağlar. Hava durumu koşulları, kritik kararlar almadan önce dikkatlice değerlendirilmelidir.",
    },
    {
      id: 34,
      title: "Havaalanı Bilgilendirme",
      desp: "Havaalanındaki bilgi panoları ve çevrimiçi platformlar aracılığıyla METAR raporları havaalanı ziyaretçilerine ve yolcularına hava durumu güncellemeleri sağlar.",
    },
    {
      id: 23,
      title: "İkinci METAR Raporu",
      desp: "Bazı durumlarda, özellikle hava koşulları hızla değişiyorsa, meydandan ikinci bir METAR raporu yayınlanabilir. Bu rapor, güncel durumu yansıtmak için önemlidir.",
    },
    {
      id: 24,
      title: "Hava Koşullarının Analizi",
      desp: "METAR raporları, hava durumu analisti tarafından incelenerek genel hava koşulları ve olası değişiklikler hakkında bilgi sağlar. Bu, havacılık güvenliği için önemlidir.",
    },
    {
      id: 25,
      title: "Uçuş Ekibi Eğitimi",
      desp: "Uçuş ekipleri, METAR raporlarına dayanarak eğitilir. Farklı hava koşulları ve raporların nasıl okunacağı konusunda bilgi sahibi olmak kritik bir beceridir.",
    },
    {
      id: 26,
      title: "Havaalanı Sınıflandırması",
      desp: "METAR raporları, havaalanlarını belirli sınıflandırmalara tabi tutar. Bu sınıflandırmalar, havaalanının belirli koşullar altında hangi uçuşlara uygun olduğunu gösterir.",
    },
    {
      id: 27,
      title: "Hava Trafiği Yönetimi",
      desp: "Hava trafik yönetimi, METAR raporlarına dayanarak havaalanındaki iniş ve kalkışları düzenler. Bu, hava trafiğinin düzenli ve güvenli bir şekilde yönlendirilmesine yardımcı olur.",
    },
    {
      id: 28,
      title: "Uçuş Sertifikasyonu",
      desp: "Pilotlar, uçuş sertifikalarını alırken METAR raporlarını anlama becerisi göstermek zorundadırlar. Bu, güvenli ve yeterli bir pilotluk becerisi için önemlidir.",
    },
    {
      id: 29,
      title: "Hava Durumu Hizmetleri",
      desp: "Meteoroloji birimleri, METAR raporları gibi hava durumu hizmetleri sunarak havacılık topluluğuna güncel ve doğru bilgiler sağlar. Bu hizmetler, uçuş güvenliğini artırmaya yardımcı olur.",
    },
    {
      id: 30,
      title: "Raporun Oluşumu",
      desp: "METAR raporları, meydandaki hava gözlemcisi tarafından otomatik veya manuel olarak oluşturulur. Rapor, rüzgar hızı ve yönü, görüş mesafesi, bulut durumu, sıcaklık, çiy noktası gibi birçok hava öğesini içerir.",
    },
    {
      id: 31,
      title: "Kodlama Sistemi",
      desp: "METAR raporu, uluslararası standartlara göre belirlenen bir kodlama sistemini kullanır. Rüzgar yönü, görüş mesafesi, bulut tipleri gibi bilgiler belirli kısaltmalar ve rakamlarla ifade edilir.",
    },
    {
      id: 32,
      title: "TAF Nedir?",
      desp: "Terminal Aerodrome Forecast (TAF), METAR'ın gelecekteki bir zaman dilimi için olan benzeridir. Tahminler, meydanın gelecekteki hava durumunu belirli bir süre için öngörür.",
    },
    {
      id: 33,
      title: "Önemi",
      desp: "METAR bilgileri, pilotlar, hava trafik kontrolörleri ve havaalanı operatörleri için kritiktir. Güvenli uçuşlar, düzenli hava trafik yönlendirmesi ve havaalanı operasyonları için temel bilgiler sağlar.",
    },
  ],
};

export default WhatisApi;
