const translations = {
    en: "Long live the otters!",
    fr: "Vive les loutres !",
    es: "¡Vivan las nutrias!",
    de: "Es leben die Otter!",
    it: "Viva le lontre!",
    pt: "Viva as lontras!",
    ar: "تحيا القنادس!",
    zh: "水獭万岁！",
    "zh-traditional": "水獺萬歲！",
    ru: "Да здравствуют выдры!",
    ja: "カワウソ万歳！",
    ko: "수달 만세!",
    hi: "ऊदबिलावों की जय हो!",
    bn: "ভিভে লে লুত্রেস!",
    tr: "Su samurları yaşasın!",
    id: "Hidup berang-berang!",
    sw: "Mbwa maji aishi!",
    pl: "Niech żyją wydry!",
    fi: "Saukot eläköön!",
    nl: "Lang leve de otters!",
    sv: "Länge leve uttrarna!",
    da: "Længe leve odderne!",
    no: "Lenge leve oterne!",
    cs: "Ať žijí vydry!",
    hu: "Éljenek a vidrák!",
    sk: "Nech žijú vydry!",
    ro: "Trăiască vidrele!",
    hr: "Neka žive vidre!",
    bg: "Да живеят видрите!",
    sr: "Нека живе видре!",
    th: "ขอให้ตัวนากมีชีวิตยืนยาว!",
    vi: "Chúc những con rái cá sống lâu!",
    el: "Ζήτω οι βίδρες!",
    uk: "Нехай живуть видри!",
    ms: "Hidup memerang!",
    ka: "გაიცანით წაულები!",
    hy: "Կեցցե ջրասամույրները!",
    tl: "Mabuhay ang mga otter!",
    lv: "Lai dzīvo ūdri!",
    lt: "Tegul gyvena ūdros!",
    is: "Lifið otturnar!",
    mt: "Jgħixu l-lontri!",
    sq: "Rroftë vidrat!",
    mr: "ऊदबिलावांची जयजयकार!",
    ne: "ऊदबिलावहरूको जय होस्!",
    km: "សូមឲ្យជីវិតរបស់ជ្រូកទឹកមានភាពរុងរឿង!",
    lo: "ຂໍໃຫ້ຊີວິດຂອງນາກນ້ຳຍືນຍາວ!",
    si: "ජලමාර්ගයේ ජීවත් වන්න!",
    eu: "Bizitza luzea igaraba!",
    gl: "Vivan as lontras!",
    cy: "Hir oes i'r dyfrgwn!",
    af: "Lang lewe die otters!",
    pa: "ਊਦਬਿਲਾਵਾਂ ਦੀ ਜੈ ਹੋ!",
    gu: "ઓટર્સ જીવે!",
    ta: "நீர்நாய்கள் வாழ்க!",
    te: "ఒటర్స్ జీవించండి!",
    ml: "ഒട്ടറുകൾ ജീവിക്കട്ടെ!",
    or: "ଓଟର୍ସ ଜୀବନ୍ତ ରୁହନ୍ତୁ!",
    as: "ভিভে লে লুত্রেস!",
    sd: "اوتر جي زندگي هجي!",
    kk: "Су суырлары өмір сүрсін!",
    uz: "Suv samurlari yashasin!",
    tk: "Suw samurlary ýaşasyn!",
    mn: "Усны сармагчин амьд байг!",
    ps: "د اوبو سپی ژوند وکړئ!",
    az: "Su samurları yaşasın!",
};

const rtlLanguages = ["ar", "he", "fa", "ur"];

function switchLanguage() {
    const language = document.getElementById("languageSwitch").value;
    const text = translations[language];
    const textElement = document.getElementById("text");

    textElement.textContent = text;
    document.title = text;

    if (rtlLanguages.includes(language)) {
        textElement.style.direction = "rtl";
    } else {
        textElement.style.direction = "ltr";
    }
}

document.addEventListener("click", function (e) {
    const selectElement = document.getElementById("languageSwitch");
    if (!selectElement.contains(e.target)) {
        return;
    }
});